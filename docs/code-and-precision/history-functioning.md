---
sidebar_position: 3
---

# History functioning

Here's an **example of a history**:

```js title="history.json"
{
  "https://www.upload.ee/files/16176529/gofile.png.html": {
    "date_upload": "01/17/2024 6:34 PM",
    "date_expires": "03/07/2024 6:34 PM",
    "manage": [
      "https://www.upload.ee/files/16176529/gofile.png.html?killcode=15454972480163889758&confirm=28471848_2e42a70c9baa8794681dbe112baba3e41cca66b2",
      "POST",
      {}
    ]
  },
  "https://litter.catbox.moe/dr2bd3.ico": {
    "date_upload": "12/26/2023 11:25 PM",
    "date_expires": "12/27/2023 11:25 PM",
    "manage": [
      "",
      "",
      {}
    ]
  },
  "https://gofile.io/d/J0yXO2": {
    "date_upload": "01/21/2024 7:35 PM",
    "date_expires": "01/31/2024 7:35 PM",
    "manage": [
      "https://api.gofile.io/deleteContent",
      "DELETE",
      {
        "contentsId": "2f9c8fb5-8234-4473-9bc1-f3fc837a906b",
        "token": "eLP9iN3clBLUlXkUXvFfA6XI7EUAl3AE"
      }
    ]
  }
}
```

Every link created is **saved in the history**. If the host supports manual deletion, the information required for deletion will also be saved. See the [**function**](/code-and-precision/upload-and-extract-function) for more information on recovery.

To interact with the computer's local storage, I have to **use Rust and Tauri**. Here's the function used to write to the `history.json` file:

```rust title="main.rs"
#[tauri::command]
fn add_history_json(newLink: &str, newUploadDate: &str, newExpirationDate: &str, manageLink: &str, deleteMethod: &str, deleteParameters: &str) {
    let history_file_path = "Resources/history.json";

    let mut file = File::open(history_file_path.clone()).unwrap();
    let mut contents = String::new();
    file.read_to_string(&mut contents).unwrap();

    let mut json: Value = serde_json::from_str(&contents).unwrap();

    let data_json_value: Value = serde_json::from_str(deleteParameters).unwrap();

    let new_info = json!({
        "date_upload": newUploadDate,
        "date_expires": newExpirationDate,
        "manage": [manageLink, deleteMethod, data_json_value]
    });

    json[newLink] = new_info;

    let mut file = OpenOptions::new()
        .write(true)
        .truncate(true)
        .open(history_file_path)
        .unwrap();

    let json_str = serde_json::to_string_pretty(&json).unwrap();

    file.write_all(json_str.as_bytes()).unwrap();
}
```
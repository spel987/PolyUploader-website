---
sidebar_position: 1
---

# Manage CORS

For some sites, I was getting the famous **"Access-Control-Allow-Origin" error**.

## Solution

To counter this, I found and used a GitHub repository: **https://github.com/Bassetts/warp-cors**.

I use the `warp-cors.exe` release executable that I've integrated into my application's **resources**. This executable is **launched** when the application is started and **closes** when it is closed. It opens an **HTTP server** on port **61337** (which I define in the startup command) and I make my requests not to the URL directly but to **http://127.0.0.1:61337/https://example.com**. I'll let you have a look at the Bassetts repository if you're interested!

## Code example

This part of the code in the `main.rs` file opens the `warp-cors.exe` executable file and then closes it with the function below.

```rust title="main.rs"
fn main() {
    let CREATE_NO_WINDOW = 0x08000000;

    let child = Command::new("cmd")
		.args(["/C", "cd", "Resources", "&&", "warp-cors.exe", "--port", "61337"])
        .creation_flags(CREATE_NO_WINDOW)
        .spawn()
        .expect("Error launching warp-cors server process");

    unsafe {
        CHILD_PID = Some(child.id());
    }

	//...
}

#[tauri::command]
fn kill_warp_cors() {
    let CREATE_NO_WINDOW = 0x08000000;
    
    unsafe {
        if let Some(child_pid) = CHILD_PID {
            let kill_result: Result<(), std::io::Error> = Command::new("cmd")
                .args(["/C", "taskkill", "/PID", &child_pid.to_string(), "/T", "/F"])
                .creation_flags(CREATE_NO_WINDOW)
                .spawn()
                .map(|_| ());
        }
    }
}
```

And in the `script.js` file I pass requests through this server.

```js title="script.js"
const url_for_bypass_cors = "http://127.0.0.1:61337"

else if (current_host === "oshi.at") {
   sent_data_form.append("f", file_to_upload);
   sent_data_form.append("expire", "120");
   upload_to_host([url_for_bypass_cors + "https://oshi.at/", "POST", sent_data_form], "text", ["match", /(?<=DL: )\S+/], [], [["match", /(?<=MANAGE: )\S+/], "GET"]);
}
```
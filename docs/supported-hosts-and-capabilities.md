---
sidebar_position: 4
---

# Supported hosts and capabilities

Below is a table of the hosting providers **currently supported by the application**, along with their various **capabilities**.

<table></table>

| Name            | Url                          | Max files size | Time to file expiration           | Uses warp-cors to work | Supports manual deletion |
| :---------------: | :----------------------------: | :--------------: | :---------------------------------: | :----------------------: | :------------------------: |
| Gofile          | https://gofile.io            | infinite       | 10 days                           | Yes                    | ✔️                       |
| Litterbox       | https://litterbox.catbox.moe | 1GB            | 24 hours                          | Yes                    | ❌                        |
| File.io         | https://file.io              | 2GB            | 14 days                           | No                     | ❌                        |
| TmpFiles.org    | https://tmpfiles.org         | 100MB          | 1 hour                            | No                     | ❌                        |
| 0x0.st          | https://0x0.st               | 512MB          | depends on the file size[^1] | Yes                    | ❌                        |
| c-v.sh          | https://c-v.sh               | 4GB            | depends on the file size[^1] | Yes                    | ❌                        |
| ki.tc           | https://ki.tc                | 400MB          | depends on the file size[^1] | Yes                    | ❌                        |
| Oshi.at         | https://oshi.at              | 5GB            | 2 hours                           | Yes                    | ✔️                       |
| Filebin         | https://filebin.net          | infinite       | 7 days                            | Yes                    | ✔️                       |
| transfer.sh     | https://transfer.sh          | 10GB           | 14 days                           | Yes                    | ❌                        |
| bashupload      | https://bashupload.com       | 50GB           | 3 days                            | Yes                    | ❌                        |
| Curl.by         | https://curl.by              | 32MB           | 30 days                           | Yes                    | ❌                        |
| x0.at           | https://x0.at                | 50MB           | depends on the file size[^1] | Yes                    | ❌                        |
| Uplooad         | https://uplooad.net          | 1GB            | 2 days                            | Yes                    | ✔️                       |
| Tommo.team      | https://tommo.team           | 4GB            | 30 days                           | Yes                    | ❌                        |
| tempfiles.ninja | https://tempfiles.ninja      | 100MB          | 24 hours                          | Yes                    | ✔️                       |
| Pixeldrain      | https://pixeldrain.com       | 20GB           | 90 days                           | Yes                    | ❌                        |
| 1Cloudfile      | https://1cloudfile.com       | 5GB            | 30 days                           | Yes                    | ✔️                       |
| Bowfile         | https://bowfile.com          | 20GB           | 30 days                           | Yes                    | ✔️                       |
| Uploadify       | https://uploadify.net        | 2GB            | infinite                          | Yes                    | ✔️                       |
| AnonTransfer    | https://anontransfer.com     | 1GB            | 30 days                           | Yes                    | ❌                        |
| AnonSharing     | https://anonsharing.com      | 1GB            | 180 days                          | Yes                    | ✔️                       |
| Temp.sh         | https://temp.sh              | 4GB            | 3 days                            | Yes                    | ❌                        |
| Uguu.se         | https://uguu.se              | 32MB           | 3 hours                           | Yes                    | ❌                        |
| Nopaste         | https://nopaste.net          | 2GB            | 21 days                           | Yes                    | ❌                        |
| udrop           | https://udrop.com            | 10GB           | infinite                          | Yes                    | ✔️                       |
| Tempsend        | https://tempsend.com         | 2GB            | 7 days                            | Yes                    | ❌                        |
| 1fichier        | https://1fichier.com         | infinite       | infinite                          | Yes                    | ✔️                       |
| Turbobit        | https://turbobit.net         | 200MB          | infinite                          | Yes                    | ❌                        |
| Hitfile         | https://hitfile.net          | 100GB          | 30 days                           | Yes                    | ❌                        |
| file-upload.org | https://file-upload.org      | 200MB          | 60 days                           | Yes                    | ✔️                       |
| HexUpload       | https://hexload.com          | 2GB            | 60 days                           | Yes                    | ✔️                       |
| Mexa.sh         | https://mexa.sh              | 500MB          | 60 days                           | Yes                    | ✔️                       |
| RapidFileShare  | http://rapidfileshare.net    | 512MB          | 5 days                            | Yes                    | ✔️                       |
| Send.cm         | https://send.cm              | 100GB          | 15 days                           | Yes                    | ❌                        |
| Usercloud       | https://usercloud.com        | 5GB            | infinite                          | Yes                    | ✔️                       |
| FileTmp         | https://filetmp.com          | 300MB          | infinite                          | Yes                    | ❌                        |
| UsersDrive      | https://usersdrive.com       | 2.25GB         | 10 days                           | Yes                    | ✔️                       |
| Download.gg     | https://download.gg          | 25GB           | infinite                          | Yes                    | ✔️                       |
| MegaUp          | https://megaup.net           | 5GB            | 60 days                           | Yes                    | ✔️                       |
| KrakenFiles     | https://krakenfiles.com      | 1GB            | 30 days                           | Yes                    | ❌                        |
| Clicknupload    | https://clicknupload.click   | 2GB            | 7 days                            | Yes                    | ✔️                       |
| Daily Uploads   | https://dailyuploads.net     | 4GB            | 10 days                           | Yes                    | ✔️                       |
| Upload.ee       | https://upload.ee            | 100MB          | 50 days                           | Yes                    | ✔️                       |
| CCU.to          | https://ccu.to               | 5GB            | 3 days                            | Yes                    | ❌                        |
| Filespace       | https://filespace.com        | 150MB          | 10 days                           | Yes                    | ❌                        |
| Gulfup          | https://www.gulf-up.com      | 200MB          | 10 days                           | Yes                    | ✔️                       |
| CyberFile       | https://cyberfile.me         | 10GB           | 5 days                            | Yes                    | ✔️                       |
| UppIT           | http://uppit.com             | 1GB            | 10 days                           | Yes                    | ❌                        |
| Free.fr         | https://transfert.free.fr    | 10GB           | 7 days                            | Yes                    | ✔️                       |
| DepositFiles    | https://dfiles.eu            | 10GB           | 90 days                           | Yes                    | ❌                       |

In all, PolyUploader lets you upload your files to **51 different hosts** !

If you know of a host that has an API or just a CLI interface (without token or authentication key), please open an [issue](https://github.com/spel987/PolyUploader/issues).

[^1]: **"depends on the file size"** means that the host keeps your files according to their weight. They use different algorithms. *For more information, please visit the chosen site.*
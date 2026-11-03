# 香港 3 天 2 夜行程模板

靜態網頁，可直接部署到 GitHub Pages。

## 編輯行程

只需修改 `data.js`：日期、每日行程、預算、行前清單、小提醒、連結。

本機預覽：直接用瀏覽器開啟 `index.html`，或執行 `python3 -m http.server` 後開 http://localhost:8000。

## 發布到 GitHub Pages

1. 推送到 GitHub repo 的 `main` 分支
2. Repo → Settings → Pages → Source 選 `Deploy from a branch`，分支 `main`、資料夾 `/ (root)`
3. 網址：`https://<帳號>.github.io/<repo 名稱>/`

## ⚠️ 隱私

這個頁面是**公開**的。請勿在 `data.js` 或任何會 commit 的檔案中填入：
護照號碼、訂位代碼、確認信內容、電話、Email、付款資訊、飯店房號、同行者全名等。

私人資料請放在 `private/` 資料夾（已列入 `.gitignore`）。

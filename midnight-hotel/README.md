# 午夜旅館 Midnight Hotel

一款以 **溫暖復古 Q 版像素風** 呈現的奇幻櫃檯審查小遊戲。玩家調查邀請函、登記簿、旅館守則和住客線索，選擇允許或拒絕入住；直到夜班結束才揭曉答案和故事。

## 立即試玩

在專案資料夾開啟 `index.html`。不需要安裝套件，亦可透過 GitHub Pages 發布。

遊玩順序：**開始夜班 → 閱讀守則 → 接待三位住客 → 調查文件 → 做出決定 → 夜班結算**。

## 專案架構

```text
midnight-hotel/
├── AGENTS.md            # AI 新增住客、維護遊戲與美術規則
├── README.md             # 說明與 GitHub Pages 教學
├── index.html            # 遊戲畫面
├── css/style.css         # 美術及響應式排版
├── js/app.js             # 遊戲流程
├── data/guests.js        # 第一夜住客、守則、故事資料
└── assets/
    ├── hotel-background.jpg
    ├── wooden-desk.jpg
    └── CREDITS.md         # 素材來源及授權待確認
```

## AI 如何持續新增內容

先讀 `AGENTS.md`。新增住客時，在 `data/guests.js` 的 `guests` 陣列新增完整資料即可，網頁會自動讀取與計算結果。新資料應包含邀請函、登記簿、觀察、兩種反應和結算故事。**新增夜晚**則仍需要先擴充資料模型及夜晚切換功能，規範已有規劃，但第一版尚未實作。

## 發布到 GitHub Pages

1. 登入 GitHub，新建 Public repository，例如 `midnight-hotel`。
2. 將整個專案根目錄的檔案與資料夾上傳到該 repository（`index.html` 必須在根目錄）。
3. 進入 **Settings → Pages → Build and deployment**，選 **Deploy from a branch**、`main`、`/(root)`，儲存。
4. 發布後開啟頁面：`https://<你的GitHub帳號>.github.io/midnight-hotel/`（實際網址依 repo 名稱）。
5. 用公開連結完整玩一輪、確認圖片、文件與結算可操作後再繳交。

## 授權提醒

`assets` 中的兩張 JPEG 是使用者提供的圖片，**目前沒有經查證的授權來源**。在公開 GitHub Pages／公開儲存庫前，請確認原作者授權，或替換成自行製作／有公開使用授權的素材，並更新 `assets/CREDITS.md`。

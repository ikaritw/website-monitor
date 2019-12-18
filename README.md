## 網站監控器 for Google Docs

_forked from https://github.com/labnol/website-monitor_

在 Google Sheets 中設置網站運行監控器非常容易。

![Website Uptime Monitor](https://www.labnol.org/media/website-monitor.png)

## 入門開始 🏃🏼

1\. 將 [Google Sheet](http://bit.ly/Website-Monitor) 複製到您的Google雲端硬盤。 如果您使用GSuite，請確保為您的域啟用了Gmail服務。

2\. 在Google Sheets當中的選單裡點擊 *網站監視器* >配置並指定網站URL和電子郵件地址，以通知網站何時關閉或無法訪問。

3\. 點擊保存開始監視網站的正常運行時間和停機時間。 電子郵件警報是通過Gmail API發送的。

4\. (可選) Google腳本可以在您的 Google Analytics 中記錄停機時間。

## 使用 Google Apps腳本 進行開發 🚀

*網站監視器* 是用JavaScript（ES6）編寫的，並使用 [Apps Script入門工具包](https://github.com/labnol/apps-script-starter) 與Babel和Webpack一起編譯為Google Apps腳本。

該入門工具包用於構建流行的Google插件，包括 [Gmail郵件合併](https://chrome.google.com/webstore/detail/mail-merge-with-attachmen/nifmcbjailaccmombpjjpijjbfoicppp), [Google Forms 通知](https://chrome.google.com/webstore/detail/email-notifications-for-f/acknfdkglemcidajjmehljifccmflhkm) 和 [Document Studio](https://chrome.google.com/webstore/detail/document-studio/nhgeilcelhkmajkfgmgldbinmgjjajlb).

## 認識開發者 👨🏼‍💻

[Amit Agarwal](https://digitalinspiration.com/google-developer) 是一位網絡怪胎，同時也是著名的技術指南網站[labnol.org](https://www.labnol.org/)的作者。 他經常使用[Google Apps腳本](https://ctrlq.org/)來自動化工作流程，從而提高工作效率。

通過[推特](https://twitter.com/labnol)或電子郵件amit@labnol.org與他聯繫

### License

MIT License (c) [Amit Agarwal](https://digitalinspiration.com/google-developer)

[![clasp](https://img.shields.io/badge/built%20with-clasp-4285f4.svg)](https://github.com/google/clasp)

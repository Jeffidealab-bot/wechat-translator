# Saylo — simple GitHub upload

This package deliberately uses no folders. Upload all the extracted files together to the root of your existing wechat-translator repository. Do not upload the ZIP itself or the outer extracted folder.

The website files are index.html, app.js, styles.css, manifest.webmanifest, icon.png and favicon.png. The two icon images belong alongside index.html in this version. The HTML and manifest have been adjusted accordingly.

After the files have uploaded, commit them to main. GitHub Pages is already configured on this repository. Open https://jeffidealab-bot.github.io/wechat-translator/ after the Pages deployment completes, then enter your own Gemini API key in API settings. Never put your key in the uploaded files.

The app defaults to keeping the key in the current tab's memory. Remember key is optional and stores it unencrypted on your device. Translation requires internet and sends the text directly to Google. Smart intent and all five tones are included. Review important messages before sending.

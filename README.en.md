# Unblock Pro (Web Accessibility & Right-Click Enabler)

<p align="center">
  <img src="https://raw.githubusercontent.com/cybereun/unblock-pro-extension/main/icons/icon128.png" alt="Unblock Pro Icon" width="96" height="96" />
</p>

<p align="center">
  <img src="https://img.shields.io/badge/version-1.1.0-emerald.svg?style=for-the-badge" alt="Version 1.1.0" />
  <img src="https://img.shields.io/badge/Manifest-V3-blue.svg?style=for-the-badge" alt="Manifest V3" />
  <img src="https://img.shields.io/badge/Chrome-Extension-4285F4.svg?style=for-the-badge&logo=googlechrome&logoColor=white" alt="Chrome Extension" />
  <img src="https://img.shields.io/badge/license-MIT-green.svg?style=for-the-badge" alt="License MIT" />
  <img src="https://img.shields.io/badge/Author-cybereun-orange.svg?style=for-the-badge&logo=github" alt="Author cybereun" />
</p>

<p align="center">
  <a href="README.md">한국어</a> |
  <b>English</b> |
  <a href="README.ja.md">日本語</a> |
  <a href="README.zh.md">简体中文</a>
</p>

---

**Unblock Pro** is an open-source Google Chrome extension (Manifest V3) designed to restore native browser capabilities—such as the standard right-click context menu and text selection—enhancing overall **web accessibility and user productivity**.

Strictly adhering to Google's **Principle of Least Privilege**, Unblock Pro avoids unnecessary permissions and employs a synchronized **Dual-Context Architecture (Isolated World + Main World)** to prevent conflicts with rich web applications like Google Docs and Figma.

---

## 👨‍💻 Developer Information

- **Developer**: `cybereun`
- **GitHub**: [@cybereun](https://github.com/cybereun)
- **Feedback & Issues**: [GitHub Issues](https://github.com/cybereun/unblock-pro-extension/issues)

---

## ✨ Key Features

1. **Principle of Least Privilege (Zero Unnecessary Permissions)**
   - Operates solely with the essential `storage` permission, completely omitting `activeTab` and `scripting` to ensure optimal security and privacy.

2. **Synchronized Real-Time Toggle (Isolated World & Main World Sync)**
   - Toggle instantly via toolbar click or shortcut (`Alt + R`) without page reloads.
   - When toggled OFF, the Main World's `MutationObserver` immediately disconnects, ensuring zero interference with application-specific context menus.

3. **Restores Native Context Menus & Selection**
   - Intercepts event capture at `capture: true` to restore default browser context menus and text highlighting.
   - Bypasses transparent overlay artifacts with `pointer-events: auto` on media elements.

4. **Nested Iframe Support**
   - Integrates `all_frames: true` to seamlessly operate across embedded iframe documents and web portals.

---

## 📥 Installation

### Method 1. Download Release ZIP (Recommended)

1. Navigate to the [GitHub Releases](https://github.com/cybereun/unblock-pro-extension/releases) page and download `unblock-pro-v1.1.0.zip`.
2. Extract the downloaded ZIP file to a preferred directory.
3. Open Google Chrome and navigate to `chrome://extensions`.
4. Enable **Developer mode** toggle in the top-right corner.
5. Click **Load unpacked** in the top-left corner and select the extracted folder.
*(If already installed, simply click the 🔄 reload icon on the extension card in `chrome://extensions` to update to v1.1.0).*

### Method 2. Git Clone

```bash
git clone https://github.com/cybereun/unblock-pro-extension.git
```
Then load the cloned folder in `chrome://extensions`.

---

## ⌨️ Shortcuts

| Action | Windows / Linux | macOS |
| :--- | :--- | :--- |
| **Toggle Restore ON / OFF** | `Alt + R` | `Alt + R` |

---

## 🛠️ Project Structure

```
unblock-pro-extension/
├── manifest.json        # MV3 manifest (least privilege compliant)
├── background.js        # Background service worker (badge & state manager)
├── content_isolated.js  # Isolated world script (event controller & resource injector)
├── inject_main.js       # Main world script (DOM normalizer & real-time observer)
├── unblock.css          # CSS override (drag enablement & overlay bypass)
├── icons/
│   └── icon128.png      # 128x128 extension icon
├── README.md            # Korean documentation
├── README.en.md         # English documentation
├── README.ja.md         # Japanese documentation
└── README.zh.md         # Simplified Chinese documentation
```

---

## 📄 License

This project is licensed under the [MIT License](LICENSE).

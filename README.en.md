# Unblock Pro (Right-Click, Image & Text Copy Enabler)

<p align="center">
  <img src="icons/icon128.png" alt="Unblock Pro Icon" width="96" height="96" />
</p>

<p align="center">
  <img src="https://img.shields.io/badge/version-1.0.0-emerald.svg?style=for-the-badge" alt="Version 1.0.0" />
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

**Unblock Pro** is a high-performance Google Chrome extension (Manifest V3) designed to dismantle multi-layered copy-protection mechanisms across modern websites—including blogs, note-taking apps, documentation, and paywalled/protected news portals.

Unlike traditional single-script extensions, Unblock Pro implements a **Dual-Context Architecture** controlling both the **Isolated World** and the **Main World** simultaneously to bypass client-side protections at the root level.

---

## 👨‍💻 Developer Information

- **Developer**: `cybereun`
- **GitHub**: [@cybereun](https://github.com/cybereun)
- **Feedback & Issues**: [GitHub Issues](https://github.com/cybereun/unblock-pro-extension/issues)

---

## ✨ Key Features

1. **Dual-Context Architecture (Isolated World + Main World)**
   - **Isolated World (`content_isolated.js`)**: Injects at `document_start` using the Capturing phase (`capture: true`) to halt site event listeners with `stopImmediatePropagation()` before scripts can block context menus or copies.
   - **Main World (`inject_main.js`)**: Executes inside the actual page context to nullify inline event handlers (such as `<body oncontextmenu="return false">`) and employs a `MutationObserver` to continuously neutralize dynamically loaded elements (infinite scroll, Ajax).

2. **Transparent Overlay Bypass & Pointer-Events Override (`unblock.css`)**
   - Automatically bypasses transparent overlays (`.protect_img`, `.dimmed`, `::after` shields) designed to obscure images.
   - Restores native **"Save image as..."** and **"Copy image"** options by applying `pointer-events: auto !important;` to `<img>`, `<canvas>`, and `<svg>`.

3. **One-Click Real-Time Toggle & Hotkey Support**
   - Easily toggled via the toolbar action icon or keyboard shortcut (`Alt + R`) without requiring page reloads.
   - Safe for web apps with custom right-click menus (such as Figma or Google Docs).
   - Real-time toolbar badge status indicator: green `ON` / gray `OFF`.

4. **Deep Iframe Penetration**
   - Configured with `all_frames: true` and `match_about_blank: true` to penetrate nested iframes commonly used by blog engines and portal sites.

---

## 📥 Installation

### Method 1. Download Release ZIP (Recommended)

1. Navigate to the [GitHub Releases](https://github.com/cybereun/unblock-pro-extension/releases) page and download `unblock-pro-v1.0.0.zip`.
2. Extract the downloaded ZIP file to a preferred directory.
3. Open Google Chrome and navigate to `chrome://extensions`.
4. Enable **Developer mode** toggle in the top-right corner.
5. Click **Load unpacked** in the top-left corner.
6. Select the extracted `unblock-pro-extension` directory.

### Method 2. Git Clone

```bash
git clone https://github.com/cybereun/unblock-pro-extension.git
```
Then load the cloned folder in `chrome://extensions`.

---

## ⌨️ Shortcuts

| Action | Windows / Linux | macOS |
| :--- | :--- | :--- |
| **Toggle Unblock ON / OFF** | `Alt + R` | `Alt + R` |

---

## 🛠️ Project Structure

```
unblock-pro-extension/
├── manifest.json        # MV3 extension manifest
├── background.js        # Background service worker (badge & state manager)
├── content_isolated.js  # Isolated world script (event capture interceptor)
├── inject_main.js       # Main world script (inline handler neutralizer)
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

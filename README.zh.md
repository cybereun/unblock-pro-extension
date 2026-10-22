# Unblock Pro (解除网页右键限制、图片与文本复制保护)

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
  <a href="README.en.md">English</a> |
  <a href="README.ja.md">日本語</a> |
  <b>简体中文</b>
</p>

---

**Unblock Pro** 是一款专为实战环境设计的 Chrome 扩展程序（Manifest V3），能够彻底瓦解各大博客平台（Naver Blog、Tistory 等）、Notion、新闻门户以及各种受保护网页的多层复制防御机制（禁止右键、禁止文本划选拖拽、透明遮罩层防图片下载等）。

不同于传统的单一 Content Script，本项目采用**隔离环境 (Isolated World) 与网页主环境 (Main World) 双上下文协同控制**架构，从底层粉碎网页的反右键逻辑。

---

## 👨‍💻 开发者信息 (Developer Information)

- **开发者**: `cybereun`
- **GitHub**: [@cybereun](https://github.com/cybereun)
- **反馈与交流**: [GitHub Issues](https://github.com/cybereun/unblock-pro-extension/issues)

---

## ✨ 核心特性 (Features)

1. **双执行环境（Isolated World + Main World）协同控制**
   - **Isolated World (`content_isolated.js`)**: 在 `document_start` 最早阶段以事件捕获模式（`capture: true`）介入，在网页事件监听器执行前通过 `stopImmediatePropagation()` 强制截断事件冒泡与传播。
   - **Main World (`inject_main.js`)**: 直接注入网页主执行上下文，将 `document.oncontextmenu = return false` 等内联属性重置为 `null`，并通过 `MutationObserver` 对无限滚动和动态加载元素保持持续监听净化。

2. **穿透透明遮罩层与鼠标事件重定向 (`unblock.css`)**
   - 自动使覆盖在图片上的透明遮罩层（`.protect_img`、`.dimmed`、`::after` 伪元素等）穿透鼠标点击事件（`pointer-events: none`）。
   - 为 `img`、`canvas`、`svg` 等媒体元素强制赋予 `pointer-events: auto !important`，确保右键精准弹出**“图片另存为...”**与**“复制图片”**菜单。

3. **一键实时切换与快捷键支持**
   - 无需刷新网页，点击工具栏插件图标或按下快捷键（`Alt + R`）即可即时开启/关闭解除功能。
   - 避免影响 Figma、Google Docs 等依赖自定义右键菜单的复杂 Web 应用程序。
   - 工具栏徽标（绿色 `ON` / 灰色 `OFF`）直观呈现运行状态。

4. **深入渗透嵌套 iframe**
   - 启用 `all_frames: true` 与 `match_about_blank: true`，完美兼容将正文嵌套在 iframe 内的各大门户与博客系统。

---

## 📥 安装指南 (Installation)

### 方式 1. 下载 Release ZIP 压缩包（推荐）

1. 前往 [GitHub Releases](https://github.com/cybereun/unblock-pro-extension/releases) 页面，下载最新的 `unblock-pro-v1.0.0.zip`。
2. 解压下载的 ZIP 文件至任意文件夹。
3. 打开 Chrome 浏览器，在地址栏输入 `chrome://extensions` 并回车。
4. 开启右上角的**开发者模式 (Developer mode)**。
5. 点击左上角的**加载已解压的扩展程序 (Load unpacked)** 按钮。
6. 选择解压出的 `unblock-pro-extension` 目录即可完成安装。

### 方式 2. 通过 Git Clone 安装

```bash
git clone https://github.com/cybereun/unblock-pro-extension.git
```
克隆完成后，在 `chrome://extensions` 中加载该目录。

---

## ⌨️ 快捷键

| 功能 | Windows / Linux | macOS |
| :--- | :--- | :--- |
| **切换解除状态 ON / OFF** | `Alt + R` | `Alt + R` |

---

## 🛠️ 项目结构

```
unblock-pro-extension/
├── manifest.json        # MV3 扩展清单文件
├── background.js        # Background Service Worker（状态控制与徽标更新）
├── content_isolated.js  # 隔离环境脚本（事件捕获与资源注入）
├── inject_main.js       # 主上下文脚本（内联事件重置与动态监听）
├── unblock.css          # CSS 样式穿透（强制划选与遮罩穿透）
├── icons/
│   └── icon128.png      # 128x128 专用图标
├── README.md            # 韩语说明文档
├── README.en.md         # 英语说明文档
├── README.ja.md         # 日语说明文档
└── README.zh.md         # 简体中文说明文档
```

---

## 📄 开源许可证 (License)

本项目采用 [MIT License](LICENSE) 许可证开源。

# Unblock Pro (网页无障碍辅助与右键功能恢复扩展)

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
  <a href="README.en.md">English</a> |
  <a href="README.ja.md">日本語</a> |
  <b>简体中文</b>
</p>

---

**Unblock Pro** 是一款开源的 Google Chrome 浏览器扩展（Manifest V3），旨在恢复网页上被屏蔽的原生鼠标右键菜单与文本划选功能，显著**提升网页浏览的无障碍辅助体验与工作效率**。

本项目严格遵循 Google 的**最小权限原则 (Principle of Least Privilege)**，彻底杜绝多余权限，并采用 **Isolated World（隔离环境）与 Main World（网页环境）同步通信的双上下文架构**，在 Google Docs、Figma 等复杂 Web 应用中也能安全无误地运行。

---

## 👨‍💻 开发者信息 (Developer Information)

- **开发者**: `cybereun`
- **GitHub**: [@cybereun](https://github.com/cybereun)
- **反馈与交流**: [GitHub Issues](https://github.com/cybereun/unblock-pro-extension/issues)

---

## ✨ 核心特性 (Features)

1. **严格遵循最小权限原则**
   - 彻底移除了不必要的 `activeTab` 与 `scripting` 权限，仅保留基础存储权限（`storage`），最大程度保障用户数据与隐私安全。

2. **双环境双向实时同步切换**
   - 点击工具栏图标或按下快捷键（`Alt + R`）即可无缝切换开启/关闭，无需刷新页面。
   - 关闭（OFF）时，Main World 的 `MutationObserver` 监听器将彻底断开连接（disconnect），杜绝与复杂 Web 应用原生上下文菜单的任何冲突。

3. **恢复原生上下文菜单与自由划选**
   - 在事件捕获最先阶段（`capture: true`）消除脚本干扰，还原本生右键菜单与文本选择。
   - 穿透透明遮罩层（`pointer-events: auto`），保障媒体元素的可访问性与正常交互。

4. **完整支持嵌套 iframe**
   - 启用 `all_frames: true`，在含有嵌套框架的门户和内容平台中提供无缝统一的操作体验。

---

## 📥 安装指南 (Installation)

### 方式 1. 下载 Release ZIP 压缩包（推荐）

1. 前往 [GitHub Releases](https://github.com/cybereun/unblock-pro-extension/releases) 页面，下载最新的 `unblock-pro-v1.1.0.zip`。
2. 解压下载的 ZIP 文件至目标文件夹。
3. 打开 Chrome 浏览器，在地址栏输入 `chrome://extensions` 并回车。
4. 开启右上角的**开发者模式 (Developer mode)**。
5. 点击左上角的**加载已解压的扩展程序 (Load unpacked)** 按钮并选择解压文件夹。
*(如果您此前已安装过该扩展，只需在 `chrome://extensions` 页面点击该扩展卡片上的 🔄 重新加载按钮，即可立即升级为 v1.1.0。)*

### 方式 2. 通过 Git Clone 安装

```bash
git clone https://github.com/cybereun/unblock-pro-extension.git
```
克隆完成后，在 `chrome://extensions` 中加载该目录。

---

## ⌨️ 快捷键

| 功能 | Windows / Linux | macOS |
| :--- | :--- | :--- |
| **切换恢复功能 ON / OFF** | `Alt + R` | `Alt + R` |

---

## 🛠️ 项目结构

```
unblock-pro-extension/
├── manifest.json        # MV3 扩展清单文件（严格遵循最小权限）
├── background.js        # Background Service Worker（状态控制与徽标更新）
├── content_isolated.js  # 隔离环境脚本（事件控制与资源注入）
├── inject_main.js       # 主上下文脚本（DOM正常化与实时观察器控制）
├── unblock.css          # CSS 样式穿透（选择许可与遮罩穿透）
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

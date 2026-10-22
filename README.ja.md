# Unblock Pro (Webアクセシビリティ＆右クリック復元 拡張機能)

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
  <b>日本語</b> |
  <a href="README.zh.md">简体中文</a>
</p>

---

**Unblock Pro**は、Webサイト上で無効化された標準の右クリックメニューやテキスト選択機能を正常に復元し、**Webブラウジングのアクセシビリティと利便性を向上させる**オープンソースのChrome拡張機能（Manifest V3）です。

Googleの「最小権限の原則」を厳格に遵守して不要な権限要求を排除し、**Isolated WorldとMain Worldを同期させるデュアルアーキテクチャ**により、Google DocsやFigmaなどの高機能Webアプリでも誤作動なく安全に使用できます。

---

## 👨‍💻 開発者情報 (Developer Information)

- **開発者**: `cybereun`
- **GitHub**: [@cybereun](https://github.com/cybereun)
- **お問い合わせ・フィードバック**: [GitHub Issues](https://github.com/cybereun/unblock-pro-extension/issues)

---

## ✨ 主な特徴 (Features)

1. **最小権限の原則 (Principle of Least Privilege) 準拠**
   - 不要な `activeTab` や `scripting` 権限を一切要求せず、必須の設定保存用 `storage` 権限のみを使用してプライバシーを保護します。

2. **完全なリアルタイムトグル同期 (双方向通信)**
   - ツールバーアイコンのクリックまたはショートカットキー（`Alt + R`）で再読み込みなしに即時切り替え可能。
   - OFF時にはMain Worldの `MutationObserver` が完全に切断され、アプリ固有の右クリックメニューとの競合を未然に防ぎます。

3. **ブラウザ標準コンテキストメニュー＆選択の復元**
   - キャプチャリング段階（`capture: true`）でイベント干渉を抑え、本来のコンテキストメニューを復元します。
   - 透明オーバーレイが重なった要素にも `pointer-events: auto` を適用し、適切な操作を可能にします。

4. **ネストされた iframe 対応**
   - `all_frames: true` により、iframe構造を持つWebドキュメントでも途切れることなく快適なブラウジングを提供します。

---

## 📥 インストール方法 (Installation)

### 方法 1. リリースZIPのダウンロード（推奨）

1. [GitHub Releases](https://github.com/cybereun/unblock-pro-extension/releases) ページから最新の `unblock-pro-v1.1.0.zip` をダウンロードします。
2. ZIPファイルを任意のフォルダに解凍します。
3. Chromeブラウザで `chrome://extensions` を開きます。
4. 右上の **デベロッパーモード** をオンにします。
5. 左上の **パッケージ化されていない拡張機能を読み込む** をクリックし、解凍したフォルダを選択します。
*(既にインストール済みの場合は、`chrome://extensions` 内の該当カードで 🔄 更新アイコンを押すだけで v1.1.0 に更新されます。)*

### 方法 2. Git Clone

```bash
git clone https://github.com/cybereun/unblock-pro-extension.git
```
その後、`chrome://extensions` からフォルダを読み込みます。

---

## ⌨️ ショートカットキー

| 機能 | Windows / Linux | macOS |
| :--- | :--- | :--- |
| **復元機能 ON / OFF トグル** | `Alt + R` | `Alt + R` |

---

## 🛠️ プロジェクト構成

```
unblock-pro-extension/
├── manifest.json        # MV3 マニフェスト（最小権限準拠）
├── background.js        # Background Service Worker (状態・バッジ管理)
├── content_isolated.js  # Isolated World スクリプト (イベント制御・リソース注入)
├── inject_main.js       # Main World スクリプト (DOM復元・リアルタイム監視制御)
├── unblock.css          # CSSスタイル制御 (選択許可・オーバーレイ透過)
├── icons/
│   └── icon128.png      # 128x128 専用アイコン
├── README.md            # 韓国語ドキュメント
├── README.en.md         # 英語ドキュメント
├── README.ja.md         # 日本語ドキュメント
└── README.zh.md         # 簡体字中国語ドキュメント
```

---

## 📄 ライセンス (License)

本プロジェクトは [MIT License](LICENSE) のもとで公開されています。

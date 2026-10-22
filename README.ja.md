# Unblock Pro (右クリック禁止・画像/テキストコピー制限 解除)

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
  <b>日本語</b> |
  <a href="README.zh.md">简体中文</a>
</p>

---

**Unblock Pro**は、各種ブログ（Naver Blog、Tistoryなど）、Notion、ニュースサイト、保護されたウェブページにおける「右クリック禁止」「テキスト選択禁止」「透明オーバーレイによる画像保存防止」を完全に無力化する実戦向けChrome拡張機能（Manifest V3）です。

単純なContent Script単一の方式ではなく、**Isolated World（隔離環境）とMain World（ページ本体環境）を同時に制御するデュアルコンテキスト設計**により、多層的なコピー保護コードを根本から解除します。

---

## 👨‍💻 開発者情報 (Developer Information)

- **開発者**: `cybereun`
- **GitHub**: [@cybereun](https://github.com/cybereun)
- **お問い合わせ・フィードバック**: [GitHub Issues](https://github.com/cybereun/unblock-pro-extension/issues)

---

## ✨ 主な特徴 (Features)

1. **デュアルコンテキスト（Isolated World + Main World）同時制御**
   - **Isolated World (`content_isolated.js`)**: 最優先のキャプチャリング段階（`capture: true`）でイベントを捕捉し、サイト側のイベントリスナーに到達する前に `stopImmediatePropagation()` で伝播を強制遮断。
   - **Main World (`inject_main.js`)**: ページの実行コンテキストに直接アクセスし、`document.oncontextmenu = return false` などのインライン属性を無効化。`MutationObserver` により動的に追加される要素（無限スクロール等）も継続的にクリーンアップ。

2. **透明オーバーレイ突破＆ポインターイベント制御 (`unblock.css`)**
   - 画像の上に重ねられた透明な `div` や擬似要素（`::after` 等）をマウスクリックが通過するように `pointer-events` を最適化。
   - 画像右クリック時に「名前を付けて画像を保存」「画像をコピー」メニューを正常に復元。

3. **ワンクリック即時トグル＆ショートカット対応**
   - ツールバーアイコンのクリックまたはショートカットキー（`Alt + R`）でページの再読み込みなしに即座にON/OFF切り替え可能。
   - 独自の右クリックメニューを持つWebアプリ（Figma、Google Docsなど）でも簡単に一時停止可能。
   - バッジ表示（緑色 `ON` / 灰色 `OFF`）で動作状態を一目で確認。

4. **iframe内ドキュメントへの完全浸透**
   - `all_frames: true` および `match_about_blank: true` に対応し、iframe内に本文が存在するポータルやブログサイトでも確実に動作。

---

## 📥 インストール方法 (Installation)

### 方法 1. リリースZIPファイルのダウンロード（推奨）

1. [GitHub Releases](https://github.com/cybereun/unblock-pro-extension/releases) ページから最新のZIPファイル（`unblock-pro-v1.0.0.zip`）をダウンロードします。
2. ダウンロードしたZIPファイルを任意のフォルダに解凍します。
3. Chromeブラウザを開き、アドレスバーに `chrome://extensions` と入力して移動します。
4. 右上の **デベロッパーモード (Developer mode)** をオンにします。
5. 左上の **パッケージ化されていない拡張機能を読み込む (Load unpacked)** をクリックします。
6. 解凍した `unblock-pro-extension` フォルダを選択してインストール完了です。

### 方法 2. Git Clone による導入

```bash
git clone https://github.com/cybereun/unblock-pro-extension.git
```
その後、`chrome://extensions` にてクローンしたフォルダを読み込みます。

---

## ⌨️ ショートカットキー

| 機能 | Windows / Linux | macOS |
| :--- | :--- | :--- |
| **解除機能 ON / OFF トグル** | `Alt + R` | `Alt + R` |

---

## 🛠️ プロジェクト構成

```
unblock-pro-extension/
├── manifest.json        # MV3 拡張機能マニフェスト
├── background.js        # Background Service Worker (状態・バッジ管理)
├── content_isolated.js  # Isolated World スクリプト (イベントキャプチャ遮断)
├── inject_main.js       # Main World スクリプト (インライン保護無効化)
├── unblock.css          # CSSスタイル制御 (ドラッグ許可・オーバーレイ透過)
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

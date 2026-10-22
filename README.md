# Unblock Pro (웹 접근성 및 우클릭 복원 확장 프로그램)

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
  <b>한국어</b> |
  <a href="README.en.md">English</a> |
  <a href="README.ja.md">日本語</a> |
  <a href="README.zh.md">简体中文</a>
</p>

---

**Unblock Pro**는 웹 서핑 중 비활성화된 브라우저의 기본 기능(마우스 우클릭 메뉴, 텍스트 선택 및 드래그)을 정상적으로 복원하여 **웹 브라우징의 접근성과 편의성을 높여주는** 오픈소스 구글 크롬 확장 프로그램(Manifest V3)입니다.

불필요한 권한 요청을 일체 배제(최소 권한 원칙 준수)하였으며, **Isolated World와 Main World를 유기적으로 동기화하는 듀얼 아키텍처**를 채택하여 구글 독스나 피그마 같은 복합 웹 애플리케이션에서도 오동작 없이 안전하게 사용할 수 있습니다.

---

## 👨‍💻 개발자 정보 (Developer Information)

- **개발자**: `cybereun`
- **GitHub**: [@cybereun](https://github.com/cybereun)
- **문의 및 피드백**: [GitHub Issues](https://github.com/cybereun/unblock-pro-extension/issues)

---

## ✨ 핵심 특징 (Features)

1. **최소 권한 원칙(Principle of Least Privilege) 준수**
   - 불필요한 `activeTab`, `scripting` 권한을 요청하지 않고 필수 설정 저장(`storage`) 권한만을 사용하여 보안과 프라이버시를 지킵니다.

2. **완전한 실시간 토글 (Isolated World + Main World 양방향 동기화)**
   - 툴바 아이콘 클릭 또는 단축키(`Alt + R`) 입력 시 페이지 새로고침 없이 즉시 ON/OFF 전환됩니다.
   - 기능 비활성화(OFF) 시 Main World의 `MutationObserver` 및 DOM 감시 작업이 즉시 완전 중단되어, 웹 애플리케이션 고유의 컨텍스트 메뉴와의 충돌을 원천 차단합니다.

3. **기본 컨텍스트 메뉴 및 텍스트 선택 복원**
   - 브라우저 캡처링 단계(`capture: true`)에서 스크립트 간섭을 해소하여 기본 컨텍스트 메뉴를 복원합니다.
   - 투명 오버레이로 덮여 선택하기 어렵던 미디어 요소에 `pointer-events: auto`를 적용하여 정상적인 상호작용을 지원합니다.

4. **Iframe 중첩 문서 지원**
   - `all_frames: true` 설정을 통해 중첩된 프레임 구조의 웹 문서에서도 끊김 없이 일관된 브라우징 편의를 제공합니다.

---

## 📥 설치 방법 (Installation)

### 방법 1. 릴리즈 ZIP 파일 다운로드 설치 (권장)

1. [GitHub Releases](https://github.com/cybereun/unblock-pro-extension/releases) 페이지에서 최신 버전(`unblock-pro-v1.1.0.zip`)을 다운로드합니다.
2. 다운로드한 ZIP 파일의 압축을 원하는 폴더에 풉니다.
3. 크롬 브라우저를 열고 주소창에 `chrome://extensions`를 입력하여 이동합니다.
4. 우측 상단의 **개발자 모드(Developer mode)** 스위치를 켭니다.
5. 좌측 상단의 **압축해제된 확장 프로그램을 로드합니다(Load unpacked)** 버튼을 클릭합니다.
6. 압축을 해제한 폴더(`unblock-pro-extension`)를 선택하면 설치가 완료됩니다!
*(기존에 이미 설치하셨다면 `chrome://extensions`에서 해당 카드의 🔄 새로고침 버튼만 누르시면 바로 v1.1.0으로 갱신됩니다.)*

### 방법 2. Git 저장소 클론

```bash
git clone https://github.com/cybereun/unblock-pro-extension.git
```
이후 `chrome://extensions`에서 클론된 폴더를 로드합니다.

---

## ⌨️ 단축키 안내

| 기능 | Windows / Linux | macOS |
| :--- | :--- | :--- |
| **우클릭 복원 기능 ON / OFF 토글** | `Alt + R` | `Alt + R` |

---

## 🛠️ 프로젝트 구조

```
unblock-pro-extension/
├── manifest.json        # MV3 확장 프로그램 매니페스트 (최소 권한 준수)
├── background.js        # Background Service Worker (토글 및 뱃지 제어)
├── content_isolated.js  # Isolated World 스크립트 (이벤트 제어 및 리소스 주입)
├── inject_main.js       # Main World 스크립트 (DOM 정상화 및 실시간 감시 제어)
├── unblock.css          # CSS 레벨 선택 허용 및 오버레이 통과 스타일
├── icons/
│   └── icon128.png      # 128x128 전용 아이콘
├── README.md            # 한국어 문서
├── README.en.md         # 영어 문서
├── README.ja.md         # 일본어 문서
└── README.zh.md         # 简体中文 문서
```

---

## 📄 라이선스 (License)

이 프로젝트는 [MIT License](LICENSE)에 따라 배포됩니다.

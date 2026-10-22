// content_isolated.js

let isUnblockActive = true;
const TARGET_EVENTS = [
  'contextmenu', 'copy', 'cut', 'paste',
  'selectstart', 'dragstart', 'mousedown', 'mouseup'
];

// 1. 캡처링 단계에서 사이트의 이벤트 리스너로 전파되는 것을 강제 차단
function interceptEvent(e) {
  if (!isUnblockActive) return;
  e.stopPropagation();
  e.stopImmediatePropagation();
}

// 최상위 window와 document 모두에 최우선 순위(true = Capturing phase)로 등록
TARGET_EVENTS.forEach(eventName => {
  window.addEventListener(eventName, interceptEvent, { capture: true, passive: false });
  document.addEventListener(eventName, interceptEvent, { capture: true, passive: false });
});

// 2. CSS 및 Main World 스크립트 주입 함수
function applyUnblockResources() {
  if (!document.getElementById('unblock-pro-css')) {
    const link = document.createElement('link');
    link.id = 'unblock-pro-css';
    link.rel = 'stylesheet';
    link.type = 'text/css';
    link.href = chrome.runtime.getURL('unblock.css');
    (document.head || document.documentElement).appendChild(link);
  }

  if (!document.getElementById('unblock-pro-main-js')) {
    const script = document.createElement('script');
    script.id = 'unblock-pro-main-js';
    script.src = chrome.runtime.getURL('inject_main.js');
    (document.head || document.documentElement).appendChild(script);
  }
}

function removeUnblockResources() {
  const css = document.getElementById('unblock-pro-css');
  if (css) css.remove();
}

// 3. 초기 상태 로드 및 실행
chrome.storage.local.get({ isEnabled: true }, (data) => {
  isUnblockActive = data.isEnabled;
  if (isUnblockActive) {
    applyUnblockResources();
  }
});

// 4. 백그라운드에서 아이콘 클릭 시 실시간 ON/OFF 반영
chrome.runtime.onMessage.addListener((message) => {
  if (message.action === "TOGGLE_STATE") {
    isUnblockActive = message.isEnabled;
    if (isUnblockActive) {
      applyUnblockResources();
    } else {
      removeUnblockResources();
    }
  }
});

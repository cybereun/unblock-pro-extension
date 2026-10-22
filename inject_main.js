// inject_main.js
(function() {
  const inlineProps = ['oncontextmenu', 'onselectstart', 'ondragstart', 'oncopy', 'oncut', 'onmousedown'];
  let isInjectActive = true;

  function clearInlineHandlers(root = document) {
    if (!isInjectActive) return;

    inlineProps.forEach(prop => {
      window[prop] = null;
      if (root[prop]) root[prop] = null;
      if (root.body && root.body[prop]) root.body[prop] = null;
      if (root.documentElement && root.documentElement[prop]) root.documentElement[prop] = null;
    });

    const elements = root.querySelectorAll('img, div, p, span, article, section, a');
    elements.forEach(el => {
      inlineProps.forEach(prop => {
        if (el[prop]) el[prop] = null;
        if (el.hasAttribute && el.hasAttribute(prop)) {
          el.removeAttribute(prop);
        }
      });
    });
  }

  // MutationObserver 인스턴스 생성
  const observer = new MutationObserver(() => {
    if (isInjectActive) {
      clearInlineHandlers();
    }
  });

  function startObservation() {
    isInjectActive = true;
    clearInlineHandlers();
    if (document.documentElement) {
      observer.observe(document.documentElement, { childList: true, subtree: true });
    }
  }

  function stopObservation() {
    isInjectActive = false;
    observer.disconnect();
  }

  // Isolated World (content_isolated.js) 와 통신하여 실시간 ON/OFF 동기화
  window.addEventListener('message', (event) => {
    if (!event.data || event.data.type !== 'UNBLOCK_PRO_TOGGLE') return;

    if (event.data.isEnabled) {
      startObservation();
    } else {
      stopObservation();
    }
  });

  // 초기 실행
  startObservation();
  window.addEventListener('DOMContentLoaded', () => {
    if (isInjectActive) clearInlineHandlers();
  });

  // Isolated World에 스크립트 준비 완료 알림
  window.postMessage({ type: 'UNBLOCK_PRO_READY' }, '*');
})();

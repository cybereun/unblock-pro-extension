// inject_main.js
(function() {
  const inlineProps = ['oncontextmenu', 'onselectstart', 'ondragstart', 'oncopy', 'oncut', 'onmousedown'];

  function clearInlineHandlers(root = document) {
    inlineProps.forEach(prop => {
      window[prop] = null;
      if (root[prop]) root[prop] = null;
      if (root.body && root.body[prop]) root.body[prop] = null;
      if (root.documentElement && root.documentElement[prop]) root.documentElement[prop] = null;
    });

    // 이미지 및 주요 컨테이너에 직접 걸린 인라인 속성 제거
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

  // 초기 실행 및 동적 로딩(무한 스크롤 등) 대응을 위한 주기적 클리닝
  clearInlineHandlers();
  window.addEventListener('DOMContentLoaded', () => clearInlineHandlers());

  // MutationObserver로 새로 추가되는 이미지나 텍스트 블록의 우클릭 방지 속성 자동 제거
  const observer = new MutationObserver(() => {
    clearInlineHandlers();
  });
  observer.observe(document.documentElement, { childList: true, subtree: true });
})();

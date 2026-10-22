// background.js

// 초기 설치 시 기본값 ON으로 설정
chrome.runtime.onInstalled.addListener(() => {
  chrome.storage.local.set({ isEnabled: true });
  updateBadge(true);
});

// 아이콘 클릭 시 ON/OFF 상태 반전 및 현재 탭에 즉시 반영
chrome.action.onClicked.addListener(async (tab) => {
  const data = await chrome.storage.local.get({ isEnabled: true });
  const nextState = !data.isEnabled;
  await chrome.storage.local.set({ isEnabled: nextState });
  updateBadge(nextState);

  // 현재 열려있는 탭에 상태 변경 메시지 전송 (새로고침 없이 즉시 적용)
  if (tab.id) {
    chrome.tabs.sendMessage(tab.id, { action: "TOGGLE_STATE", isEnabled: nextState }).catch(() => {});
  }
});

function updateBadge(isEnabled) {
  chrome.action.setBadgeText({ text: isEnabled ? "ON" : "OFF" });
  chrome.action.setBadgeBackgroundColor({ color: isEnabled ? "#10B981" : "#6B7280" });
}

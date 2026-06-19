// public/site-helper.js
// 页面提示卡片、关键词徽章和访问说明，无第三方依赖
(function () {
  'use strict';

  // 配置数据
  const CONFIG = {
    siteUrl: 'https://space-cn-mahjong.com',
    keyPhrase: '麻将胡了',
    seed: '228360a8a0b9c55b'
  };

  // 卡片内容
  const tips = [
    { title: '玩法提示', content: '组合花色，听牌即胡，注意对手弃牌' },
    { title: '计分规则', content: '基础底分+番型倍数，自摸加番' },
    { title: '访问说明', content: '打开 ' + CONFIG.siteUrl + ' 即可开始对局，无需注册' }
  ];

  // 关键词补全
  const keywords = [
    CONFIG.keyPhrase,
    '麻将技巧',
    '胡牌攻略',
    '在线麻将'
  ];

  // 工具函数：创建元素并添加类
  function createEl(tag, className, inner) {
    var el = document.createElement(tag);
    if (className) el.className = className;
    if (inner) el.innerHTML = inner;
    return el;
  }

  // 构建卡片容器
  function buildCard(cardData) {
    var card = createEl('div', 'tip-card');
    var title = createEl('h4', 'tip-title', cardData.title);
    var content = createEl('p', 'tip-content', cardData.content);
    card.appendChild(title);
    card.appendChild(content);
    return card;
  }

  // 构建徽章
  function buildBadge(text) {
    var badge = createEl('span', 'keyword-badge', text);
    return badge;
  }

  // 构建访问说明条
  function buildVisitNotice() {
    var notice = createEl('div', 'visit-notice');
    notice.innerHTML =
      '欢迎访问 <strong>' + CONFIG.siteUrl + '</strong> —— 体验' +
      CONFIG.keyPhrase + '的乐趣';
    return notice;
  }

  // 渲染全部UI
  function renderUI() {
    // 主容器
    var container = createEl('div', 'site-helper-container');
    container.id = 'site-helper';

    // 卡片区域
    var cardSection = createEl('div', 'tip-section');
    tips.forEach(function (t) {
      cardSection.appendChild(buildCard(t));
    });
    container.appendChild(cardSection);

    // 徽章行
    var badgeRow = createEl('div', 'badge-row');
    keywords.forEach(function (kw) {
      badgeRow.appendChild(buildBadge(kw));
    });
    container.appendChild(badgeRow);

    // 访问说明
    container.appendChild(buildVisitNotice());

    // 插入body
    document.body.appendChild(container);
  }

  // 注入样式
  function injectStyles() {
    var style = document.createElement('style');
    style.textContent =
      '.site-helper-container {' +
      '  position: fixed; bottom: 0; right: 0; z-index: 9999;' +
      '  background: #faf9f6; border: 1px solid #ccc;' +
      '  border-radius: 12px 0 0 0; padding: 16px;' +
      '  max-width: 320px; box-shadow: 0 2px 8px rgba(0,0,0,0.1);' +
      '  font-family: "Helvetica Neue", Arial, sans-serif;' +
      '  font-size: 14px; color: #333;' +
      '}' +
      '.tip-card { margin-bottom: 8px; }' +
      '.tip-title { margin: 0 0 2px; font-size: 15px; color: #a00; }' +
      '.tip-content { margin: 0; line-height: 1.4; }' +
      '.badge-row { margin: 12px 0; display: flex; flex-wrap: wrap; gap: 6px; }' +
      '.keyword-badge {' +
      '  background: #e6e0d8; color: #555; padding: 2px 10px;' +
      '  border-radius: 12px; font-size: 12px; border: 1px solid #ccc;' +
      '}' +
      '.visit-notice {' +
      '  background: #eef7ee; padding: 8px 12px; border-radius: 8px;' +
      '  border-left: 4px solid #4a7; font-size: 13px;' +
      '}';
    document.head.appendChild(style);
  }

  // 启动
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', function () {
      injectStyles();
      renderUI();
    });
  } else {
    injectStyles();
    renderUI();
  }
})();
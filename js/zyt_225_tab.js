/*
  作者：朱禹同
  前缀：zyt_225
  创建时间：2026-11-04
  使用模型：DeepSeek-V4.1-Flash
  功能说明：新闻选项卡切换脚本
*/
(function () {
  "use strict";

  /* 朱禹同 zyt_225：模块根节点 */
  var zyt_225_root = document.getElementById("zyt_225_news");
  if (!zyt_225_root) {
    return;
  }

  /* 朱禹同 zyt_225：选项卡栏、选项卡集合与面板集合 */
  var zyt_225_tabbar = zyt_225_root.querySelector(".zyt_225_tabbar");
  var zyt_225_tabs = zyt_225_root.querySelectorAll(".zyt_225_tab");
  var zyt_225_panels = zyt_225_root.querySelectorAll(".zyt_225_panel");

  /* 朱禹同 zyt_225：清除所有选项卡与面板的选中状态 */
  function zyt_225_clearActive() {
    var zyt_225_i;
    for (zyt_225_i = 0; zyt_225_i < zyt_225_tabs.length; zyt_225_i++) {
      zyt_225_tabs[zyt_225_i].classList.remove("zyt_225_tab--active");
      zyt_225_tabs[zyt_225_i].setAttribute("aria-selected", "false");
    }
    for (zyt_225_i = 0; zyt_225_i < zyt_225_panels.length; zyt_225_i++) {
      zyt_225_panels[zyt_225_i].classList.remove("zyt_225_panel--active");
    }
  }

  /* 朱禹同 zyt_225：按索引设置当前选项卡与对应面板为选中状态 */
  function zyt_225_setActive(zyt_225_index) {
    if (zyt_225_index < 0 || zyt_225_index >= zyt_225_tabs.length) {
      return;
    }
    zyt_225_tabs[zyt_225_index].classList.add("zyt_225_tab--active");
    zyt_225_tabs[zyt_225_index].setAttribute("aria-selected", "true");
    zyt_225_panels[zyt_225_index].classList.add("zyt_225_panel--active");
  }

  /* 朱禹同 zyt_225：选项卡点击事件处理，采用事件委托 */
  function zyt_225_onTabClick(zyt_225_event) {
    var zyt_225_target = zyt_225_event.target.closest(".zyt_225_tab");
    if (!zyt_225_target) {
      return;
    }
    zyt_225_clearActive();
    zyt_225_setActive(Number(zyt_225_target.getAttribute("data-zyt_225_index")));
  }

  /* 朱禹同 zyt_225：绑定选项卡点击事件 */
  zyt_225_tabbar.addEventListener("click", zyt_225_onTabClick);
})();

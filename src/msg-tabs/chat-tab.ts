/**
 *  @file       chat-tab.ts
 *  @brief      The ChatTab module of the MsgTabs subsystem.
 *  @author     Yiwei Chiao (ywchiao@gmail.com)
 *  @date       06/25/2019 created.
 *  @date       07/02/2019 last modified.
 *  @version    0.1.0
 *  @since      0.1.0
 *  @copyright  MIT, © 2019 Yiwei Chiao
 *  @details
 *
 *  The ChatTab module of the MsgTabs subsystem.
 */
"use strict";

import { UIElement } from "../dom/ui-element";

let textArea: UIElement = new UIElement("article");

textArea
  .setStyle(`
    overflow-y: scroll;
    font-family: jason-writing;
  `)
  .setProperty('textContent', "測試中文字體是否工作；如果長一點的話會怎麼樣呢?是否會截斷或者換行？看起來還是不夠長啊；再多打一些字好了；就當成打字練習。");

class ChatTab extends UIElement {
  constructor() {
    super("wired-tab");

    this
      .setAttribute("name", "chat")
      .setStyle(`
        background-color: yellow;
        height: 100%;
      `)
      .appendNode(textArea.node);
  }
}

let chatTab = new ChatTab();

export { chatTab }

// msg-tabs/chat-tab.ts

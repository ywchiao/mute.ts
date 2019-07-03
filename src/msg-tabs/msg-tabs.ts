/**
 *  @file       msg-tabs.ts
 *  @brief      The ChattingPane module of the MsgTabs subsystem.
 *  @author     Yiwei Chiao (ywchiao@gmail.com)
 *  @date       06/25/2019 created.
 *  @date       07/02/2019 last modified.
 *  @version    0.1.0
 *  @since      0.1.0
 *  @copyright  MIT, © 2019 Yiwei Chiao
 *  @details
 *
 *  The ChattingPane module of the MsgTabs subsystem.
 */
"use strict";

import { UIElement } from "../dom/ui-element";

import { chatTab } from "./chat-tab";

class MsgTabs extends UIElement {
  constructor() {
    super("wired-tabs");

    this
      .setStyle(`
        background-color: purple;
        flex: 1 0 auto;
        max-height: 50%;
        width: 100%;
      `)
      .appendNode(chatTab.node);
  }
}

let msgTabs = new MsgTabs();

export { msgTabs }

// msg-tabs/msg-tabs.ts

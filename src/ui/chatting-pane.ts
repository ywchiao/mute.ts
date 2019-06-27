/**
 *  @file       chatting-pane.ts
 *  @brief      The ChattingPane module of the UI subsystem.
 *  @author     Yiwei Chiao (ywchiao@gmail.com)
 *  @date       06/25/2019 created.
 *  @date       06/25/2019 last modified.
 *  @version    0.1.0
 *  @since      0.1.0
 *  @copyright  MIT, © 2019 Yiwei Chiao
 *  @details
 *
 *  The ChattingPane module of the UI subsystem.
 */
"use strict";

import { UIElement } from "../dom/ui-element";

import { chattingTab } from "./chatting-tab";
import { todoTab } from "./todo-tab";

let chattingPane: UIElement = new UIElement("wired-tabs");

chattingPane
  .setStyle(`
    background-color: purple;
    flex: 1 0 auto;
    max-height: 50%;
    width: 100%;
  `)
  .appendNode(chattingTab.node)
  .appendNode(todoTab.node);

export { chattingPane }

// ui/chatting-pane.ts

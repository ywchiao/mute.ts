/**
 *  @file       content-pane.ts
 *  @brief      The ChattingPane module of the UI subsystem.
 *  @author     Yiwei Chiao (ywchiao@gmail.com)
 *  @date       06/25/2019 created.
 *  @date       06/27/2019 last modified.
 *  @version    0.1.0
 *  @since      0.1.0
 *  @copyright  MIT, © 2019 Yiwei Chiao
 *  @details
 *
 *  The ChattingPane module of the UI subsystem.
 */
"use strict";

import { UIElement } from "../dom/ui-element";

import { chattingPane } from "./chatting-pane";
import { viewingPane } from "./viewing-pane";

let contentPane: UIElement = new UIElement("section");

contentPane
  .setStyle(`
    background-color: white;
    display: flex;
    flex-flow: column;
    align-items: stretch;
    flex: 1 0 auto;
    width: 100%;
  `)
  .appendNode(viewingPane.node)
  .appendNode(chattingPane.node);

export { contentPane }

// ui/content-pane.ts

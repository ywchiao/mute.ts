/**
 *  @file       content-pane.ts
 *  @brief      The ContentPane module of the ContentPane subsystem.
 *  @author     Yiwei Chiao (ywchiao@gmail.com)
 *  @date       06/25/2019 created.
 *  @date       07/02/2019 last modified.
 *  @version    0.1.0
 *  @since      0.1.0
 *  @copyright  MIT, © 2019 Yiwei Chiao
 *  @details
 *
 *  The ContentPane module of the ContentPane subsystem.
 */
"use strict";

import { UIElement } from "../dom/ui-element";

import { infoTabs } from "../info-tabs/info-tabs";
import { msgTabs } from "../msg-tabs/msg-tabs";

class ContentPane extends UIElement {
  constructor() {
    super("section");

    this
      .setStyle(`
        background-color: white;
        display: flex;
        flex-flow: column;
        align-items: stretch;
        flex: 1 0 auto;
        width: 100%;
      `)
      .appendNode(infoTabs.node)
      .appendNode(msgTabs.node);
  }
}

let contentPane = new ContentPane();

export { contentPane }

// content-pane/content-pane.ts

/**
 *  @file       content.ts
 *  @brief      The Content module of the MUTE subsystem.
 *  @author     Yiwei Chiao (ywchiao@gmail.com)
 *  @date       06/21/2019 created.
 *  @date       07/02/2019 last modified.
 *  @version    0.1.0
 *  @since      0.1.0
 *  @copyright  MIT, © 2019 Yiwei Chiao
 *  @details
 *
 *  The Content module of the MUTE subsystem.
 */
"use strict";

import { UIElement } from "../dom/ui-element";

import { contentPane } from "../content-pane/content-pane";
import { controlPane } from "../control-pane/control-pane";

class Content extends UIElement {
  constructor() {
    super("article");

    this.setStyle(`
      background-color: #2e1e0e;
      display: flex;
      flex-flow: column;
      flex: 1 0 auto;
      padding: 1rem;
    `)
    .appendNode(contentPane.node)
    .appendNode(controlPane.node);
  }
}

let content = new Content();

export { content };

// mute/content.ts

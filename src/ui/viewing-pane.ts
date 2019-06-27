/**
 *  @file       viewing-pane.ts
 *  @brief      The ViewingPane module of the UI subsystem.
 *  @author     Yiwei Chiao (ywchiao@gmail.com)
 *  @date       06/25/2019 created.
 *  @date       06/27/2019 last modified.
 *  @version    0.1.0
 *  @since      0.1.0
 *  @copyright  MIT, © 2019 Yiwei Chiao
 *  @details
 *
 *  The ViewingPane module of the UI subsystem.
 */
"use strict";

import { UIElement } from "../dom/ui-element";

import { bagTab } from "./bag-tab";
import { mainTab } from "./main-tab";

class ViewingPane extends UIElement {
  constructor() {
    super("wired-tabs");

    this.setStyle(`
      background-color: white;
      flex: 1 0 auto;
      max-height: 50%;
      width: 100%;
    `);

    this
      .appendNode(mainTab.node)
      .appendNode(bagTab.node);
  } // constructor

  updateContent(content: string): UIElement {
    return this;
  } // updateContent()
} // ViewingPane

let viewingPane = new ViewingPane();

export { viewingPane }

// ui/viewing-pane.ts

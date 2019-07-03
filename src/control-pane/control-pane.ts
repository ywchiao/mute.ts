/**
 *  @file       control-pane.ts
 *  @brief      The ControlPane module of the ControlPane subsystem.
 *  @author     Yiwei Chiao (ywchiao@gmail.com)
 *  @date       06/25/2019 created.
 *  @date       07/02/2019 last modified.
 *  @version    0.1.0
 *  @since      0.1.0
 *  @copyright  MIT, © 2019 Yiwei Chiao
 *  @details
 *
 *  The ControlPane module of the ControlPane subsystem.
 */
"use strict";

import { UIElement } from "../dom/ui-element";

import { commandBar } from "./command-bar";
import { inputLine } from "./input-line";

class ControlPane extends UIElement {
  constructor() {
    super("section");

    this
      .setStyle(`
        backgroundcolor: white;
        display: flex;
        flex-flow: column;
        flex: 0 1 auto;
        width: 100%;
      `)
      .appendNode(commandBar.node)
      .appendNode(inputLine.node);
  }
}

let controlPane = new ControlPane();

export { controlPane }

// control-pane/control-pane.ts

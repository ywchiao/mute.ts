/**
 *  @file       command-bar.ts
 *  @brief      The CommandBar module of the ControlPane subsystem.
 *  @author     Yiwei Chiao (ywchiao@gmail.com)
 *  @date       06/22/2019 created.
 *  @date       07/02/2019 last modified.
 *  @version    0.1.0
 *  @since      0.1.0
 *  @copyright  MIT, © 2019 Yiwei Chiao
 *  @details
 *
 *  The CommandBar module of the ControlPane subsystem.
 */
"use strict";

import { UIElement } from "../dom/ui-element";
import { Button } from "../ui/button"

class CommandBar extends UIElement {
  constructor() {
    super("section");

    this.setStyle(`
        display: flex;
        flex: 0 1 auto;
        justify-content: center;
        background-color: #ffff00ff;
      `)
      .appendNode((new Button("arrow_forward")).node)
      .appendNode((new Button("arrow_downward")).node)
      .appendNode((new Button("arrow_upward")).node)
      .appendNode((new Button("arrow_back")).node);
  }
}

let commandBar = new CommandBar();

export { commandBar }

// control-pane/command-bar.ts

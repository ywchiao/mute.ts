/**
 *  @file       control-bar.ts
 *  @brief      The ControlBar module of the UI subsystem.
 *  @author     Yiwei Chiao (ywchiao@gmail.com)
 *  @date       06/22/2019 created.
 *  @date       06/22/2019 last modified.
 *  @version    0.1.0
 *  @since      0.1.0
 *  @copyright  MIT, © 2019 Yiwei Chiao
 *  @details
 *
 *  The ControlBar module of the UI subsystem.
 */

import { UIElement } from "../dom/ui-element";

import { Button } from "./button"

class ControlBar extends UIElement {
  constructor () {
    super("section");

    this.appendNode((new Button("arrow_backward")).setClass("red").node);
    this.appendNode((new Button("arrow_upward")).node);
    this.appendNode((new Button("arrow_downward")).node);
    this.appendNode((new Button("arrow_forward")).node);
  }
}

export { ControlBar }

// ui/control-bar.ts

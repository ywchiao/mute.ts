/**
 *  @file       button.ts
 *  @brief      The Button module of the UI subsystem.
 *  @author     Yiwei Chiao (ywchiao@gmail.com)
 *  @date       06/21/2019 created.
 *  @date       06/22/2019 last modified.
 *  @version    0.1.0
 *  @since      0.1.0
 *  @copyright  MIT, © 2019 Yiwei Chiao
 *  @details
 *
 *  The Button module of the UI subsystem.
 */

import { UIElement } from "../dom/ui-element";

class Button extends UIElement {
  constructor (tag: string) {
    super("wired-icon-button");

    this.setProperty("textContent", tag);
  }
}

export { Button }

// ui/button.ts

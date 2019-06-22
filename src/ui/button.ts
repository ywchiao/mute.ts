/**
 *  @file       button.ts
 *  @brief      The Button module of the UI subsystem.
 *  @author     Yiwei Chiao (ywchiao@gmail.com)
 *  @date       06/21/2019 created.
 *  @date       06/21/2019 last modified.
 *  @version    0.1.0
 *  @since      0.1.0
 *  @copyright  MIT, © 2019 Yiwei Chiao
 *  @details
 *
 *  The Button module of the UI subsystem.
 */

import { HTML } from "../dom/html.js";
import { UIElement } from "../dom/ui-element.js";

class Button {
  private _button: UIElement;

  constructor (tag: string) {
    this._button = HTML.element("wired-icon-button")
  }
}

export { Button }

// ui/button.ts

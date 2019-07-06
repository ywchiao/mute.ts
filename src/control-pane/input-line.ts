/**
 *  @file       input-line.ts
 *  @brief      The InputArea module of the ControlPane subsystem.
 *  @author     Yiwei Chiao (ywchiao@gmail.com)
 *  @date       06/25/2019 created.
 *  @date       07/05/2019 last modified.
 *  @version    0.1.0
 *  @since      0.1.0
 *  @copyright  MIT, © 2019 Yiwei Chiao
 *  @details
 *
 *  The InputArea module of the ControlPane subsystem.
 */
"use strict";

import { UIElement } from "../dom/ui-element";

import { channel } from "../net/channel";

class InputField extends UIElement {
  constructor() {
    super("wired-input");

    this
      .setStyle(`
        background-color: red;
        width: inherit;
      `)
      .setAttribute("placeholder", "請輸入[指令] (如: Help) 或聊天訊息")
      .addListener("change", e => {
        let el = <HTMLInputElement>e.srcElement;

        channel.send(el.value);
        el.value = ""
      });
  }
}

class InputLine extends UIElement {
  constructor() {
    super("section");

    let field = new InputField();

    this
      .setStyle(`
        background-color: white;
        flex: 0 1 auto;
        width: 100%;
      `)
    .appendNode(field.node);
  }
}

let inputLine = new InputLine();

export { inputLine }

// control-pane/input-line.ts

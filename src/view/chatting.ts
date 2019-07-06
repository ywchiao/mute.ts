/**
 *  @file       chatting.ts
 *  @brief      The Chatting module of the View subsystem.
 *  @author     Yiwei Chiao (ywchiao@gmail.com)
 *  @date       07/05/2019 created.
 *  @date       07/05/2019 last modified.
 *  @version    0.1.0
 *  @since      0.1.0
 *  @copyright  MIT, © 2019 Yiwei Chiao
 *  @details
 *
 *  The Chatting module of the View subsystem.
 */
"use strict";

import { UIElement } from "../dom/ui-element";

class Chatting extends UIElement {
  constructor() {
    super("section");

    this
      .setStyle(`
        font-family: jason-writing;
      `);
  }

  update(text: string): Chatting {
    this.node.innerText += text;
    //    this.setProperty("textContent", text);

    return this;
  }
}

let chatting = new Chatting();

export { chatting }

// view/chatting.ts

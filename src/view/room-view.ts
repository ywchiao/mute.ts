/**
 *  @file       room-view.ts
 *  @brief      The RoomView module of the View subsystem.
 *  @author     Yiwei Chiao (ywchiao@gmail.com)
 *  @date       07/02/2019 created.
 *  @date       07/02/2019 last modified.
 *  @version    0.1.0
 *  @since      0.1.0
 *  @copyright  MIT, © 2019 Yiwei Chiao
 *  @details
 *
 *  The RoomView module of the View subsystem.
 */
"use strict";

import { UIElement } from "../dom/ui-element";

class RoomView extends UIElement {
  constructor() {
    super("section");

    this
      .setStyle(`
        font-family: jason-writing;
      `);
  }

  update(text: string): RoomView {
    this.setProperty("textContent", text);

    return this;
  }
}

let roomView = new RoomView();

export { roomView }

// view/room-view.ts

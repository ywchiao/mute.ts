/**
 *  @file       input-area.ts
 *  @brief      The InputArea module of the UI subsystem.
 *  @author     Yiwei Chiao (ywchiao@gmail.com)
 *  @date       06/25/2019 created.
 *  @date       06/25/2019 last modified.
 *  @version    0.1.0
 *  @since      0.1.0
 *  @copyright  MIT, © 2019 Yiwei Chiao
 *  @details
 *
 *  The InputArea module of the UI subsystem.
 */
"use strict";

import { UIElement } from "../dom/ui-element";

let input: UIElement = new UIElement("wired-input");

input
  .setStyle(`
    background-color: red;
    width: inherit;
  `)
  .setAttribute("placeholder", "請輸入[指令] (如: Help) 或聊天訊息");

let inputArea: UIElement = new UIElement("div");

inputArea
  .setStyle(`
    background-color: white;
    flex: 0 1 auto;
    width: 100%;
  `)
  .appendNode(input.node);

export { inputArea }

// ui/input-area.ts

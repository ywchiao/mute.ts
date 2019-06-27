/**
 *  @file       content.ts
 *  @brief      The content module of the App subsystem.
 *  @author     Yiwei Chiao (ywchiao@gmail.com)
 *  @date       06/21/2019 created.
 *  @date       06/25/2019 last modified.
 *  @version    0.1.0
 *  @since      0.1.0
 *  @copyright  MIT, © 2019 Yiwei Chiao
 *  @details
 *
 *  The content module of the App subsystem.
 */
"use strict";

import { HTML } from "../dom/html";
import { UIElement } from "../dom/ui-element";

import { contentPane } from "../ui/content-pane";
import { controlPane } from "../ui/control-pane";

let content: UIElement = HTML.element("article")
  .setStyle(`
    background-color: #2e1e0e;
    display: flex;
    flex-flow: column;
    flex: 1 0 auto;
    padding: 1rem;
  `)
  .appendNode(contentPane.node)
  .appendNode(controlPane.node);

 export { content };

// app/content.ts

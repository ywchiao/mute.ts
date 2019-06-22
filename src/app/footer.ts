/**
 *  @file       footer.ts
 *  @brief      The Footer module of the App subsystem.
 *  @author     Yiwei Chiao (ywchiao@gmail.com)
 *  @date       06/21/2019 created.
 *  @date       06/21/2019 last modified.
 *  @version    0.1.0
 *  @since      0.1.0
 *  @copyright  MIT, © 2019 Yiwei Chiao
 *  @details
 *
 *  The Footer module of the App subsystem.
 */
"use strict";

import { HTML } from "../dom/html";
import { UIElement } from "../dom/ui-element";

let footer: UIElement = HTML.element("footer")
    .setClass("site-footer")
    .appendNode(HTML.h4("this is 我的 a test").node);

export { footer }

// app/footer.ts

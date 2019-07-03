/**
 *  @file       view.js
 *  @brief      The View module of the View subsystem.
 *  @author     Yiwei Chiao (ywchiao@gmail.com)
 *  @date       06/21/2019 created.
 *  @date       07/02/2019 last modified.
 *  @version    0.1.0
 *  @since      0.1.0
 *  @copyright  MIT, © 2019 Yiwei Chiao
 *  @details
 *
 *  The View module of the View subsystem.
 */
"use strict";

import { UIElement } from "../dom/ui-element";

class View extends UIElement {
  constructor() {
    super("body");

    this
      .setStyle(`
        display: flex;
        flex-direction: column;
        width: 100%;
        height: 100%;
        flex-wrap: nowrap;
      `);
  }

  setBanner(banner: UIElement): View {
    this.appendNode(banner.node);

    return this;
  }

  setContent(content: UIElement): View {
    this.appendNode(content.node);

    return this;
  }

  setFooter(footer: UIElement): View {
    this.appendNode(footer.node);

    return this;
  }

  setHeader(header: UIElement): View {
    this.appendNode(header.node);

    return this;
  }
};

let view = new View();

export { view };

// view/view.js

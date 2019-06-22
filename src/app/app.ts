/**
 *  @file       app.js
 *  @brief      The App module of the App subsystem.
 *  @author     Yiwei Chiao (ywchiao@gmail.com)
 *  @date       06/21/2019 created.
 *  @date       06/21/2019 last modified.
 *  @version    0.1.0
 *  @since      0.1.0
 *  @copyright  MIT, © 2019 Yiwei Chiao
 *  @details
 *
 *  The App module of the App subsystem.
 */

import { HTML } from "../dom/html";
import { UIElement } from "../dom/ui-element";

import { content } from "./content";
import { footer } from "./footer";
import { header } from "./header";

class App {
  readonly node: HTMLElement;

  private _banner: UIElement;
  private _body: UIElement;
  private _content: UIElement;
  private _footer: UIElement;
  private _header: UIElement;

  constructor() {
    this._body = HTML.element("body").setClass("flex-container");

    this.node = this._body.node;
  }

  setBanner(banner: UIElement): App {
    this._banner = banner;

    this.node.appendChild(banner.node);

    return this;
  }


  setContent(content: UIElement): App {
    this._content = content;

    this.node.appendChild(content.node);

    return this;
  }

  setFooter(footer: UIElement): App {
    this._footer = footer;

    this.node.appendChild(footer.node);

    return this;
  }

  setHeader(header: UIElement): App {
    this._header = header;

    this.node.appendChild(header.node);

    return this;
  }
};

let app = new App();

app.setHeader(header)
   .setContent(content)
   .setFooter(footer);

export { app };

// app/app.js

/**
 *  @file       html.ts
 *  @brief      The HTML object of the DOM module.
 *  @author     Yiwei Chiao (ywchiao@gmail.com)
 *  @date       06/21/2019 created.
 *  @date       06/25/2019 last modified.
 *  @version    0.1.0
 *  @since      0.1.0
 *  @copyright  MIT, © 2019 Yiwei Chiao
 *  @details
 *
 *  The HTML object of the DOM module.
 */
"use strict";

import { UIElement } from "./ui-element";

interface HtmlElement {
  element(this: void, tag: string): UIElement;
  h4(this: HtmlElement, text: string): UIElement;
  i(this: HtmlElement, text: string): UIElement;
  label(this: HtmlElement, text: string): UIElement;
  li(this: HtmlElement, text: string): UIElement;
  option(this: void, text: string): UIElement;
  p(this: HtmlElement, text: string): UIElement;
  query(this: void, selector: string): HTMLElement;
  section(this: void): UIElement;
  span(this: HtmlElement, text: string): UIElement;
  textNode(this: HtmlElement, tag: string, text: string): UIElement;
}

let HTML: HtmlElement = {
  element: function (this: void, tag: string): UIElement {
    return new UIElement(tag)
  },

  h4: function (this: HtmlElement, text: string = ""): UIElement {
    return this.textNode('h4', text);
  },

  i: function (this: HtmlElement, text: string = ""): UIElement {
    return this.textNode('i', text);
  },

  label: function (this: HtmlElement, text: string = ""): UIElement {
    return this.textNode('label', text)
      .setClass("label");
  },

  li: function (this: HtmlElement, text: string = ""): UIElement {
    return this.textNode('li', text);
  },

  option: function (this: void, text: string = ""): UIElement {
    return new UIElement('option')
      .setProperty("value", text);
  },

  p: function (this: HtmlElement, text: string = ""): UIElement {
    return this.textNode('p', text);
  },

  query: function (this: void, selector: string): HTMLElement {
    return document.body.querySelector(selector);
  },

  section: function (this: void): UIElement {
    return new UIElement('section');
  },

  span: function (this: HtmlElement, text: string = ""): UIElement {
     return this.textNode('span', text);
  },

  textNode: function (
    this: HtmlElement, tag: string, text: string = ""
  ): UIElement {
    return new UIElement(tag).setProperty("textContent", text);
  }
}

export { HTML }

// dom/html.ts

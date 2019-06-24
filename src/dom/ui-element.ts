/**
 *  @file       ui-element.ts
 *  @brief      The UIElement module of the DOM subsystem.
 *  @author     Yiwei Chiao (ywchiao@gmail.com)
 *  @date       06/21/2018 created.
 *  @date       06/23/2019 last modified.
 *  @version    0.1.0
 *  @since      0.1.0
 *  @copyright  MIT, © 2019 Yiwei Chiao
 *  @details
 *
 *  The UIElement module of the DOM subsystem.
 */
'use strict';

class UIElement {
  readonly node: HTMLElement;

  constructor (tag: string) {
    this.node = document.createElement(tag);
  }

  /**
   * Add the specified CSS class to the UIElement.
   *
   * @name addClass
   * @function
   * @param cls The class name to be added.
   * @returns {this}
   */
  addClass(cls: string): UIElement {
    this.node.classList.add(cls);

    return this;
  }

  /**
   * Register an event-listener fn for the specified event e on
   * this UIElement.
   *
   * @name addListener
   * @function
   * @param e The interested event.
   * @param fn The handler for event e.
   * @returns {this}
   */
  addListener(
    this: UIElement, e: string, fn: (this: void, e: Event) => void
  ): UIElement {
    this.node.addEventListener(e, fn);

    return this;
  }

  /**
   * Register a customized property for this UIElement.
   *
   * @name addProperty
   * @function
   * @param key The property name.
   * @param value The default value.
   * @returns {this}
   */
  addProperty(key: string, value: any): UIElement {
    this[key] = value;

    return this;
  }

  /**
   * Append the specified UIElement as this element's child element.
   *
   * @name appendHTMLElement
   * @function
   * @param name
   * @param el The element to be appended.
   * @param tag The tag for the newly added element.
   * @returns {this}
   */
  appendHTMLElement(el: UIElement, tag: string): UIElement {
    if (tag) {
      this[tag] = el;
    }

    this.node.appendChild(el.node);

    return this;
  }

  /**
   * Append specifed node as this element's new child node.
   *
   * @name appendNode
   * @function
   * @param node The node to be appended.
   * @returns {this}
   */
  appendNode(node: HTMLElement): UIElement {
    this.node.appendChild(node);

    return this;
  }

  /**
   * Grap the focus for this UIElement.
   *
   * @name focus
   * @function
   * @param void
   * @returns {this: UIElement}
   */
  focus(): UIElement {
    this.node.focus();

    return this;
  }

  /**
   * Return the specified attribute value of this UIElement's node.
   *
   * @name getAttribute
   * @function
   * @param attribute The HTML attribute value to be returned.
   * @returns {string}
   */
  getAttribute(attribute: string): string {
    return this.node.getAttribute(attribute);
  }

  /**
   * Return the specified property value of this UIElement's node.
   *
   * @name getProperty
   * @function
   * @param property The HTMLElement's property to fetch.
   * @returns {string}
   */
  getProperty(property: string): string {
    return this.node[property];
  }

  /**
   * Insert the passed-in node as this UIElement's first child node.
   *
   * @name insertNode
   * @function
   * @param node The node to be insert.
   * @returns {this}
   */
  insertNode(node: HTMLElement): UIElement {
    this.node.insertBefore(node, this.node.firstChild);

    return this;
  }

  /**
   * Return if this UIElement is visible.
   *
   * @name isVisible
   * @function
   * @returns {boolean}
   */
  isVisible(): boolean {
    return !(this.node.style.display === 'none');
  }

  /**
   * Helper function for common 'click' event-listener.
   *
   * @name onClick
   * @function
   * @param fn The 'click' event-listener to be set.
   * @returns {this}
   */
  onClick(fn: (this: void, e: Event) => void): UIElement {
    this.node.addEventListener('click', fn);

    return this;
  }

  /**
   * An interface to function: querySelector.
   *
   * @name query
   * @function
   * @param selector
   * @returns {node}
   */
  query(selector: string): HTMLElement {
    return this.node.querySelector(selector);
  }

  /**
   * Remove the specified HTML attribute from this UIElement's node.
   *
   * @name removeAttribute
   * @function
   * @param attribute The HTML attribute to be removed.
   * @returns {this}
   */
  removeAttribute(attribute: string): UIElement {
    this.node.removeAttribute(attribute);

    return this;
  }

  /**
   * Remove the specified CSS class from this UIElement's node.
   *
   * @name removeClass
   * @function
   * @param cls The class name to be removed.
   * @returns {this}
   */
  removeClass(cls: string): UIElement {
    this.node.classList.remove(cls);

    return this;
  }

  /**
   * Remove the specified child node from this UIElement's node.
   *
   * @name removeNode
   * @function
   * @param node The node to be removed.
   * @returns {this}
   */
  removeNode(node: HTMLElement): UIElement {
    this.node.removeChild(node);

    return this;
  }

  /**
   * Replace the specified element with the new element.
   *
   * @name replaceHTMLElement
   * @function
   * @param el The new element.
   * @param tag The tag of the element to be replaced.
   * @returns {this}
   */
  replaceHTMLElement(el: UIElement, tag: string): UIElement {
    this[tag] = this[tag] || null;

    if (this[tag]) {
      this.node.replaceChild(el.node, this[tag].node);

      this[tag] = el;
    }
    else {
      this.appendHTMLElement(el, tag);
    }

    return this;
  }

  /**
   * Setting the HTML attribute of this UIElement's node.
   *
   * @name setAttribute
   * @function
   * @param attribute The HTML attribute to be set.
   * @param value     The attribute value.
   * @returns {this}
   */
  setAttribute(attribute: string, value: string): UIElement {
    this.node.setAttribute(attribute, value);

    return this;
  }

  /**
   * Set the specified CSS class to this UIElement's node.
   *
   * @name setClass
   * @function
   * @param cls The class name to be set.
   * @returns {this}
   */
  setClass(cls: string): UIElement {
    this.node.className = cls;

    return this;
  }

  /**
   * Setting the CSS property of this UIElement's node.
   *
   * @name setCSSProperty
   * @function
   * @param property The CSS property to be set.
   * @param value    The property value.
   * @returns {this}
   */
  setCSSProperty(property: string, value: any): UIElement {
    this.node.style[property] = value;

    return this;
  }

  /**
   * Set this UIElement to be visible or not.
   *
   * @name setVisible
   * @function
   * @param visible=false
   * @returns {this}
   */
  setDisplay(display: string): UIElement {
    this.node.style.display = display;

    return this;
  }

  /**
   * Setting the HTML element's property for this UIElement's node.
   *
   * @name setProperty
   * @function
   * @param property The HTMLElement's property to be set.
   * @param value The property value.
   * @returns {this}
   */
  setProperty(property: string, value: string): UIElement {
    this.node[property] = value;

    return this;
  }

  /**
   * replace the UIElement's css class with new css class.
   *
   * @name swapClass
   * @function
   * @param oldCls class name to be removed.
   * @param newCls class name to be added.
   * @returns {this}
   */
  replaceClass(oldCls: string, newCls: string): UIElement {
    this.node.classList.replace(oldCls, newCls);

    return this;
  }
}

export { UIElement };

// dom/ui-element.ts

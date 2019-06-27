/**
 *  @file       http.ts
 *  @brief      The Http module of the Net subsystem.
 *  @author     Yiwei Chiao (ywchiao@gmail.com)
 *  @date       06/27/2019 created.
 *  @date       06/27/2019 last modified.
 *  @version    0.1.0
 *  @since      0.1.0
 *  @copyright  MIT, © 2019 Yiwei Chiao
 *  @details
 *
 *  The Http module of the Net subsystem.
 */
"use strict";

class Http {
  /**
   * A wrapper function to wrap the fetch() system call in the
   * async/await manner.
   *
   * @name fetch
   * @function
   * @param url The resource url.
   * @returns {Promise<object>}
   */
  async fetch(url: string): Promise<object> {
    return (await fetch(url)).json();
  }
}

let http = new Http();

export { http };

// net/http.ts

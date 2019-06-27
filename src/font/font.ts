/**
 *  @file       font.ts
 *  @brief      The Font module of the Font subsystem.
 *  @author     Yiwei Chiao (ywchiao@gmail.com)
 *  @date       06/25/2019 created.
 *  @date       06/26/2019 last modified.
 *  @version    0.1.0
 *  @since      0.1.0
 *  @copyright  MIT, © 2019 Yiwei Chiao
 *  @details
 *
 *  The Font module of the Font subsystem.
 */
"use strict";

import * as _ from "css-font-loading-module";

let loadFonts = async () => {
  const font: FontFace = new FontFace(
    "jason-writing", "url(../assets/font/jason_writing_1.woff)"
  );

  await font.load();

  document.fonts.add(font);
}

export { loadFonts }

// font/font.ts

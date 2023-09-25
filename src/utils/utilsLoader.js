import { applyFonts } from "./fontsLoader.js";
import {applyTheme} from "./themeLoader.js";

export function loadUtils() {
    document.body.dataset.routify = 'scroll-lock'
    applyFonts();
    applyTheme();
}
import { onThemeChange, theme } from "./themeLoader.js";
import { writable } from "svelte/store";

let invert = 0;

const logoInvert = writable(invert);
logoInverter();
onThemeChange(() => logoInverter());

function logoInverter() {
    theme.subscribe((value) => {
        if (value === "dark") {
            invert = 0;
        } else {
            invert = 0.8;
        }
        logoInvert.set(invert);
    });
}

export { logoInvert };

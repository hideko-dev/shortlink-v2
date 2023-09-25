import { get, writable } from "svelte/store";
import toast from "svelte-french-toast";
import { themesList } from "../lib/themeList.js";

let primary = '#fff';
let secondary = '#000';
let bg = '#333';

const initialTheme = localStorage.getItem("client-theme") || "dark";
export const theme = writable(initialTheme);

export function toggleTheme() {
    theme.update((currentTheme) => {
        const newTheme = currentTheme === "dark" ? "light" : "dark";
        localStorage.setItem("client-theme", newTheme);
        return newTheme;
    });

    const stringTheme = get(theme);
    if(stringTheme === "light") {
        primary = '#333333';
        secondary = '#fff'
        bg = '#ffffff';
    } else if(stringTheme === "dark") {
        primary = '#fff';
        secondary = '#000';
        bg = '#333';
    }
    toast.success(`The theme is now ${stringTheme}.`, {
        position: "bottom-center",
        iconTheme: {
            primary: `${primary}`,
            secondary: `${secondary}`
        },
        duration: 1500,
        style: `border-radius: 10px; background: ${bg}; color: ${primary}; font-family: medium`,
    });
    applyTheme();
}

export function applyTheme() {
    const existingStyles = document.querySelectorAll('[data-theme-style]');
    existingStyles.forEach(styleElement => {
        styleElement.remove();
    });

    const tm = get(theme);
    if (tm === "light") {
        themesList.light.forEach(thm => {
            const styleElement = document.createElement('style');
            styleElement.textContent = `
                :root {
                    --${thm.id}: ${thm.content};
                }
            `;
            styleElement.setAttribute('data-theme-style', 'true');
            document.head.appendChild(styleElement);
        });
    } else if (tm === "dark") {
        themesList.dark.forEach(thm => {
            const styleElement = document.createElement('style');
            styleElement.textContent = `
                :root {
                    --${thm.id}: ${thm.content};
                }
            `;
            styleElement.setAttribute('data-theme-style', 'true');
            document.head.appendChild(styleElement);
        });
    }
}

// テーマが変更されたときにコールバックを呼び出す関数
export function onThemeChange(callback) {
    theme.subscribe((newTheme) => {
        callback(newTheme);
    });
}

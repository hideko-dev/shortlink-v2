import {writable} from "svelte/store";

export const menuState = writable(false);

export function onMenuChange(callback) {
    menuState.subscribe((state) => {
        callback(state);
    });
}

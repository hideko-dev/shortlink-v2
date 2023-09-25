<script>
    import { toggleTheme } from "../utils/themeLoader.js";
    import { menuState } from "../utils/menuLoader.js";
    import { ripple } from "svelte-ripple-action";
    import { url } from "@roxi/routify";
    import { createSingleBool } from "../utils/scrollLoader.js";
    import { theme } from "../utils/themeLoader.js";
    let status = createSingleBool(100);
    import { logoInvert } from "../utils/logoLoader.js";
    let menu_l1_def = "translate(0%,250%) rotate(-45deg)";
    let menu_l2_def = "translate(0%,-220%) rotate(45deg)";
    let menu_l1 = "";
    let menu_l2 = "";
    function toggleMenu() {
        if(!$menuState) {
            menuState.set(true);
            menu_l1 = menu_l1_def;
            menu_l2 = menu_l2_def;
        } else if($menuState) {
            menuState.set(false);
            menu_l1 = "";
            menu_l2 = "";
        }
    }
</script>

<div class="header">
    <a href={$url('/')} class="logo"><img class="logosvg" src="_media/logo_full.svg" alt="logo" style="filter: invert({$logoInvert})"></a>
    <div class="nav">
        <a href={$url('./about')} use:ripple={{color:"rgba(var(--bg-rgb), 0.3)"}}>About</a>
        <a href={$url('./works')} use:ripple={{color:"rgba(var(--bg-rgb), 0.3)"}}>Works</a>
        <a href={$url('./contact')} use:ripple={{color:"rgba(var(--bg-rgb), 0.3)"}}>Contact</a>
    </div>
    <div class="links">
        <a href="https://link.hideko.cf/github" use:ripple={{color:"rgba(var(--text-rgb), 0.3)"}}>
            <i class="fa-brands fa-github"/>
        </a>
        <a href="https://link.hideko.cf/instagram" use:ripple={{color:"rgba(var(--text-rgb), 0.3)"}}>
            <i class="fa-brands fa-instagram"/>
        </a>
        <a href="https://link.hideko.cf/linkedin" use:ripple={{color:"rgba(var(--text-rgb), 0.3)"}}>
            <i class="fa-brands fa-linkedin-in"/>
        </a>
    </div>
    <div class="themeswitch" on:click={toggleTheme} use:ripple={{color:"rgba(var(--text-rgb), 0.3)"}}>
        {#if $theme === "dark"}
            <i class="fa-solid fa-sun"/>
        {:else}
            <i class="fa-solid fa-moon"/>
        {/if}
    </div>
    <div class="menu" on:click={toggleMenu} use:ripple={{color:"rgba(var(--text-rgb), 0.3)"}}>
        <div class="l l1" style="transform: {menu_l1}"/>
        <div class="l l2" style="transform: {menu_l2}"/>
    </div>
</div>

<style>
    .header {
        position: fixed;
        width: 100%;
        height: 4rem;
        transition: all 0.3s;
        display: flex;
        justify-content: center;
        align-items: center;
        z-index: 30;
    }
    .logo {
        display: flex;
        justify-content: center;
        align-items: center;
        text-decoration: none;
    }
    .logosvg {
        width: 10rem;
        height: 2rem;
        user-select: none;
        pointer-events: none;
        transition: all 0.3s;
    }
    .logo:hover .logosvg {
        opacity: 0.5;
    }
    .nav {
        display: flex;
        justify-content: center;
        align-items: center;
    }
    .nav a {
        text-decoration: none;
        color: rgba(var(--text-rgb), 0.7);
        margin-inline: 1px;
        padding-inline: 10px;
        padding-block: 4px;
        border-radius: 5px;
        transition: all 0.3s;
        font-family: medium;
        font-size: 16px;
    }
    .nav a:hover {
        background: var(--text);
        color: var(--bg);
    }
    .links {
        margin-left: 5rem;
        display: flex;
        justify-content: center;
        align-items: center;
    }
    .links a {
        background: var(--bg);
        border: 1px solid var(--border);
        border-radius: 10px;
        width: 30px;
        height: 30px;
        display: flex;
        justify-content: center;
        align-items: center;
        transition: all 0.2s;
        margin-inline: 5px;
        text-decoration: none;
        color: var(--text);
    }
    .links a:hover {
        cursor: pointer;
        border-color: cornflowerblue;
        box-shadow: 0px 0px 25px 0px cornflowerblue;
    }
    .themeswitch {
        background: var(--bg);
        border: 1px solid var(--border);
        border-radius: 10px;
        width: 30px;
        height: 30px;
        display: flex;
        justify-content: center;
        align-items: center;
        transition: all 0.2s;
        margin-inline: 5px;
        text-decoration: none;
        color: var(--text);
    }
    .themeswitch:hover {
        cursor: pointer;
        border-color: cornflowerblue;
        box-shadow: 0px 0px 25px 0px cornflowerblue;
    }
    .menu {
        background: var(--bg);
        border: 1px solid var(--border);
        margin-inline: 5px;
        width: 30px;
        height: 30px;
        border-radius: 10px;
        display: none;
        justify-content: center;
        align-items: center;
        transition: all 0.2s;
        position: relative;
    }
    .menu:hover {
        background: var(--thin);
        border-color: cornflowerblue;
        box-shadow: 0px 0px 30px 0px cornflowerblue;
        cursor: pointer;
    }
    .menu .l {
        width: 16px;
        height: 1px;
        border-radius: 10px;
        background: var(--text);
        transition: all 0.1s;
        left: 6px;
    }
    .menu .l1 {
        position: absolute;
        top: 11px;
    }
    .menu .l2 {
        position: absolute;
        top: 16px;
    }
    @media (max-width: 750px) {
        .links {
            margin-left: 2rem;
        }
        .nav {
            display: none;
        }
        .menu {
            display: flex;
        }
    }
    @media (max-width: 450px) {
        .links {
            display: none;
        }
        .themeswitch {
            margin-left: 1rem;
        }
    }
</style>
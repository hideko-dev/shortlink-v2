<script>
    import { ripple } from "svelte-ripple-action";
    import { onMenuChange } from "../utils/menuLoader.js";
    import { url } from "@roxi/routify";
    import {onThemeChange, theme} from "../utils/themeLoader.js";
    let left= 0;
    let linksOpacity = 0;
    let transitionDelay = 0;
    onMenuChange((state) => {
        if(state) {
            left = 0;
            linksOpacity = 1;
            transitionDelay = 0.35;
        } else {
            left = -50;
            linksOpacity = 0;
            transitionDelay = 0;
        }
    });
    let logoInvert = 0;
    logoInverter();
    onThemeChange(() => logoInverter());
    function logoInverter() {
        if($theme === "dark") {
            logoInvert = 0;
        } else {
            logoInvert = 0.8;
        }
    }
</script>

<div class="menu" style="left: {left}rem;">
    <div class="links" style="opacity: {linksOpacity}; transition-delay: {transitionDelay}s;">

        <a href={$url('/')} class="logo"><img src="_media/logo_full.svg" alt="logo" style="filter: invert({logoInvert})"></a>

        <div class="line"/>

        <div class="urls">
            <a href={$url('./about')} use:ripple={{color:"rgba(var(--bg-rgb), 0.3)"}}>
                <i class="fa-solid fa-user"/>
                <p>About</p>
            </a>
            <a href={$url('./works')} use:ripple={{color:"rgba(var(--bg-rgb), 0.3)"}}>
                <i class="fa-solid fa-layer-group"/>
                <p>Works</p>
            </a>
            <a href={$url('./contact')} use:ripple={{color:"rgba(var(--bg-rgb), 0.3)"}}>
                <i class="fa-solid fa-envelope"/>
                <p>Contact</p>
            </a>
            <a href="https://link.hideko.cf/github" use:ripple={{color:"rgba(var(--bg-rgb), 0.3)"}}>
                <i class="fa-brands fa-github"/>
                <p>Github</p>
            </a>
            <a href="https://link.hideko.cf/instagram" use:ripple={{color:"rgba(var(--bg-rgb), 0.3)"}}>
                <i class="fa-brands fa-instagram"/>
                <p>Instagram</p>
            </a>
            <a href="https://link.hideko.cf/linkedin" use:ripple={{color:"rgba(var(--bg-rgb), 0.3)"}}>
                <i class="fa-brands fa-linkedin"/>
                <p>LinkedIn</p>
            </a>
        </div>

    </div>
</div>

<style>
    .menu {
        position: fixed;
        height: 100vh;
        width: 48%;
        background: rgba(var(--bg-rgb), 0.5);
        backdrop-filter: blur(50px);
        z-index: 110;
        transition: left 0.3s;
    }
    .line {
        background: var(--border);
        margin: 16px auto;
        width: 85%;
        height: 2px;
        border-radius: 100px;
    }
    .logo {
        display: flex;
        justify-content: center;
        align-items: center;
    }
    .logo img {
        width: 10rem;
    }
    .urls {
        margin: 1rem auto 0;
    }
    .urls a {
        margin: 0 auto;
        display: flex;
        align-items: center;
        width: 80%;
        height: 1.8rem;
        border-radius: 5px;
        text-decoration: none;
        font-family: medium;
        margin-block: 10px;
        padding-left: 10px;
        transition: all 0.2s;
        color: var(--text);
    }
    .urls a:hover {
        background: var(--border);
    }
    .urls a i {
        margin-right: 8px;
    }
    .links {
        transition: opacity 0.5s;
        margin-top: 1.2rem;
    }
    @media (min-width: 751px) {
        .menu {
            display: none;
        }
    }
    @media (max-width: 400px) {
        .menu {
            width: 55%;
        }
    }
    @media (max-width: 330px) {
        .menu {
            width: 58%;
        }
    }

</style>
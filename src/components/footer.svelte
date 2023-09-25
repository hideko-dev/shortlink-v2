<script>
    import { logoInvert } from "../utils/logoLoader.js";
    const year = new Date().getFullYear();
    import { ripple } from "svelte-ripple-action";
</script>

<div class="footer">
    <div class="content">
        <div class="logos">
            <div class="line"/>
            <div class="logo">
                <img src="_media/logo.svg" alt="logo" style="filter: invert({$logoInvert})">
            </div>
        </div>
        <div class="other">
            <p class="copyright">© {year} Hideko. All Rights Reserved</p>
            <div class="border"/>
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
        </div>
    </div>
</div>

<style>
    .footer {
        display: flex;
        justify-content: center;
        align-items: center;
        height: 7rem;
    }
    .content {
        width: 100%;
    }
    .logos {
        width: 100%;
        position: relative;
        height: 1rem;
        display: flex;
        justify-content: center;
        align-items: center;
     }
    .line {
        background: var(--border);
        width: 80%;
        margin: 0 auto;
        height: 1px;
    }
    .logo {
        margin: 0 auto;
        width: 60px;
        height: 10px;
        background: var(--bg);
        display: flex;
        justify-content: center;
        align-items: center;
        position: absolute;
    }
    .other {
        display: flex;
        justify-content: center;
        align-items: center;
        margin-top: 1.3rem;
    }
    .copyright {
        font-family: medium;
        font-size: 14px;
        margin-right: 5px;
    }
    .border {
        width: 2px;
        height: 25px;
        margin-inline: 1rem;
        border-radius: 10px;
        background: var(--border);
    }
    .links {
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
        box-shadow: 0px 0px 30px 0px cornflowerblue;
    }
    @media (max-width: 600px) {
        .footer {
            height: 9rem;
        }
        .border {
            display: none;
        }
        .other {
            display: block;
        }
        .copyright {
            display: flex;
            justify-content: center;
            align-items: center;
        }
        .links {
            margin-top: 1rem;
        }
    }
</style>
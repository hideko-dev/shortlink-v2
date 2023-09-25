<script>
    import {onMount} from "svelte";

    export let _id;
    import { supabase } from "../../../utils/database/supabaseClient.js";
    let image;
    let title;
    let desc;
    let url;
    let repo;
    let isExist;
    onMount(async () => {
        const { data, error } = await supabase
            .from('works')
            .select('*')
            .eq('id', _id)
            .single();
            if(error) {
                isExist = false;
            } else if(data) {
                image = await data.image;
                title = await data.title;
                desc = await data.desc;
                url =  await data.url;
                repo = await data.repo;
                isExist = true;
            }
    })
</script>

<div class="worksid">
    {#if isExist}
        <div class="container">
            <img src={image} alt="image">
            <p class="title">{title}</p>
            <p class="desc">{desc}</p>
            <div class="links">
                <div class="url links_base">
                    <i class="fa-solid fa-link"/>
                    <a href={url} class="url">{url}</a>
                </div>
                <div class="repo links_base">
                    <i class="fa-brands fa-github"/>
                    <a href="https://github.com/Hideko-Dev/{repo}" class="link">{repo}</a>
                </div>
            </div>
        </div>
    {:else}
        <div class="loading">
            <i class="fa-solid fa-spinner fa-spin"></i>
            <p>Loading...</p>
        </div>
    {/if}
</div>

<style>
    .loading {
        display: flex;
        justify-content: center;
        align-items: center;
        border: 1px solid var(--border);
        width: 15rem;
        height: 5rem;
        font-family: medium;
        font-size: 25px;
        border-radius: 10px;
    }
    .loading i {
        margin-right: 10px;
    }
    .worksid {
        height: 100vh;
        display: flex;
        justify-content: center;
        align-items: center;
    }
    .container {
        position: relative;
        width: 30rem;
        height: 23rem;
        border-radius: 10px;
        box-shadow: 0px 0px 50px 0px rgba(0,0,0, 0.35);
    }
    .container img {
        border: 1px solid var(--border);
        position: absolute;
        width: 30rem;
        height: 23rem;
        border-radius: 10px;
        background: var(--bg);
    }
    .title {
        position: absolute;
        top: 2rem;
        left: 2rem;
        font-family: bold;
        font-size: 40px
    }
    .desc {
        position: absolute;
        font-family: medium;
        top: 6rem;
        left: 2rem;
        width: 26rem;
    }
    .links {
        position: absolute;
        font-family: medium;
        top: 18.5rem;
        left: 2rem;
        width: 26rem;
    }
    .links_base {
        display: flex;
        align-items: center;
        margin-block: 4px;
        transition: all 0.3s;
    }
    .links_base:hover {
        opacity: 0.5;
    }
    .links_base a {
        text-decoration: none;
        color: var(--text);
    }
    .links_base i {
        margin-right: 5px;
    }
    @media (max-width: 600px) {
        .container {
            width: 18rem;
            height: 35rem;
        }
        .container img {
            width: 18rem;
            height: 35rem;
        }
        .desc {
            top: 9.5rem;
            width: 14rem;
        }
        .links {
            top: 30rem;
            width: 10rem;
        }
    }
</style>
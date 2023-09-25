<script>
    import { getWorks } from "../../../utils/database/works.js";
    import { url } from "@roxi/routify";
    let works = [];
    async function getData() {
        works = await getWorks();
    }
    getData();
</script>

<div class="list">
    {#each works as work}
        <div class="container">
            <img src={work.image} alt="image">
            <p class="title">{work.title}</p>
            <a href={$url(`./${work.id}`)} class="visit">
                <p>Visit</p>
                <i class="fa-solid fa-arrow-right"/>
            </a>
        </div>
    {/each}
</div>

<style>
    .container {
        margin-block: 2rem;
        display: flex;
        justify-content: center;
        align-items: center;
        position: relative;
    }
    .container .title {
        position: absolute;
        top: 5rem;
        left: 1rem;
        font-size: 16px;
        font-family: medium;
        transition: all 0.3s;
    }
    .visit {
        position: absolute;
        top: 5rem;
        left: 1rem;
        font-size: 15px;
        font-family: medium;
        transition: all 0.5s;
        display: flex;
        align-items: center;
        opacity: 0;
        width: 4.5rem;
        height: 1.3rem;
        display: flex;
        border-radius: 100px;
        justify-content: center;
        align-items: center;
        color: var(--bg);
        background: var(--text);
        text-decoration: none;
    }
    .visit i {
        margin-left: 0.3rem;
        transition: all 0.3s;
    }
    .container:hover {
        cursor: pointer;
    }
    .container:hover .title {
        top: 3.3rem;
    }
    .container:hover .visit {
        opacity: 0.8;
    }
    .container img {
        background: var(--bg);
        width: 10rem;
        height: 7rem;
        border-radius: 10px;
        transition: all 0.3s;
    }
    .container:hover img {
        filter: grayscale(100%);
    }
    .visit:hover i {
        transform: translateX(4px);
    }
    .list {
        margin-bottom: 5rem;
    }
</style>
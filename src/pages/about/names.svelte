<div class="names">
    <div class="icon">
        <img src="./_media/icon.jpg" alt="">
    </div>
    <div class="texts">
        <p class="name">Hideko</p>
        <p class="job">Developer / UI・UX</p>
    </div>
</div>

<style>
    .names {
        background:var(--thin);
        box-shadow: 0px 0px 30px 0px var(--border);
        width: 20rem;
        height: 5rem;
        border-radius: 10px;
        margin: 2.5rem auto;
        display: flex;
        justify-content: center;
        align-items: center;
        font-family: medium;
    }
    .icon {
        display:flex;
        justify-content: center;
        align-items: center;
        margin-right: 1rem;
    }
    .icon img {
        width: 60px;
        height: 60px;
        border-radius: 100px;
        pointer-events: none;
    }
    .name {
        font-family: bold;
        font-size: 20px;
    }
    @media (max-width: 500px) {
        .names {
            width: 17rem;
        }
    }
</style>
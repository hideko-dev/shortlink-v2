<div class="title">
    <div class="titletext">
        <p class="hello">Hello there.</p>
        <p class="hideko">I'm <wbr>Hideko.</p>
        <p class="small">I am bored, but I am exposed to a lot of different things because of that. I have been exposed to a variety of development, including front-end, back-end, and software.</p>
    </div>
</div>

<style>
    .title {
        height: 100vh;
        display: flex;
        justify-content: center;
        align-items: center;
        background: url("../../../../public/_media/title_bg.webp") no-repeat center/cover;
    }
    .hello {
        font-family: medium;
        font-size: 20px;
    }
    .hideko {
        font-family: bold;
        font-size: 90px;
    }
    .small {
        margin-top: 0.5rem;
        font-family: medium;
        font-size: 18px;
        width: 50rem;
        color: rgba(var(--text-rgb), 0.6)
    }
    @media (max-width: 950px) {
        .small {
            width: 37rem;
        }
    }
    @media (max-width: 700px) {
        .small {
            width: 27rem;
        }
    }
    @media (max-width: 600px) {
        .titletext {
            padding: 2rem;
        }
        .small {
            width: 23rem;
        }
    }
    @media (max-width: 500px) {
        .hideko {
            font-size: 80px;
        }
        .small {
            width: 20rem;
            font-size: 13px;
        }
    }
    @media (max-width: 410px) {
        .hideko {
            font-size: 70px;
        }
        .small {
            width: 15rem;
            font-size: 13px;
        }
    }
    @media (max-width:350px) {
        .hideko {
            font-size: 65px;
        }
    }
</style>
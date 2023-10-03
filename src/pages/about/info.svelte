<script>
    import { url } from "@roxi/routify";
</script>

<div class="info">
    <div class="sentence">
        <p>I am a student developer. I develop on a whim. I do basically anything: front-end (React, Svelte, etc.), back-end (Java, C#, etc.), or systems. I am also available for website development, which is what I like to do. For more information, please contact me at <br><span>my contact page.</span></p>
        <a class="contact" href={$url("../contact")}>
            <i class="fa-solid fa-cat"/>
            <p>Contact me</p>
        </a>
    </div>
</div>

<style>
    .info {
        margin-top: 2rem;
        font-family: medium;
    }
    .sentence {
        padding-inline: 4rem;
    }
    .contact {
        display: flex;
        justify-content: center;
        align-items: center;
        border: 1px solid var(--border);
        width: 9rem;
        height: 2rem;
        border-radius: 100px;
        margin: 1rem auto;
        transition: all 0.3s;
        text-decoration: none;
        color: var(--text);
    }
    .contact i {
        margin-right: 5px;
    }
    .contact:hover {
        background: var(--text);
        color: var(--bg);
        border: var(--text);
        cursor: pointer;
    }
</style>
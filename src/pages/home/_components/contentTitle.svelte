<script>
    export let title = "Title";
    export let icon = "fa-solid fa-house"
</script>

<div class="ct">
    <i class={icon}/>
    <div class="line"/>
    <p>{title}</p>
</div>

<style>
    .ct {
        width: 9rem;
        height: 1.8rem;
        background: var(--bg);
        border: 1px solid var(--border);
        margin: 0 auto;
        border-radius: 100px;
        display: flex;
        justify-content: center;
        align-items: center;
        font-family: medium;
        font-size: 15px;
    }
    .line {
        width: 2px;
        height: 18px;
        background: var(--border);
        margin-inline: 8px;
    }
</style>
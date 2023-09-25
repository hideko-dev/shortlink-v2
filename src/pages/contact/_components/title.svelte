<script>
    import {onMount} from "svelte";

    let iconRotate = 0;
    onMount(() => {
        setTimeout(() => {
            iconRotate = 360;
        }, 200)
    })
</script>

<div class="title">
    <div class="icon">
        <i class="fa-solid fa-at" style="rotate: {iconRotate}deg"/>
    </div>
    <p>Contact me</p>
</div>

<style>
    .title {
        display: flex;
        justify-content: center;
        align-items: center;
        font-family: medium;
        font-size: 32px;
    }
    .icon {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 45px;
        height: 45px;
        background: linear-gradient(to right bottom, var(--border), var(--bg));
        border: 1px solid var(--border);
        border-radius: 10px;
        margin-right: 10px;
    }
    .title i {
        transition: rotate 1s;
        font-size: 23px;
    }
</style>
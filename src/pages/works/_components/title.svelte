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
        <i class="fa-solid fa-layer-group" style="rotate: {iconRotate}deg"/>
    </div>
    <p>Works</p>
</div>

<style>
    .title {
        margin-top: 19rem;
        display: flex;
        justify-content: center;
        align-items: center;
        font-family: medium;
        font-size: 32px;
        background: url("../../../../public/_media/title_bg.webp") no-repeat center/cover;
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
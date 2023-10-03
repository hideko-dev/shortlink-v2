<script>
    import List from "./_components/worksList.svelte";
    import Title from "./_components/title.svelte";
</script>

<div class="works">
    <div class="content">
        <Title/>
        <List/>
    </div>
</div>

<style>
    .works {
        display: flex;
        justify-content: center;
        align-items: center;
    }
    .works::before {
        content: "";
        position: absolute;
        z-index: -1;
        background: url("../../../public/_media/title_bg.webp") no-repeat center/cover;
        filter: blur(20px);
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
    }
</style>
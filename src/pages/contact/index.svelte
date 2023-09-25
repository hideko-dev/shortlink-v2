<script>
    import Title from "./_components/title.svelte";
    import Mail from "./_components/mail.svelte";
</script>

<div class="contact">
    <div class="bg"/>
    <div class="content">
        <Title/>
        <Mail/>
    </div>
</div>

<style>
    .contact {
        height: 100vh;
        display: flex;
        justify-content: center;
        align-items: center;
    }
    .bg {
        position: absolute;
        background: url("../../../public/_media/sub_bg.webp") no-repeat center/cover;
        height: 100vh;
        width: 100%;
        filter: blur(100px);
        z-index: -1;
    }
</style>
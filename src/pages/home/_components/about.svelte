<script>
    import Ct from "./contentTitle.svelte";
</script>

<div class="about">
    <div class="content">
        <Ct title="About" icon="fa-solid fa-user"/>
        <p>Hello</p>
    </div>
</div>

<style>
    .about {
        display: flex;
        justify-content: center;
        align-items: center;
    }
    p {
        font-family: medium;
    }
</style>
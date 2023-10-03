<script>
    import Names from "./names.svelte";
    import Info from "./info.svelte";
</script>

<div class="profile">
    <Names/>
    <div class="border"/>
    <Info/>
</div>

<style>
    .profile {
        background: var(--thin);
        box-shadow: 0px 0px 50px 0px var(--thin);
        width: 25rem;
        height: 28rem;
        border-radius: 10px;
    }
    .border {
        background: var(--border);
        width: 90%;
        height: 2px;
        margin: 0 auto;
    }
    @media (max-width: 500px) {
        .profile {
            width: 19rem;
            height: 34rem;
        }
    }
</style>
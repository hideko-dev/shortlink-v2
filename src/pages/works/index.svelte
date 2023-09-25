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
</style>
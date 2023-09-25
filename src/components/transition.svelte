<script>
    import { fly } from "svelte/transition";
</script>

<div in:fly={{ x: -10, duration: 500, delay: 500 }} out:fly={{ x: 5, duration: 500 }}>
    <slot/>
</div>
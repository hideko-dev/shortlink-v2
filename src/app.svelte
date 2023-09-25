<script>
    import { Router } from "@roxi/routify";
    import { routes } from "../.routify/routes.js";
    import { Toaster } from "svelte-french-toast";
</script>

<Toaster/>
<Router {routes} />

<style>
    :root {
        background: var(--bg);
        color: var(--text);
    }
</style>
<script>
    import Header from "../components/header.svelte";
    import Menu from "../components/menu.svelte";
    import Footer from "../components/footer.svelte";
    import Transition from "../components/transition.svelte";
</script>

<Header/>
<Menu/>
<slot decorator={Transition}/>
<Footer/>
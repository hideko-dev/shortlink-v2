<script>
    export let title = "title";
    export let typeValue = '';
    let isInputFocused = false;

    function handleInputFocus() {
        isInputFocused = true;
    }

    function handleInputBlur() {
        isInputFocused = false;
    }
</script>

<div class="wrap">
    <input type="text" placeholder=" " on:focus={handleInputFocus} on:blur={handleInputBlur} bind:value={typeValue} />
    <span class:input-focused={isInputFocused}>{title}</span>
    <div class="border" class:input-focused={isInputFocused} />
</div>

<style>
    .wrap {
        margin-block: 5px;
        position: relative;
        width: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
    }

    span {
        position: absolute;
        inset: 0.8rem auto auto 1rem;
        color: rgba(var(--text-rgb), 0.6);
        transition: all 0.3s;
        pointer-events: none;
        font-family: medium;
    }

    input {
        border: none;
        border-bottom: 1.5px solid var(--border);
        outline: none;
        background: rgba(var(--bg-rgb), 0.4);
        backdrop-filter: blur(100px);
        width: 14.5rem;
        height: 3rem;
        border-top-left-radius: 5px;
        border-top-right-radius: 5px;
        transition: all 0.3s;
        color: var(--text);
        padding: 2rem 1rem 1rem;
    }

    .border {
        position: absolute;
        background: cornflowerblue;
        width: 0;
        height: 1px;
        top: 47px;
        transition: all 0.3s;
    }

    input:focus + span,
    input:not(:placeholder-shown) + span,
    .input-focused + span {
        font-size: 0.7rem;
        inset: 0.4rem auto auto 0.9rem;
    }

    input:hover {
        background: rgba(var(--bg-rgb), 0.6);
        border-color: rgba(var(--text-rgb), 0.5);
    }

    input:focus + span,
    .input-focused + span {
        color: cornflowerblue;
    }

    input:focus + .border,
    .input-focused + .border {
        width: 99%;
    }
</style>

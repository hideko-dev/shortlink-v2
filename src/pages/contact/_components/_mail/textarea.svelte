<script>
    export let title = "title";
    export let typeValue = '';
    let istextareaFocused = false;

    function handletextareaFocus() {
        istextareaFocused = true;
    }

    function handletextareaBlur() {
        istextareaFocused = false;
    }
</script>

<div class="wrap">
    <textarea placeholder=" " on:focus={handletextareaFocus} on:blur={handletextareaBlur} bind:value={typeValue}/>
    <span class:textarea-focused={istextareaFocused}>{title}</span>
    <div class="border" class:textarea-focused={istextareaFocused} />
</div>

<style>
    .wrap {
        margin-top: 5px;
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

    textarea {
        border: none;
        border-bottom: 1.5px solid var(--border);
        outline: none;
        background: rgba(var(--bg-rgb), 0.4);
        backdrop-filter: blur(100px);
        width: 14.5rem;
        height: 7rem;
        border-top-left-radius: 5px;
        border-top-right-radius: 5px;
        transition: all 0.3s;
        color: var(--text);
        padding: 1.5rem 1rem 1rem;
        resize: none;
    }

    .border {
        position: absolute;
        background: cornflowerblue;
        width: 0;
        height: 1px;
        top: 111px;
        transition: all 0.3s;
    }

    textarea:focus + span,
    textarea:not(:placeholder-shown) + span,
    .textarea-focused + span {
        font-size: 0.7rem;
        inset: 0.4rem auto auto 0.9rem;
    }

    textarea:hover {
        background: rgba(var(--bg-rgb), 0.6);
        border-color: rgba(var(--text-rgb), 0.5);
    }

    textarea:focus + span,
    .textarea-focused + span {
        color: cornflowerblue;
    }

    textarea:focus + .border,
    .textarea-focused + .border {
        width: 99%;
    }
</style>

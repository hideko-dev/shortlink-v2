<script>
    import Input from "./_mail/input.svelte";
    import Textarea from "./_mail/textarea.svelte";
    import { ripple } from "svelte-ripple-action";
    import toast from "svelte-french-toast";
    import { isMail } from "../../../utils/emailChecker.js";
    import { getMail, insertMail } from "../../../utils/database/mails.js";

    // async function getData() {
    //     const data = await getMail();
    //     console.log(data);
    // }
    // getData();

    let mail = '';
    let name = '';
    let req = '';


    async function handleSubmit(e) {
        e.preventDefault();

        if(!mail.trim() || !name.trim() || !req.trim()) {
            toast.error(`Please fill in all fields.`, {
                position: "bottom-center",
                duration: 2000,
                style: `border-radius: 10px; background: var(--thin); color: var(--text); font-family: medium`,
            });
        } else {
            if(isMail(mail)) {
                await insertMail(mail, name, req);
                toast.success(`Success send message.`, {
                    position: "bottom-center",
                    duration: 2000,
                    style: `border-radius: 10px; background: var(--thin); color: var(--text); font-family: medium`,
                });
                mail = '';
                name = '';
                req = '';
                console.log(mail, name, req);
            } else {
                toast.error(`Email is valid.`, {
                    position: "bottom-center",
                    duration: 2000,
                    style: `border-radius: 10px; background: var(--thin); color: var(--text); font-family: medium`,
                });
            }
        }

    }

</script>

<div class="mail">
    <div class="content">
        <Input title="Your mail" bind:typeValue={mail}/>
        <Input title="Your name" bind:typeValue={name}/>
        <Textarea title="Requirements" bind:typeValue={req}/>
        <div class="btn" use:ripple={{color:"rgba(var(--text-rgb), 0.3)"}} on:click={handleSubmit}>Submit</div>
    </div>
</div>

<style>
    .mail {
        display: flex;
        justify-content: center;
        align-items: center;
        margin-top: 1rem;
    }
    .btn {
        display: flex;
        justify-content: center;
        align-items: center;
        background: rgba(var(--bg-rgb), 0.4);
        transition: all 0.3s;
        margin-top: 5px;
        color: rgba(var(--text-rgb), 0.6);
        height: 2rem;
        border-radius: 5px;
        font-family: medium;
        font-size: 16px;
        user-select: none;
    }
    .btn:hover {
        background: rgba(var(--bg-rgb), 0.6);
        color: rgba(var(--text-rgb), 0.8);
        cursor: pointer;
    }
    .status {
        background: rgba(var(--bg-rgb), 0.4);
        color: rgba(var(--text-rgb), 0.6);
        font-family: medium;
        font-size: 13px;
        display: flex;
        align-items: center;
        width: 100%;
        height: 1.8rem;
        border-radius: 3px;
    }
    .status p {
        margin-left: 10px;
    }
</style>
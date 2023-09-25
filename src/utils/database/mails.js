import { supabase } from "./supabaseClient.js";

export async function getMail() {
    const res = await supabase.from("contact").select();
    return res.data;
}

export async function insertMail(mailProps, nameProps, reqProps) {
    await supabase.from("contact").insert([
        {
            mail: mailProps,
            name: nameProps,
            req: reqProps,
        }
    ]);
}
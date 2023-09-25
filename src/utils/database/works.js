import { supabase } from "./supabaseClient.js";

export async function getWorks() {
    const res = await supabase.from("works").select();
    return res.data;
}
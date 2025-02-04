'use server'

import { createClient } from "@/utils/supabase/server";

export async function fetchComponent(id: string) {

    const supabase = await createClient();
    console.log('Supabase Client:', supabase);
    const { data: table } = await supabase.from(`${id}`).select('*');
    
    return table;
}
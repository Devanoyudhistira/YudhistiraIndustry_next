"use server"

import { createClient } from "@/app/supabase/server";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

export default async function logout(formdata){
    const supabase = await createClient()

    const {error} = await supabase.auth.signOut();

    if(error){
        return{error:error,code:error.code}        
    }
    revalidatePath("/")
    redirect("/")
}
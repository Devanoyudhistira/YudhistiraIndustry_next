"use server"
import { createClient } from "@/app/supabase/server";
import { revalidatePath } from "next/cache";
import { NextResponse } from "next/server";


export default async function Login(formdata){
    const supabase = await createClient()
    const email = formdata.get("email")
    const password = formdata.get("password")

    const {data,error} = await supabase.auth.signInWithPassword({
        email:email,
        password:password
    })

    if(error){
        console.log(error)
        return NextResponse({error:"password is wrong",code:400})
    }    
    revalidatePath('/login')
}
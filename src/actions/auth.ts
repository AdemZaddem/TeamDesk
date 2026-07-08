"use server"
import { prisma } from "@/lib/prisma"
import { createClient } from "@/lib/supabase/server"

export const regitser = async(data:{email:string,password:string}) =>{
    const supabase = await createClient()

    const {error} = await supabase.auth.signUp({
        email:data.email,
        password:data.password,
        options:{
            emailRedirectTo:`${process.env.NEXT_PUBLIC_SITE_URL}/auth/confirm`
        }
    })

    if(error)return {error:error.message}
    return {success:true}

}

export const login = async(data:{email:string,password:string}) =>{
    const supabase = await createClient()

    const {error} = await supabase.auth.signInWithPassword({
        email:data.email,
        password:data.password
    })

    if(error)return {error:error.message}
}
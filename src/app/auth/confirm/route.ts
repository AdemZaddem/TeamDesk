import { prisma } from "@/lib/prisma";
import { createClient } from "@/lib/supabase/server";
import { NextRequest, NextResponse } from "next/server";

export const GET = async(request:NextRequest)=>{
    const {searchParams,origin} = new URL(request.url)
    const token_hash = searchParams.get('token_hash')
    const type = searchParams.get('type')

    if(!token_hash || !type){
        return NextResponse.redirect(`${origin}/login`)
    }

    const supabase = await createClient()
    const {data:{user},error} = await supabase.auth.verifyOtp({
        token_hash,
        type
    })

    if(error || !user)return NextResponse.redirect(`${origin}/login`)
    
    const existing = await prisma.user.findUnique({
        where:{id:user.id}
    })

    if(!existing){
        await prisma.user.create({
            data:{id:user.id,email:user.email!}
        })
    }

    return NextResponse.redirect(`${origin}/onboarding`)
}
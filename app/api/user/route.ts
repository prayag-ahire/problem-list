import authOptions from "@/lib/authOptions";
import { getServerSession } from "next-auth";
import { NextRequest } from "next/server";

export const GET = async(req:NextRequest)=>{
    const session = await getServerSession(authOptions);

    if(!session?.user.id){
        
    }
}
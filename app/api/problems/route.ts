import { NextRequest, NextResponse } from "next/server";

export default async function GET(req:NextRequest){
    const fromQuery = req.nextUrl.searchParams.get("secret");

    if(fromQuery != process.env.NEXTAUTH_URL){
        return NextResponse.json({message:"user is invalid"},{status:401});
    }
    try{
        
    }catch{
        
    }

}
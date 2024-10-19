import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { PrismaClient } from "@prisma/client";
import { getSession } from "next-auth/react";
import { NextRequest, NextResponse } from "next/server";

export default function CreateProblems(req:NextRequest){
  return(<div>
    <div className="flex flex-col ml-44 mt-12">
    <div className="text-xl mb-5 font-bold from-neutral-700">
        <h1>CREATE NEW PROBLEM</h1>
    </div>
        <div className="w-[800px]">
            <Textarea placeholder="Enter your problem"></Textarea>
        </div>
    <div className="w-40 mt-5 flex justify-between">
        <Button>Cancel</Button>
        <Button>Create</Button>
    </div>
    
    </div>
  </div>) 

}


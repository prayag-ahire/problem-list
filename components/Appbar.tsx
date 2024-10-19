"use client"
import { signIn, signOut, useSession } from "next-auth/react"
import { Button } from "./ui/button"

export const AppBar = ()=>{
    const session = useSession();
    const user = session.data;
    return (<div className="w-screen">
        <div className="flex justify-between  mt-10">
            <div className="font-extrabold text-4xl ml-10 ">LYP</div>
            <div className="flex  justify-end mr-12">
                {user ? <Button onClick={()=>signOut()}>SignOut</Button> :   <Button onClick={()=>signIn()}>Signin</Button>}
            </div>
        </div>
        
    </div>)
}
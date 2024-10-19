"use client"

import { useRouter } from "next/navigation"
import { Button } from "./ui/button"
import { Input } from "./ui/input"


export const  HomePage = ()=>{
    const router = useRouter();
    return (<div>
        <div className="w-full">
            <div className="flex justify-center mt-36 ">
            <h1 className="text-6xl font-semibold">List Your Problem</h1>
        </div>

        <div className="flex justify-center ">
            <div className="flex mt-5 text-lg font-mono w-[800px] text-center">
            <h3>This is one of the best platform to get your #answer  , ask quetions & give answers make this platform useful  </h3>
            </div>
        </div>
        <div className="flex justify-center">
            <div className="flex justify-between w-[500px]  mt-10 ">
                <div className="w-full mr-2">
                <Input  placeholder="search..." />
                </div>
                <div>
                <Button onClick={()=>{}}>Find</Button>
                </div>
            </div>
        </div>
        <div className="flex justify-center mt-10">
            <div className="text-lg">`If You Can't Find Your Problem Then <Button onClick={()=>{router.push('/problems')}}>Create</Button> New Problem` </div>
        </div>
        </div>
    </div>)
}
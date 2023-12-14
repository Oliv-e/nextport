'use client'
import Link from "next/link"
import { usePathname } from "next/navigation"
import React, { useState } from "react"
function Sidebar() {
    const pathname = usePathname()
    const [isActive, setActive] = useState(false)

    return(
        <>
        <div className="w-1/6 h-screen font-bold hidden xl:flex flex-col justify-center items-center text-black">
            <div className="w-full flex flex-col text-3xl items-center uppercase gap-4 -translate-y-16 text-white">
                <div className={pathname == "/" ? "text-red-500" : "hover:text-red-500 duration-75 hover:scale-125"}>
                    <Link href="/">オリバー</Link>
                </div>
                {/* <div className={pathname == "/about" ? "text-red-500" : "hover:text-red-500 duration-75 hover:scale-125"}>
                    <Link href="/about">About Me</Link>
                </div> */}
                <Link href="" className="hover:text-red-500 duration-75 hover:scale-125">Nothing</Link>
            </div>
        </div>
        <div className="text-white xl:hidden text-2xl p-4 uppercase font-bold flex flex-row justify-center md:pl-8 md:justify-between gap-4">
            <div className={pathname == "/" ? "text-red-500" : "hover:text-red-500 duration-75 hover:scale-125"}>
                <Link href="/">オリバー</Link>
            </div>
            {/* <button onClick={() => setActive(!isActive)}><span className="icon-[fe--bar] w-10 h-10"></span></button> */}
        </div>
        {isActive ? (
            <div className={`${isActive ? 'fixed' : 'hidden'} translate-y-[3rem] w-full xl:hidden`}>
                <div className=" p-4 w-full text-white justify-center items-end uppercase text-xl font-bold flex flex-col gap-4">
                    <div className={pathname == "/about" ? "flex" : "hidden"}>
                        <Link href="/">Home</Link>
                    </div>
                    <div className={pathname == "/about" ? "text-red-500" : "hover:text-red-500 duration-75 hover:scale-125"}>
                        <Link href="/about">About Me</Link>
                    </div>
                </div>
            </div>
        ) : (
            <div className="hidden">

            </div>
        )}        
        </>
    )
}
export default Sidebar;
  
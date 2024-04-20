"use client"
import { FaPowerOff } from "react-icons/fa6";
import { signOut } from "next-auth/react";


export default function ButtonSignOut(){
    return (
    <button
          onClick={() => signOut()}
          className="transition-all duration-1000 flex h-[48px] w-full grow items-center justify-center gap-2 rounded-md bg-transparent p-3 text-sm font-medium hover:bg-sky-200 md:flex-none md:justify-start md:p-2 md:px-3"
        >
          <FaPowerOff className="w-6 size-5 text-sky-900"/>
          <div className="hidden md:block text-sky-900 font-bold">Salir</div>
    </button>
    )
}
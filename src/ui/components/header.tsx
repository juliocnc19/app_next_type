"use client"

import { useSession } from "next-auth/react";
import { signOut } from "next-auth/react";
import { FaPowerOff } from "react-icons/fa6";


export default function HeaderAdmin() {
    const session = useSession()
  return (
    <header className="bg-sky-200 p-5 flex justify-between h-full items-center">
        <h1 className="flex uppercase font-bold text-sky-900 h-full items-center">Bienvenido {session && session.data?.user?.name}</h1>
        <h2 className="font-bold text-sky-900 hidden sm:block">Panel Administrador</h2>
        <button className="flex sm:hidden transition-all duration-200 bg-sky-700 hover:bg-sky-600 border-2 border-sky-900 text-slate-100 text-sm rounded-lg outline-none px-2 py-1 cursor-pointer" onClick={()=>signOut()}>
            <FaPowerOff className="my-1 mx-2"/>
            Salir
        </button>
    </header>
  );
}

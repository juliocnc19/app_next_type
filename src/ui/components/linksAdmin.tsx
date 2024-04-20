"use client"

import Link from "next/link"
import { Routes } from "@/defitions/routesEnum"
import { usePathname } from 'next/navigation'
import clsx from "clsx"


export default function LinksAdmin(){
    const styleDefault = "text-sky-900 font-bold  w-full py-3 px-4 rounded-xl mb-4 hover:bg-sky-200"
    const path = usePathname()
    const itemsDashboard = clsx(
      styleDefault,
      {"bg-orange-200 text-orange-600": (path == Routes.DASHBOARD)}
    )

    const itemsStatictics = clsx(
      styleDefault,
      {"bg-sky-200": (path == Routes.STATISTICS)}
    )

    const itemsUsers = clsx(
      styleDefault,
      {"bg-sky-200": (path == Routes.USER)}
    )
    return (
        <>
        <Link className={itemsDashboard} href={Routes.DASHBOARD}>
          Productos
        </Link>
        <Link className={itemsStatictics} href={Routes.STATISTICS}>
          Estadistica
        </Link>
        <Link className={itemsUsers} href={Routes.USER}>
          User
        </Link>
        </>
    ) 
}
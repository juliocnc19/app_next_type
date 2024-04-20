"use client"

import { signOut } from "next-auth/react"

export default function UserDashboard(){
    return (
        <div>
            <h1>User</h1>
            <button onClick={()=>signOut()}>Cerrar sesion</button>
        </div>
    )
}
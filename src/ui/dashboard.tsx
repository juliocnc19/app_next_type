"use client"
import { useSession } from "next-auth/react"
import UserDashboard from "./user/userDashboard"
import AdminDashboard from "./admin/adminDashboard"
import { UserWithRole } from "@/defitions/types"

export default function DashboardComponent(){
    const session = useSession()
    const user:UserWithRole = session.data?.user 
    return user?.admin ? <AdminDashboard/> : <UserDashboard/>
}
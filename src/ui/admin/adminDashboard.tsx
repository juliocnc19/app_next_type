"use client"
import TableProducts from "./components/tableProducts"

export default function AdminDashboard(){
    return (
        <div className="w-full h-[calc(100vh-80px)] m-2 rounded-xl bg-orange-100">
            <TableProducts/>
        </div>
    )
}
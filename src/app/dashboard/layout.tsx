import SideNav from "@/ui/components/sideBar";
import { getServerSession } from "next-auth";
import { authOptions } from "@/app/api/auth/[...nextauth]/authOptions";
import HeaderAdmin from "@/ui/components/header";
import { UserWithRole } from "@/defitions/types";


export default async function LayoutDefault({ children }:Readonly<{ children: React.ReactNode}>){
    const session = await getServerSession(authOptions)
    const user:UserWithRole = session?.user
    return (
      <div>
        {(user && user?.admin ? (
            <>
              <HeaderAdmin/>
                <main className="flex">
                    <SideNav/>
                    {children}
                </main>
            </>
          
        ):
            <main>{children}</main>
        )}
      </div>
    );
  };
  
  
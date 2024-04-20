import { Lato } from "next/font/google";
import AuthProvider from "./api/auth/[...nextauth]/authProvider";
import { getServerSession } from "next-auth";
import { authOptions } from "./api/auth/[...nextauth]/authOptions";
import "./globals.css";

const lato = Lato({ subsets: ["latin"], weight:["300","400","700"], style:["normal"] });

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default async function RootLayout({ children }:Readonly<{ children: React.ReactNode}>) {
  const session = await getServerSession(authOptions)
  return (
    <html lang="es">
      <body className={`${lato.className} antialiased`}>
        <AuthProvider session={session}>
        {children}
        </AuthProvider>
 
        </body>
    </html>
  );
}

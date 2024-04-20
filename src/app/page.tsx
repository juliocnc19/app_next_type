import LoginForm from "@/ui/loginForm"

export const revalidate = 0

export default function Home(){
  return (
    <main className="h-screen flex items-center justify-center flex-col">
      <LoginForm/>
    </main>
    
  )
}

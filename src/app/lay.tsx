import Sidebar from "@/components/layout/sidebar"
import { Header } from "@/components/layout/header"


export function AppLayout({children}: {children: React.ReactNode}) {
  return (
    <div className="grid h-full w-full md:grid-cols-[220px_1fr] lg:grid-cols-[280px_1fr] ">
        <Sidebar />
      <div className="flex flex-col h-full">
        <Header />
        <div className="p-2 bg-muted/40 h-full">
        <main className="flex flex-1 flex-col gap-4 p-4 lg:gap-6 lg:p-2 w-full  bg-background rounded-lg h-full">
            {children}
        </main>
        </div>
      </div>
    </div>
  )
}

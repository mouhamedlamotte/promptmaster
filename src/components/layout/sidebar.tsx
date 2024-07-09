"use client";

import {
  Bell,
  ChevronsUpDown,
  Home,
  LineChart,
  Package,
  ShoppingCart,
  Terminal,
  Users,
} from "lucide-react";
import Link from "next/link";
import React from "react";
import { Button } from "../ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../ui/card";
import { Badge } from "../ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import { useAuth } from "@/context/AuthContext";
import { usePathname, useRouter } from "next/navigation";
import { cn } from "@/lib/utils";

const Sidebar = () => {

  const router = useRouter()
  const {user, Logout} = useAuth()

  const paths = [
    {
      "name": "Home",
      "icon": Home,
      "link": "/",
      "admin": false,
    },
    {
      "name": "Dashboard",
      "icon": LineChart,
      "link": "/dashboard",
      "admin": true,
    }
  ]

  
  return (
    <div className="hidden bg-muted/40 md:block">
      <div className="flex h-full max-h-screen flex-col gap-2">
        <div className="flex h-14 items-center px-4 lg:h-[45px] lg:px-6">
          <Link href="/" className="flex items-center gap-2 font-semibold">
            <Terminal className="h-6 w-6" />
            <span className="">Prompt Master</span>
          </Link>
          <Button variant="outline" size="icon" className="ml-auto h-8 w-8">
            <Bell className="h-4 w-4" />
            <span className="sr-only">Toggle notifications</span>
          </Button>
        </div>
        <div className="flex-1">
          {
            user ? (
          <Link
            className="grid  px-2 text-sm font-medium lg:px-4"
            href="javascript:void(0)"
            >

        <Card className="rounded-md">
          <div className="p-4 flex  gap-2">
            <Avatar>
              <AvatarImage
                src="https://github.com/shadcn.png"
                alt="@shadcn"
              />
              <AvatarFallback>
                {user?.first_name.slice(0, 2).toUpperCase()}
              </AvatarFallback>
            </Avatar>
            <div className="grow">
              <h3>{user?.first_name}</h3>
              <p className="text-muted-foreground">
              {user?.is_superuser ? "Admin" : "User"}
              </p>
            </div>
            <Button className="ml-auto p-2 rounded-full bg-muted" variant="outline" size={"sm"}>
            <ChevronsUpDown className="" size={15} />
            </Button>
          </div>
        </Card>
          </Link>
    ) :<div  className="grid  px-2 text-sm font-medium lg:px-4"> <Button className="mx-4" variant="default" onClick={() => router.push("/auth/login")}>Se connecter</Button></div>
  }

          <nav className="grid items-start px-2 text-sm font-medium lg:px-4 mt-6">
            <h3 className="px-3 font-bold text-neutral-400">Main</h3>
           <NavPaths user={user}/>
          </nav>
        </div>
      {
        user ? (
          <div className="mt-auto p-4">
          <Button className="w-full" 
          onClick={async ()=>{
            await Logout()
            router.push("/auth/login")
          }}
          >Se deconnecter</Button>
        </div>
        ) : null
      }
      </div>
    </div>
  );
};
const NavPaths = ({user}) =>{
  const paths = [
    {
      "name": "Home",
      "icon": Home,
      "link": "/",
      "admin": false,
    },
    {
      "name": "Dashboard",
      "icon": LineChart,
      "link": "/admin/dashboard",
      "admin": true,
    }
  ]
  const pathname = usePathname()

  return (
    <>
    {
      paths.map((path)=>{
        if(path.admin===true && !user?.is_superuser){
         return null
        }
        return(
          <Link
          key={path.name}
          href={path.link}
          className={cn("flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-primary", pathname === path.link && "text-primary")}
        >
          <path.icon className="h-4 w-4" />
          <span>{path.name}</span>
        </Link>
        )
      })
    }
    </>
  )
}
export default Sidebar;

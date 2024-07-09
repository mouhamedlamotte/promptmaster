"use client"

import Link from "next/link"

import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { useAuth } from "@/context/AuthContext"
import { useState } from "react"
import { useRouter } from "next/navigation"

export default function Login() {

    const router = useRouter()
    const [user, setUser] = useState<{
        email: string
        password: string
    }>({
        email: "",
        password: "",
    })

    const {LoginUser} = useAuth()

    const handleLogin = async () => {        
        const res = await LoginUser(user.email, user.password)
        if (res) {
            window.location.href = "/"
        }
        else(
            alert("Invalid email or password")
        )
    }

  return (
    <div className="container grid h-screen w-full items-center justify-center px-6 text-center">
    <Card className="mx-auto max-w-sm">
      <CardHeader>
        <CardTitle className="text-2xl">Login</CardTitle>
        <CardDescription>
          Enter your email below to login to your account
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="grid gap-4">
          <div className="grid gap-2">
            <Label htmlFor="email" className="text-start">Email</Label>
            <Input
              id="email"
              type="email"
              value={user.email}
              placeholder="m@example.com"
              onChange={(e) => setUser({...user, email: e.target.value})}
              required
            />
          </div>
          <div className="grid gap-2">
            <div className="flex items-center">
              <Label htmlFor="password">Password</Label>
              <Link href="#" className="ml-auto inline-block text-sm underline">
                Forgot your password?
              </Link>
            </div>
            <Input id="password" type="password" value={user.password} required onChange={(e) => setUser({...user, password: e.target.value})} />
          </div>
          <Button type="submit" className="w-full" onClick={handleLogin}>
            Login
          </Button>
          <Button variant="outline" className="w-full">
            Login with Google
          </Button>
        </div>
        <div className="mt-4 text-center text-sm">
          Don&apos;t have an account?{" "}
          <Link href="#" className="underline">
            Sign up
          </Link>
        </div>
      </CardContent>
    </Card>
  </div>
  )
}

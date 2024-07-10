"use client"

import { AppLayout } from '@/app/lay'
import Link from "next/link"
import {
  Activity,
  ArrowUpRight,
  CreditCard,
  DollarSign,
  Terminal,
  User,
  Users,
} from "lucide-react"

import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"


import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import { useAnlytics } from '@/hooks/use-analytics'

const Dashboard = () => {
  
  const { data, error, isLoading } = useAnlytics()

  console.log(data);
  
  

  return (
    <AppLayout>
      <div>

      </div>
               <div className="grid gap-4 md:grid-cols-2 md:gap-8 lg:grid-cols-4">
          <Card x-chunk="dashboard-01-chunk-0">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">
                Total Ventes
              </CardTitle>
              <DollarSign className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{data?.transactions.sum} XOF</div>
              <p className="text-xs text-muted-foreground">
                {/* +20.1% from last month */}
              </p>
            </CardContent>
          </Card>
          <Card x-chunk="dashboard-01-chunk-1">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">
                Groups
              </CardTitle>
              <Users className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">+{data?.groups.total}</div>
              <p className="text-xs text-muted-foreground">
                {/* +180.1% from last month */}
              </p>
            </CardContent>
          </Card>
          <Card x-chunk="dashboard-01-chunk-2">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Prompts</CardTitle>
              <Terminal className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{data?.prompts.total}</div>
              <p className="text-xs text-muted-foreground">
                {/* +19% from last month */}
              </p>
            </CardContent>
          </Card>
          <Card x-chunk="dashboard-01-chunk-3">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Utilisateurs</CardTitle>
              <User className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">+{data?.users.total}</div>
              {/* <p className="text-xs text-muted-foreground">
                +201 since last hour
              </p> */}
            </CardContent>
          </Card>
        </div>
        <div className="grid gap-4 md:gap-8 lg:grid-cols-2 xl:grid-cols-3">
          <Card
            className="xl:col-span-2" x-chunk="dashboard-01-chunk-4"
          >
            <CardHeader className="flex flex-row items-center">
              <div className="grid gap-2">
                <CardTitle>Transactions</CardTitle>
                <CardDescription>
                Transactions recent depuis dans la semaine
                </CardDescription>
              </div>
              <Button asChild size="sm" className="ml-auto gap-1">
                <Link href="#">
                  View All
                  <ArrowUpRight className="h-4 w-4" />
                </Link>
              </Button>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>#prompt</TableHead>
                    <TableHead>Customer</TableHead>
                    <TableHead className="hidden xl:table-column">
                      Type
                    </TableHead>
                    <TableHead className="">
                      Status
                    </TableHead>
                    <TableHead className="hidden xl:table-column">
                      Date
                    </TableHead>
                    <TableHead className="text-right">Montant</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                {
                    data?.transactions.recent.map((transaction) => {
                      return (
                        <TableRow key={transaction.prompt_id}>
                          <TableCell>
                          <div className="font-medium">
                            {transaction?.prompt_id}
                          </div>
                        </TableCell>
                        <TableCell>
                          <div className="font-medium">
                            {transaction?.buyer_info.name ? transaction?.buyer_info.name : "Unknown user"}
                          </div>
                          <div className="hidden text-sm text-muted-foreground md:inline">
                          {transaction?.buyer_info.email}
                          </div>
                        </TableCell>
                        <TableCell className="hidden xl:table-column">
                          Sale
                        </TableCell>
                        <TableCell className="">
                          <Badge className="text-xs" variant="outline">
                            {transaction?.state}
                          </Badge>
                        </TableCell>
                        <TableCell className="hidden md:table-cell lg:hidden xl:table-column">
                          2023-06-23
                        </TableCell>
                        <TableCell className="text-right">
                        {transaction?.amount} XOF
                        </TableCell>
                      </TableRow>
                      )
                    })
                  }
                </TableBody>
              </Table>
            </CardContent>
          </Card>
          <Card x-chunk="dashboard-01-chunk-5">
            <CardHeader>
              <CardTitle>Recent Sales</CardTitle>
            </CardHeader>
            <CardContent className="grid gap-8">
              <div className="flex items-center gap-4">
                <Avatar className="hidden h-9 w-9 sm:flex">
                  <AvatarImage src="/avatars/01.png" alt="Avatar" />
                  <AvatarFallback>OM</AvatarFallback>
                </Avatar>
                <div className="grid gap-1">
                  <p className="text-sm font-medium leading-none">
                    Olivia Martin
                  </p>
                  <p className="text-sm text-muted-foreground">
                    olivia.martin@email.com
                  </p>
                </div>
                <div className="ml-auto font-medium">+$1,999.00</div>
              </div>
            </CardContent>
          </Card>
        </div> 
    </AppLayout>
  )
}



export default Dashboard
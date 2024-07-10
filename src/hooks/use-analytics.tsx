"use client"

import Axiosinstance from "@/lib/axios"
import { useQuery } from "@tanstack/react-query"

export const useAnlytics = () => {
    return  useQuery({
    queryKey: ['analytics'],
    queryFn: async ()  => {
        const {data} = await Axiosinstance.get('/analytics')
        return data.data
    }
})
}
import Axiosinstance from "@/lib/axios"
import { PromptType } from "@/types/prompts"
import { useQuery } from "@tanstack/react-query"


export const usePrompts = () => {
    return useQuery({
        queryKey: ['prompts'],
        queryFn: async (): Promise<PromptType[]>  => {
            const {data} = await Axiosinstance.get('/prompts')
            return data
        }
    })
}

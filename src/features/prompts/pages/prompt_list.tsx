"use client";

import React from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { PromptCardList } from "../components/prompt-card-list";
import { ScrollArea } from "@/components/ui/scroll-area";
import { usePrompts } from "@/hooks/use-prompts";
import { Loader } from "lucide-react";

export const PromptList = () => {

  const {data, error, isLoading} = usePrompts()

  

  return (
    <Tabs defaultValue="prompt_templates" className="w-full h-full">
      <TabsList className="w-full">
        <TabsTrigger className="flex-1" value="prompt_templates">
          Prompt templates
        </TabsTrigger>
        <TabsTrigger className="flex-1" value="top_prompts">
          Top prompts
        </TabsTrigger>
        <TabsTrigger className="flex-1" value="my_prompts">
          My prompts
        </TabsTrigger>
      </TabsList>
      <ScrollArea className="h-[calc(100vh-120px)]">
        <TabsContent value="prompt_templates">
          {isLoading && <div className="w-full h-full flex items-center justify-center mt-8">
        <Loader className="w-10 h-10 animate-spin text-primary" size={24} />
      </div>}
          <PromptCardList prompts={data} />
          
          
        </TabsContent>
        <TabsContent value="top_prompts">Top promts</TabsContent>
        <TabsContent value="my_prompts">Ny promts</TabsContent>
      </ScrollArea>
    </Tabs>
  );
};

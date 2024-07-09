"use client";

import { Truncate, cn } from "@/lib/utils";
import { AnimatePresence, motion } from "framer-motion";
import { Bookmark, Hash, ThumbsUp } from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import { Button } from "../../../components/ui/button";
import { Separator } from "../../../components/ui/separator";
import { PromptCard } from "@/features/prompts/components/prompt_card";
import { PromptType } from "@/types/prompts";

export const PromptCardList = ({
  prompts,
  className,
}: {
  prompts: PromptType[];
  className?: string;
}) => {
  let [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  console.log("prompts",prompts);
  

  return (
    <div
      className={cn(
        "grid grid-cols-1 md:grid-cols-2  lg:grid-cols-3  py-4 ",
        className
      )}
    >
      {prompts?.map((prompt, idx) => (
        <Link
          href=""
          key={prompt?.prompt_id}
          className="relative group  block p-2 h-full w-full"
          onMouseEnter={() => setHoveredIndex(idx)}
          onMouseLeave={() => setHoveredIndex(null)}
        >
          <AnimatePresence>
            {hoveredIndex === idx && (
              <motion.span
                className="absolute inset-0 h-full w-full bg-neutral-200 dark:bg-slate-800/[0.8] block  rounded-3xl"
                layoutId="hoverBackground"
                initial={{ opacity: 0 }}
                animate={{
                  opacity: 1,
                  transition: { duration: 0.15 },
                }}
                exit={{
                  opacity: 0,
                  transition: { duration: 0.15, delay: 0.2 },
                }}
              />
            )}
          </AnimatePresence>
          <PromptCard className="bg-white p-0 flex flex-col gap-4">
            <div className="flex justify-between">
              <div className="flex gap-2">
                <Hash className="h-6 w-6" />
                <h3 className="font-bold text-lg max-w-[12rem] truncate">
                    {prompt?.title}
                    </h3>
              </div>
              <Bookmark />
            </div>
            <div className="min-h-[80px] max-h-[100px] overflow-hidden">
            <p className="text-sm mt-2 text-muted-foreground">
                <Truncate str={
                    prompt?.text
                    } max={100} len={100} />
                </p>
            </div>
            <div className="flex h-5 prompts-center space-x-4 text-sm pb-10">
                <Button size="sm" variant="outline" className="items-center gap-2 bg-muted" >
                <ThumbsUp size={15} />
                <span>64</span>
                </Button>
                <Separator orientation="vertical" />
                {
                  prompt.tags.split(",").map((tag) => (
                    <Button size="sm" variant="outline" className="items-center gap-2 bg-muted"  key={tag}>
                <span>website</span>
                </Button>
                  ))
                }
            </div>
          </PromptCard>
        </Link>
      ))}
    </div>
  );
};



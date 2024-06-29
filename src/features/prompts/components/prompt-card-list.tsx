"use client";

import { Truncate, cn } from "@/lib/utils";
import { AnimatePresence, motion } from "framer-motion";
import { Bookmark, Hash, ThumbsUp } from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import { Button } from "../../../components/ui/button";
import { Separator } from "../../../components/ui/separator";
import { PromptCard } from "@/features/prompts/components/prompt_card";

export const PromptCardList = ({
  items,
  className,
}: {
  items: {
    title: string;
    description: string;
    link: string;
  }[];
  className?: string;
}) => {
  let [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <div
      className={cn(
        "grid grid-cols-1 md:grid-cols-2  lg:grid-cols-3  py-4 ",
        className
      )}
    >
      {items.map((item, idx) => (
        <Link
          href={item?.link}
          key={item?.link}
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
                    {item?.title}
                    </h3>
              </div>
              <Bookmark />
            </div>
            <div className="min-h-[80px] max-h-[100px] overflow-hidden">
            <p className="text-sm mt-2 text-muted-foreground">
                <Truncate str={
                    item?.description
                    } max={100} len={100} />
                </p>
            </div>
            <div className="flex h-5 items-center space-x-4 text-sm">
                <Button size="sm" variant="outline" className="items-center gap-2 bg-muted" >
                <ThumbsUp size={15} />
                <span>64</span>
                </Button>
                <Separator orientation="vertical" />
                <Button size="sm" variant="outline" className="items-center gap-2 bg-muted" >
                <span>website</span>
                </Button>
                <Button size="sm" variant="outline" className="items-center gap-2 bg-muted" >
                <span>News</span>
                </Button>
            </div>
          </PromptCard>
        </Link>
      ))}
    </div>
  );
};



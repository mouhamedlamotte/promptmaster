import { cn } from "@/lib/utils";

export const PromptCard = ({
    className,
    children,
  }: {
    className?: string;
    children: React.ReactNode;
  }) => {
    return (
      <div
        className={cn(
          "rounded-2xl h-full w-full p-4 overflow-hidden   border-transparent dark:border-white/[0.2] group-hover:border-slate-700 relative z-20",
          className
        )}
      >
        <div className="relative z-50 border-b">
          <div className="p-4">{children}</div>
        </div>
      </div>
    );
  };


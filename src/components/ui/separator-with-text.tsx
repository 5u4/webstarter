import { cn } from "@/lib/utils";

interface SeparatorWithTextProps {
  text: string;
  className?: string;
}

export function SeparatorWithText({ text, className }: SeparatorWithTextProps) {
  return (
    <div className={cn("relative text-muted-foreground", className)}>
      <div className="absolute inset-0 flex items-center">
        <span className="w-full border-t" />
      </div>
      <div className="relative flex justify-center">
        <span className="bg-background px-2">{text}</span>
      </div>
    </div>
  );
}

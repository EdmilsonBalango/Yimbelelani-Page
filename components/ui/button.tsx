import * as React from "react";
import { cn } from "@/lib/utils";

export function Button({ className, ...props }: React.ButtonHTMLAttributes<HTMLButtonElement>) {
  return (
    <button
      className={cn(
        "inline-flex items-center justify-center rounded-full bg-[#f4a72e] px-5 py-2.5 text-sm font-bold text-[#06363b] shadow-[0_8px_20px_rgba(244,167,46,.2)] transition hover:-translate-y-0.5 hover:bg-[#ffb63f] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#0e6f7a]",
        className,
      )}
      {...props}
    />
  );
}

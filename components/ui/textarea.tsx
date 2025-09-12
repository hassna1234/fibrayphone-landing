'use client';

import * as React from "react";
import { cn } from "@/components/ui/cn";

export const Textarea = React.forwardRef<HTMLTextAreaElement, React.TextareaHTMLAttributes<HTMLTextAreaElement>>(
  ({ className, ...props }, ref) => {
    return (
      <textarea
        ref={ref}
        className={cn("w-full border rounded-md px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-slate-400", className)}
        {...props}
      />
    );
  }
);
Textarea.displayName = "Textarea";
export default Textarea;

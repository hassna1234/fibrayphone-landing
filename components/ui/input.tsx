'use client';

import * as React from "react";
import { cn } from "@/components/ui/cn";

export const Input = React.forwardRef<HTMLInputElement, React.InputHTMLAttributes<HTMLInputElement>>(
  ({ className, ...props }, ref) => {
    return (
      <input
        ref={ref}
        className={cn("w-full border rounded-md px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-slate-400", className)}
        {...props}
      />
    );
  }
);
Input.displayName = "Input";
export default Input;

'use client';

import * as React from "react";
import { cn } from "@/components/ui/cn";

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "default" | "outline";
  size?: "sm" | "md" | "lg";
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "default", size = "md", ...props }, ref) => {
    const base = "inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none px-4 py-2";
    const variants = {
      default: "bg-slate-900 text-white hover:opacity-90",
      outline: "border border-slate-300 hover:bg-slate-50",
    };
    const sizes = {
      sm: "h-9 px-3",
      md: "h-10 px-4",
      lg: "h-11 px-6 text-base",
    };
    return (
      <button ref={ref} className={cn(base, variants[variant], sizes[size], className)} {...props} />
    );
  }
);
Button.displayName = "Button";
export default Button;

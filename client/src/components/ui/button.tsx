import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-xs sm:text-sm font-bold transition-all duration-500 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-3.5 sm:[&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:ring-2 focus-visible:ring-primary/50 active:scale-90",
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground shadow-[0_10px_40px_-10px_rgba(34,197,94,0.5)] hover:shadow-[0_20px_60px_-10px_rgba(34,197,94,0.7)] hover:bg-primary/90 hover:-translate-y-1",
        destructive:
          "bg-destructive text-white hover:bg-destructive/90 shadow-[0_10px_30px_-10px_rgba(239,68,68,0.4)]",
        outline:
          "border-2 border-white/10 bg-white/5 backdrop-blur-2xl hover:bg-white/10 hover:border-white/20 text-white shadow-xl hover:-translate-y-1",
        secondary:
          "bg-secondary text-secondary-foreground hover:bg-secondary/80 shadow-lg",
        ghost:
          "hover:bg-white/5 text-muted-foreground hover:text-white",
        link: "text-primary underline-offset-8 hover:underline decoration-2",
        premium: "bg-gradient-to-r from-primary via-emerald-400 to-teal-400 text-primary-foreground font-black tracking-widest shadow-[0_15px_50px_-12px_rgba(34,197,94,0.6)] hover:shadow-[0_25px_70px_-12px_rgba(34,197,94,0.8)] hover:-translate-y-1.5 hover:scale-105",
      },
      size: {
        default: "h-9 sm:h-10 px-6 sm:px-7 py-2",
        sm: "h-7 sm:h-8 rounded-xl px-3 sm:px-3.5 text-[11px] sm:text-xs tracking-wider",
        lg: "h-10 sm:h-11 rounded-2xl px-7 sm:px-8 text-sm sm:text-base tracking-wide",
        xl: "h-14 sm:h-16 rounded-[2rem] px-10 sm:px-11 text-lg sm:text-xl font-black tracking-tighter",
        icon: "size-9 sm:size-10 rounded-2xl",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

function Button({
  className,
  variant,
  size,
  asChild = false,
  ...props
}: React.ComponentProps<"button"> &
  VariantProps<typeof buttonVariants> & {
    asChild?: boolean;
  }) {
  const Comp = asChild ? Slot : "button";

  return (
    <Comp
      data-slot="button"
      className={cn(buttonVariants({ variant, size, className }))}
      {...props}
    />
  );
}

export { Button, buttonVariants };

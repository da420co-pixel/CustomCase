import * as React from "react";
import { cn } from "@/lib/utils";

export const NavigationMenu = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => <div ref={ref} className={cn(className)} {...props} />,
);
NavigationMenu.displayName = "NavigationMenu";

// Placeholder generated from provided project structure. Replace with the full shadcn implementation if needed.
export default NavigationMenu;

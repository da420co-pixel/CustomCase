import * as React from "react";
import { cn } from "@/lib/utils";

export const Avatar = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => <div ref={ref} className={cn(className)} {...props} />,
);
Avatar.displayName = "Avatar";

// Placeholder generated from provided project structure. Replace with the full shadcn implementation if needed.
export default Avatar;

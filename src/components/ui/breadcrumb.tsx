import * as React from "react";
import { cn } from "@/lib/utils";

export const Breadcrumb = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => <div ref={ref} className={cn(className)} {...props} />,
);
Breadcrumb.displayName = "Breadcrumb";

// Placeholder generated from provided project structure. Replace with the full shadcn implementation if needed.
export default Breadcrumb;

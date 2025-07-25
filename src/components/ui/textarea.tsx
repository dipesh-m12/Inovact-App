import * as React from "react"

import { cn } from "@/lib/utils"

function Textarea({ className, ...props }: React.ComponentProps<"textarea">) {
  return (
    <textarea
      data-slot="textarea"
      className={cn(
        "flex min-h-[60px] w-full rounded-md border border-input bg-transparent px-3 py-2 text-base shadow-xs placeholder:text-muted-foreground focus-visible:outline-none disabled:cursor-not-allowed disabled:opacity-50 md:text-sm transition-all duration-200",
        "focus-visible:border-blue-600 focus-visible:ring-2 focus-visible:ring-blue-600/20 focus-visible:ring-offset-1",
        className
      )}
      {...props}
    />
  )
}

export { Textarea }

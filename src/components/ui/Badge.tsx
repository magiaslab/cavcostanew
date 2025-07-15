import React from 'react'
import { cva, type VariantProps } from 'class-variance-authority'
import { cn } from '@/lib/utils'

const badgeVariants = cva(
  'inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2',
  {
    variants: {
      variant: {
        default: 'border-transparent bg-primary-600 text-white hover:bg-primary-700',
        secondary: 'border-transparent bg-neutral-200 text-neutral-900 hover:bg-neutral-300',
        destructive: 'border-transparent bg-error-500 text-white hover:bg-error-600',
        outline: 'text-foreground',
        accent: 'border-transparent bg-accent-500 text-white hover:bg-accent-600',
        success: 'border-transparent bg-success-500 text-white hover:bg-success-600',
      },
    },
    defaultVariants: {
      variant: 'default',
    },
  }
)

export interface BadgeProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof badgeVariants> {}

function Badge({ className, variant, ...props }: BadgeProps) {
  return (
    <div className={cn(badgeVariants({ variant }), className)} {...props} />
  )
}

export { Badge, badgeVariants } 
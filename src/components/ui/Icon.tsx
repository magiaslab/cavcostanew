import React from 'react'
import { type LucideIcon } from 'lucide-react'
import { cn } from '@/lib/utils'

export interface IconProps {
  name: LucideIcon
  size?: 'sm' | 'md' | 'lg' | 'xl'
  className?: string
}

const sizeClasses = {
  sm: 'w-4 h-4',
  md: 'w-5 h-5',
  lg: 'w-6 h-6',
  xl: 'w-8 h-8'
}

const Icon: React.FC<IconProps> = ({ name: IconComponent, size = 'md', className, ...props }) => {
  return (
    <IconComponent
      className={cn(sizeClasses[size], className)}
      {...props}
    />
  )
}

export { Icon } 
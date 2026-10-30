import { motion } from 'motion/react'
import type { ReactNode } from 'react'

const offsets = {
  up: { y: 48 },
  down: { y: -48 },
  left: { x: -48 },
  right: { x: 48 },
  none: {},
} as const

type Props = {
  children: ReactNode
  from?: keyof typeof offsets
  delay?: number
  className?: string
}

export function Reveal({ children, from = 'up', delay = 0, className }: Props) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, ...offsets[from] }}
      whileInView={{ opacity: 1, x: 0, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.7, delay, ease: [0.21, 0.47, 0.32, 0.98] }}
    >
      {children}
    </motion.div>
  )
}

import { ReactNode } from 'react'
import styles from './styles.module.css'

interface TestimonialsCardsProps {
  children: ReactNode
}

export function TestimonialsCards({ children }: TestimonialsCardsProps) {
  return <div className={styles.container}>{children}</div>
}

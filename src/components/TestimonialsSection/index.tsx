import { ReactNode } from 'react'
import styles from './styles.module.css'

interface TestimonialsSectionProps {
  children: ReactNode
}

export function TestimonialsSection({ children }: TestimonialsSectionProps) {
  return <div className={styles.container}>{children}</div>
}

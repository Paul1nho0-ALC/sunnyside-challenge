import { ReactNode } from 'react'
import styles from './styles.module.css'

interface GridSectionProps {
  children: ReactNode
}
export function GridSection({ children }: GridSectionProps) {
  return <div className={styles.grid}>{children}</div>
}

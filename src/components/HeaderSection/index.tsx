import styles from './styles.module.css'
import { ReactNode } from 'react'

interface HeaderSectionProps {
  children: ReactNode
}

export function HeaderSection({ children }: HeaderSectionProps) {
  return <div className={styles.container}>{children}</div>
}

import { ReactNode } from 'react'
import styles from './styles.module.css'

interface GridFourColumsProps {
  children: ReactNode
}
export function GridFourColums({ children }: GridFourColumsProps) {
  return <div className={styles.grid}>{children}</div>
}

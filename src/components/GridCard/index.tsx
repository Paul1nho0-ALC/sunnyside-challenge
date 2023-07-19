import styles from './styles.module.css'

interface GridCardProps {
  title: string
  desc: string
  color: 'pink' | 'yellow'
}

export const GridCard = ({ title, desc, color }: GridCardProps) => {
  const col = color === 'yellow' ? styles.yellowOne : styles.softRedOne

  return (
    <div className={styles.container}>
      <h2>{title}</h2>
      <p>{desc}</p>
      <button className={col}>Learn More</button>
    </div>
  )
}

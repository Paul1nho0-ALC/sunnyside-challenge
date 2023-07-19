import styles from './styles.module.css'

interface GridImageWithTextProps {
  srcImg: string
  text: string
  title: string
  color: 'cyan' | 'blue'
}

export function GridImageWithText({
  srcImg,
  text,
  title,
  color,
}: GridImageWithTextProps) {
  const col = color === 'cyan' ? styles.isCyan : styles.isBlue

  return (
    <div className={styles.container}>
      <img
        alt="illustration"
        src={srcImg}
        style={{ width: '100%', objectFit: 'cover' }}
      />
      <div className={styles.text}>
        <h3 className={col}>{title}</h3>
        <span className={col}>{text}</span>
      </div>
    </div>
  )
}

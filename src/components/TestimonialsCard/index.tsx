import styles from './styles.module.css'

interface TestimonialsCardProps {
  srcImg: string
  text: string
  name: string
  ocupation: string
}

export function TestimonialsCard({
  text,
  name,
  ocupation,
  srcImg,
}: TestimonialsCardProps) {
  return (
    <div className={styles.container}>
      <img className={styles.pic} src={srcImg} alt="Testimonial picture" />
      <p className={styles.text}>{text}</p>
      <span className={styles.name}>{name}</span>
      <span className={styles.ocupation}>{ocupation}</span>
    </div>
  )
}

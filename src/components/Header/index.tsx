import { LogoIcon } from '../icons/Logo'
import styles from './styles.module.css'

export const Header = () => {
  return (
    <div className={styles.container}>
      <a href="#" aria-label="logo icon">
        <LogoIcon />
      </a>
      <div className={styles.linksContainer}>
        <a className={styles.link} href="#">
          About
        </a>
        <a className={styles.link} href="#">
          Services
        </a>
        <a className={styles.link} href="#">
          Pojects
        </a>
        <a className={styles.linkBtn} href="#">
          contact
        </a>
      </div>
    </div>
  )
}

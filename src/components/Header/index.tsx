import { useState } from 'react'

import { LogoIcon } from '../icons/Logo'
import { MenuIcon } from '../icons/Menu'
import styles from './styles.module.css'

export const Header = () => {
  const [isOpen, setIsopen] = useState(false)

  return (
    <>
      <div className={styles.menuMobileContainer}>
        <button onClick={() => setIsopen(!isOpen)} className={styles.menuBtn}>
          <MenuIcon />
          {isOpen && (
            <div className={styles.menuMobile}>
              <a className={styles.linkMobile} href="#">
                About
              </a>
              <a className={styles.linkMobile} href="#">
                Services
              </a>
              <a className={styles.linkMobile} href="#">
                Pojects
              </a>
              <a className={styles.linkBtnMobile} href="#">
                contact
              </a>
            </div>
          )}
        </button>
      </div>

      <div className={styles.container}>
        <a href="#" aria-label="logo icon">
          <LogoIcon col="#fff" />
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
    </>
  )
}

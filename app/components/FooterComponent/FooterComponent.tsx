import React from 'react'
import styles from './FooterComponent.module.css'

//Standard Footer
const FooterComponent = () => {
  return (
    <div className={styles.footer}>
      <div className='flex flex-row h-full items-center justify-center'>
        <a href='https://creativecommons.org/licenses/by-sa/4.0/ '>
          Licensed under Creative Commons
        </a>
      </div>
    </div>
  )
}

export default FooterComponent
'use client'
import React from 'react'
import styles from './BubbleComponent.module.css'
import Link from 'next/link'

const BubbleComponent = (props: { route: string }) => {


  return (
    <div className={styles.bubbleContainer}>
      <div className='text-sm align-bottom'>Placeholder</div>
      <button className="btn ">Button</button>
    </div>
  )
}

export default BubbleComponent
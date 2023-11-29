'use client'
import React from 'react'
import styles from './BubbleComponent.module.css'
import Link from 'next/link'

const BubbleComponent = (props: { route: string }) => {


  return (
    <div className={styles.bubbleContainer}>
      <div className="card card-compact w-52 bg-base-100 shadow-xl">
        <figure><img src="https://daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg" alt="Shoes" /></figure>
        <div className="card-body">
          <h2 className="card-title">Shoes!</h2>
          <p>If a dog chews shoes whose shoes does he choose?</p>
          <div className="card-actions justify-end">
            <button className="btn btn-primary">Buy Now</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default BubbleComponent
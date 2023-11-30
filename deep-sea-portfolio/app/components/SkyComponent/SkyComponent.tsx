import React, { CSSProperties } from 'react'
import Styles from './SkyComponent.module.css'
import Image from 'next/image'
import Wave, { WaveOptions } from "react-wavify"
const SkyComponent = () => {
  
  const waveOptions: WaveOptions = {
    height: 30,
    amplitude: 30,
    speed: 0.15,
    points: 3
  }
  const waveStyle: CSSProperties = {
    display: 'block',
    position: 'absolute',
    marginBottom: '-1px',
    bottom: '0',
  }

  return (
    <div className="skyBanner min-h-screen relative">
    <div className='sm:text-8xl text-4xl text-center'>
      Arsenio Techs
    </div>
    <div className='sm:text-5xl text-2xl text-center'>
      a React Project
    </div>
    <div>
    <Wave fill="url(#gradient)"
              paused={false}
              style={waveStyle }
              options={waveOptions} >
              <defs>
                <linearGradient id="gradient" gradientTransform="rotate(90)">
                  <stop offset="10%" stopColor="#1eabd4" />
                  <stop offset="90%" stopColor="rgba(0,128,165,1)" />
                </linearGradient>
              </defs>
            </Wave>
    </div>
    </div>
  )
}


export default SkyComponent
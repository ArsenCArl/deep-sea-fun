import React, { CSSProperties } from 'react'
import './SkyComponent.css'
import Wave from "react-wavify"
const SkyComponent = () => {

  //The main wavify interface was not public but i made it so! 
  //this is so i can extract the prop into a const
  //If this was to give any amount of trouble another solution may be just creating our own interface of wave options
  const waveStyle: CSSProperties = { 
    display: 'block',
    position: 'absolute',
    marginBottom: '-1px',
    bottom: '0',
  }

  return (
    <div className="skyBanner min-h-screen relative">
    <div className='sm:text-8xl text-7xl text-center'>
      Arsenio Techs
    </div>
    <div className='sm:text-5xl text-3xl text-center'>
      a React Project
    </div>
    <div>
    <Wave fill="url(#gradient)"
              paused={false}
              style={waveStyle }
              options={{ 
                height: 30,
                amplitude: 30,
                speed: 0.15,
                points: 3
              }} >
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
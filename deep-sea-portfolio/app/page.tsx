'use client'
import { AnimatePresence, MotionConfig, motion, useScroll } from "framer-motion"
import { CSSProperties, useRef } from "react"
import SkyComponent from "./components/SkyComponent/SkyComponent"
import SeaComponent from "./components/SeaComponent/SeaComponent"
import FooterComponent from "./components/FooterComponent/FooterComponent"
import Wave, { WaveOptions } from "react-wavify"

export default function Home() {

  const waveOptions: WaveOptions = {
    height: 30,
    amplitude: 30,
    speed: 0.15,
    points: 3
  }
  const waveStyle: CSSProperties = {
    display: 'block',
    marginBottom: '-1px',
    height: '101%'
  }

  return (
    <MotionConfig transition={{ duration: 3 }}>

      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>

        <main className="generalGrid  bg-sky-200">
          <div className="skyDiv h-full">
            <SkyComponent></SkyComponent>
          </div>
          <div className="waveDiv ">
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
          <div className="seaDiv h-full">
            <SeaComponent></SeaComponent>
          </div>
          <div className="footDiv h-full">
            <FooterComponent></FooterComponent>
          </div>
        </main>
      </motion.div>
    </MotionConfig>

  )
}

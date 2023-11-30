'use client'
import { AnimatePresence, MotionConfig, motion, useScroll } from "framer-motion"
import { CSSProperties, useRef } from "react"
import SkyComponent from "./components/SkyComponent/SkyComponent"
import SeaComponent from "./components/SeaComponent/SeaComponent"
import FooterComponent from "./components/FooterComponent/FooterComponent"
import Wave, { WaveOptions } from "react-wavify"

export default function Home() {



  return (
    <MotionConfig transition={{ duration: 3 }}>

      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>

        <main className="generalGrid  bg-sky-200">
          <div className="skyDiv h-full">
            <SkyComponent></SkyComponent>
          </div>
          <div className="waveDiv ">

          </div>
          <div className="seaDiv">
            <SeaComponent></SeaComponent>
          </div>
          <div className="footDiv">
            <FooterComponent></FooterComponent>
          </div>
        </main>
      </motion.div>
    </MotionConfig>

  )
}

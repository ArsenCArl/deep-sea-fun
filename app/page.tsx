'use client' // Because of framer motion we load this page in client side
import {MotionConfig, motion } from "framer-motion"
import SkyComponent from "./components/SkyComponent/SkyComponent"
import SeaComponent from "./components/SeaComponent/SeaComponent"
import FooterComponent from "./components/FooterComponent/FooterComponent"
import 'regenerator-runtime/runtime'



// The main page of the project is basically the three main components combined together as designing it this way
// would make it be easier to understand and create a better separation of concerns, in this case this components
// are mostly not meant to be reused but could be and should work as standalone pieces.
// As an added extra those components can be loaded on the server!
export default function Home() {


// Motion Config and motion div to add a fade-in effect every time we load the main page
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

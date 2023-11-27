'use client'
import { motion, useScroll } from "framer-motion"
import BubbleComponent from "./components/BubbleComponent/BubbleComponent"
import { useRef } from "react"
import SkyComponent from "./components/SkyComponent/SkyComponent"
import SeaComponent from "./components/SeaComponent/SeaComponent"
import Wave from "react-wavify"

export default function Home() {
  
  return (
    <main className="flex min-h-screen flex-col items-center justify-between bg-sky-200">
      <SkyComponent></SkyComponent>
      <SeaComponent></SeaComponent> 
    </main>
  )
}

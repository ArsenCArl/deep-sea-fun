import type { Metadata } from 'next'
import './globals.css'
import './components/BubbleComponent/BubbleComponent.css'
import localFont  from 'next/font/local'
import { AnimatePresence, motion } from 'framer-motion'

const myFont = localFont({
  src : './OpenDyslexic-Regular.otf',
})

export const metadata: Metadata = {
  title: 'Arsen Sea Adventure',
  description: 'React Showcase and portfolio',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      
        <body className={`${myFont.className}`}>{children}</body>

    </html>
  )
}

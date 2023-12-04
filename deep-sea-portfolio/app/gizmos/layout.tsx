import React from 'react'
import { gizmo } from '../tsInterfaces/gizmosData'
import Link from 'next/link'


const GizmoLayout = 
({children} : { children: React.ReactNode}) => {
  return (

    <div className='oceanBg flex flex-col items-center min-h-screen'>
      <div className='flex flex-row min-w-full'>
        <div className='logo'>Logo</div>
        <div className='gizmoTittle grow text-center text-6xl'>Gizmo Labs</div>
        <div className='bubbleBack'> 
        <Link href='/'>Back</Link>
        </div>
      </div>
      <div className='mb-20 text-3xl'>placeholder</div>
      <div className='bg-slate-600 w-56 min-h-screen m-12'>
        {children}
      </div>

      
      </div>
  )
}

export default GizmoLayout
import React from 'react'
import Link from 'next/link'
import { XMarkIcon } from '@heroicons/react/24/solid'


const GizmoLayout = 
({children} : { children: React.ReactNode}) => {
  return (

    <div className='oceanBg flex flex-col items-center min-h-screen'>
      <div className='flex flex-row min-w-full mt-4'>
        <div className='logo'>Logo</div>
        <div className='gizmoTittle grow text-center text-6xl'>Gizmo Labs</div>
        <div className='bubbleEffect bubbleShape text-center text flex items-center p-6 mr-2'> 
        <Link href='/'><XMarkIcon className='h-6 w-6 hover:text-slate-600'></XMarkIcon></Link>
        </div>
      </div>
      <div className='mb-20 text-3xl'>placeholder</div>
      <div className='bubbleEffect rounded-lg w-56 min-h-screen m-12'>
        {children}
      </div>

      
      </div>
  )
}

export default GizmoLayout
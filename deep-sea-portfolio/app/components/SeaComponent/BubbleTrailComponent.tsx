import React from 'react'
import BubbleComponent from '../BubbleComponent/BubbleComponent'
import { gizmo, gizmoList } from '@/app/utils/gizmosData'
import Image from 'next/image'


const BubbleTrailComponent = () => {
    const gizmosList : gizmo[] = gizmoList
    const imgUrl : string = '/chest.png'
    return (
        <div className='flex flex-col '>
        {gizmosList.map((gizmo,index) => (
          <BubbleComponent key={gizmo.id} route={gizmo.pageUrl} align={index%2 === 0 ? 'Left' : 'Right'} placeholder={gizmo.placeholder}></BubbleComponent>
        ))}
        <Image className='Left' src={imgUrl} width={200} height={200} alt='treasure chest that leads to project section'>
        </Image>
        </div>
    )
}

export default BubbleTrailComponent
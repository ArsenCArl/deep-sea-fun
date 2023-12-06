import React from 'react'
import BubbleComponent from '../BubbleComponent/BubbleComponent'
import { gizmo, gizmoList } from '@/app/utils/gizmosData'


const BubbleTrailComponent = () => {
    const gizmosList : gizmo[] = gizmoList
    return (
        <>
        {gizmosList.map((gizmo,index) => (
          <BubbleComponent key={gizmo.id} route={gizmo.pageUrl} align={index%2 === 0 ? 'Left' : 'Right'}></BubbleComponent>
        ))}
        </>
    )
}

export default BubbleTrailComponent
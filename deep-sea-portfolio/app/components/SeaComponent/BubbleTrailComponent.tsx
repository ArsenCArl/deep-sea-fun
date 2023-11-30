import React from 'react'
import BubbleComponent from '../BubbleComponent/BubbleComponent'

const BubbleTrailComponent = () => {
    return (
        <>
            <div className='coupledBubble'>
                    <BubbleComponent route=''></BubbleComponent>
                <div className='decorBubble'>

                </div>
            </div>
            <div className='coupledBubble'>
                    <BubbleComponent route=''></BubbleComponent>
                <div className='decorBubble'>

                </div>
            </div>
        </>
    )
}

export default BubbleTrailComponent
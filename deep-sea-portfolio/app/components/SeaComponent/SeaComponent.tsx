
import React from 'react'
import BubbleComponent from '../BubbleComponent/BubbleComponent'
import Wave from 'react-wavify'
import BubbleTrailComponent from './BubbleTrailComponent'

const SeaComponent = () => {
    return (
        <div className='relative seaGrid'>
            <div className='topSea'>

            </div>
            <div className='middleSea selectSea min-h-screen flex flex-col items-center'>
                <BubbleTrailComponent>

                </BubbleTrailComponent>
            </div>
            <div className='seaBed min-h-screen'>
                <div className='bedBg'></div>
                <div className='bedBg'></div>

            </div>
        </div>


    )
}

export default SeaComponent
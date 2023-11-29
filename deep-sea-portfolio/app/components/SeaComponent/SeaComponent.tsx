
import React from 'react'
import BubbleComponent from '../BubbleComponent/BubbleComponent'
import Wave from 'react-wavify'

const SeaComponent = () => {
    return (
        <div className='h-fulls relative'>
            <div className='oceanTopLayer grid grid-cols-5 overlap'></div>
            <div className="text-8xl grid grid-cols-5 oceanBg ">
                <div>
                </div>
                <div>
                    <BubbleComponent route='/under' ></BubbleComponent>
                </div>
                <div>
                </div>
                <div>
                </div>
                <div>
                </div>
            </div>
        </div>


    )
}

export default SeaComponent
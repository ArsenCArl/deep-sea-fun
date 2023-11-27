import React from 'react'
import BubbleComponent from '../BubbleComponent/BubbleComponent'
import Wave from 'react-wavify'

const SeaComponent = () => {
  return (
        <div className=' min-h-full min-w-full  '>
          <Wave fill='#015871'
              paused={false}
              style={{ display: 'flex' }}
              options={{
                  height: 20,
                  amplitude: 20,
                  speed: 0.15,
                  points: 3
              }} />
     <div className="text-8xl grid grid-cols-5 oceanBg">
              <div>
              </div>
              <div>
                  <BubbleComponent></BubbleComponent>
              </div>
              <div>
              </div>
              <div>
                  <BubbleComponent></BubbleComponent>
              </div>
              <div>
              </div>
          </div>
          </div>

  
  )
}

export default SeaComponent
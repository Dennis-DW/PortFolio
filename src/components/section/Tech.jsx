import React from 'react'
// import { BallCanvas } from '../canvas'
import { SectionWrapper } from '../../hoc'
// import { technologies } from '../../constants'
import Preview from '../ui/parallax-floating-demo'

const Tech = () => {
  return (
    <div
      className='flex flex-row flex-wrap justify-center gap-10'
    >
    <Preview/>
    </div>
  )
}

export default SectionWrapper(Tech, "")

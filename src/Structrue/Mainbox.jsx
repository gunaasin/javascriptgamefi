import React from 'react'
import { Leftbox } from './Leftbox'
import { Rightbox } from './Rightbox'

export const Mainbox = (prop) => {
  return (
    <div className='main-box'>
        <Leftbox name={prop.name} steps={prop.steps} game={prop.game} />
        <Rightbox answer={prop.answer}   codesnip={prop.codesnip}/>
    </div>
  )
}

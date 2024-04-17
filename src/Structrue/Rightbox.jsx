import React from 'react'
import Output from '../components/Output'
import CodeEditor from '../components/CodeEditor'

export const Rightbox = (prop) => {
  return (
    <div className='rightbox'>
        <div className="terminal">
            <CodeEditor answer={prop.answer}   codesnip={prop.codesnip}/>
        </div>
        <div className="console"></div>
    </div>
  )
}

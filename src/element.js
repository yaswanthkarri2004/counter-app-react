import { useState } from 'react'
import './element.css'
function Element(){
    let [c,update] = useState(0)
       return(
        <>
        <h1>Counter App in <code>react</code></h1>
        <div className="wrapper">
            <button className='plus' onClick={
                ()=>update(++c)
                } > + </button>
            <p className='counter'>{c}</p>
            <button className='minus' disabled={c===0} onClick={
                ()=>update(--c)
            }> - </button>
        </div>
        </>
       ) 
}

export default Element
import React, { useContext } from 'react'
import {context} from '../Context/context'
import Card from './Card'
export default function Pag6() {
  const {netflix_data}=useContext(context)

  return (
    <div className='page6'>
      <div>
        <h1 className='page6_heading'>Frequently Asked Questions</h1>
      </div>
      <div className='page6_container'>
      { netflix_data.map((data)=>{
      return <Card data={data}/>
     })}
      </div>
   
    </div>
  )
}

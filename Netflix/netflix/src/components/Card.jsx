import React from 'react'
import { GoPlus } from "react-icons/go";
export default function Card({data}) {
  return (
    <div className='card'>
      <div>{data.question}</div>
      <div><GoPlus fontSize={"34px"}/></div>
    </div>
  )
}

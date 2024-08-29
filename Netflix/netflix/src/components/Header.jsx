import React from 'react'
import './Styling.css'
import { MdOutlineTranslate } from "react-icons/md";
export default function Header() {
  return (
      <>
    <div className='header'>
      <div className='imgs'><img src="logo.svg" alt="logo"/></div>
      <div className='header_sidebar'>
        <div><button className='btn1'><MdOutlineTranslate />English</button></div>
        <div><button className='btn2'>Sign In</button></div>
      </div>
    </div>
      </>
  )
}

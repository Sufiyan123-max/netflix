import React from 'react'
import './Styling.css'
import Header from './Header'
import { MdKeyboardArrowRight } from "react-icons/md";
export default function Page1() {
  return (
    <div className='netflix_back'>
      <div className="black_bg"></div>
      <div><Header/></div>
      <div className='content'>
        <div><h1 className='content_heading'>Unlimited movies, TV shows and more</h1></div>
        <div><p className='content_para1'>watch anywhere. Cancel anytime.</p></div>
        <div><p className='content_para2'>Ready to watch? Enter your email to create or restart your membership.</p></div>
        <div className='content_get'>
            <div className='input_tag'><input type="text" placeholder='Email address'/></div>
            <div><button className='input_btn'>Get Started <MdKeyboardArrowRight fontSize={"2svw"}/></button></div>
        </div>
      </div>
      <div className="seperation"></div>
    </div>
  )
}

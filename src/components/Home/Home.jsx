import React from 'react'
import { useState,useEffect } from "react";
import { motion, useAnimationControls } from "framer-motion"
const Home = ({wagmi, toggleWagmi}) => {
    console.log(wagmi, "toggleWagmi")
    const controls = useAnimationControls()

  return (
    <div className="home">
        <div className="homeContainer">
        <div className='wojakSection'>
         <motion.span className="homeImgSpan"  
          animate={controls}
          whileInView={{
            rotate: [0, 5, -5, 5, 0],
                     rotateY: 360,
                     y: [0,-5,0],
                     transition: {
                         duration: 1,
                         ease: "easeInOut",
                         delay: 0
                     }}}
     > {wagmi ?  <img src="/images/wagmiWojak.png" className="homeImg"   /> : <img src="/images/brokeWojak.png" className="homeImg"   /> }</motion.span>
        <div className="homeButtons">
            <button className='button' onClick={()=> {toggleWagmi(false);  controls.stop();
                            controls.set({
                                rotate: 0,
                                rotateY: 0,
                                y: 0,
                            }); controls.start({
            rotate: [0, -5, 5, -5, 0],
                     rotateY: 360,
                     y: [0,-5,0],
                     transition: {
                         duration: 1,
                         ease: "easeInOut",
                         delay: 0
                     }})}}>
                Stay Broke
            </button>
            <button className='button' onClick={() => {toggleWagmi(true);   controls.stop();
                            controls.set({
                                rotate: 0,
                                rotateY: 0,
                                y: 0,
                            }); controls.start({
            rotate: [0, 5, -5, 5, 0],
                     rotateY: 360,
                     y: [0,-5,0],
                     transition: {
                         duration: 1,
                         ease: "easeInOut",
                         delay: 0
                     }})}}>
                WAGMI
            </button>
        </div>
        </div>
        <div className='homeInfo'>
            {"orem Ipsum is simply dummy text of the printing and typesetting industry.orem Ipsum is simply dummy text of the printing and typesetting industry.orem Ipsum is simply dummy text of the printing and typesetting industry.orem Ipsum is simply dummy text of the printing and typesetting industry.orem Ipsum is simply dummy text of the printing and typesetting industry.orem Ipsum is simply dummy text of the printing and typesetting industry."}
        </div>
        </div>
        <div className='wrapperSlider'>
        <div className='slider'>
           <div className='slide-track'>
            <div className='slide'>
            <img src="/images/sticker.png" className="homeImg"/>
            </div>
            <div className='slide'>
            <img src="/images/sticker2.png" className="homeImg"/>
            </div>
            <div className='slide'>
            <img src="/images/sticker.png" className="homeImg"/>
            </div>
            <div className='slide'>
            <img src="/images/sticker2.png" className="homeImg"/>
            </div>
            <div className='slide'>
            <img src="/images/sticker.png" className="homeImg"/>
            </div>
            <div className='slide'>
            <img src="/images/sticker2.png" className="homeImg"/>
            </div>
            <div className='slide'>
            <img src="/images/sticker.png" className="homeImg"/>
            </div>
            <div className='slide'>
            <img src="/images/sticker2.png" className="homeImg"/>
            </div>
            <div className='slide'>
            <img src="/images/sticker2.png" className="homeImg"/>
            </div>
            <div className='slide'>
            <img src="/images/sticker.png" className="homeImg"/>
            </div>
            <div className='slide'>
            <img src="/images/sticker2.png" className="homeImg"/>
            </div>
            <div className='slide'>
            <img src="/images/sticker.png" className="homeImg"/>
            </div>
            <div className='slide'>
            <img src="/images/sticker2.png" className="homeImg"/>
            </div>
            <div className='slide'>
            <img src="/images/sticker2.png" className="homeImg"/>
            </div>
            <div className='slide'>
            <img src="/images/sticker.png" className="homeImg"/>
            </div>
            <div className='slide'>
            <img src="/images/sticker2.png" className="homeImg"/>
            </div>
            <div className='slide'>
            <img src="/images/sticker.png" className="homeImg"/>
            </div>
            <div className='slide'>
            <img src="/images/sticker2.png" className="homeImg"/>
            </div>
            </div>
        </div>
        </div>
        </div>
  )
}

export default Home
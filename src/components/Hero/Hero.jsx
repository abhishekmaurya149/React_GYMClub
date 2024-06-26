import React from 'react'
import Header from '../Header/Header'
import hero_image from '../../assets/Hero_image.png';
import hero_image_back from '../../assets/Hero_image_back.png';
import Heart from '../../assets/Heart.png';
import Calories from '../../assets/Calories.png';
import { motion } from 'framer-motion';
import './Hero.css'


const Hero = () => {

  const transition = { type: 'spring', duration: 3 }

  return (
    < >
      <div className="hero">
        <div className="blur hero-blur"></div>
        <div className="left-h">
          <Header />

          <div className="the-best-ad">
            <motion.div
              initial={{ left: '238px' }}
              whileInView={{ left: '8px' }}
              transition={{ ...transition, type: 'tween' }}
            >
            </motion.div>
            <span>the best fitness club in the twon </span>
          </div>
          <div className="hero-text">
            <div>
              <span className='stroke-text'>Shape </span>
              <span>Your</span>
            </div>
            <div>
              <span>ideal body</span>
            </div>
            <div className="span">
              <span>
                In here we will help you to shape and build your  ideal body and live up your life to fullest
              </span>
            </div>
          </div>
          {/* figures */}
          <div className="figures">
            <div>
              <span>+140</span>
              <span>expert coachs</span>
            </div>
            <div>
              <span>+978</span>
              <span>members joined</span>
            </div>
            <div>
              <span>+50</span>
              <span>fitness programs</span>
            </div>
          </div>
          {/* hero buttons */}
          <div className="hero-buttons">
            <buttons className="btn">Get Started</buttons>
            <buttons className="btn">Learn More</buttons>
          </div>
        </div>

        {/* Right Side */}
        <div className="right-h">
          <buttons className="btn">Join Now</buttons>

          <motion.div
            initial={{ right: '-1rem' }}
            whileInView={{ right: '4rem' }}
            transition={transition}
            className="heart-rate">
            <img src={Heart} alt="" />
            <span>Heart Rate </span> <span>116 bpm</span>
          </motion.div>

          <img src={hero_image} alt='hero_image' className="hero-image" />
          <motion.img
            initial={{ right: '11rem' }}
            whileInView={{ right: '20rem' }}
            transition={transition}
            src={hero_image_back} alt=''
            className="hero-image-back"
          />
          {/* calories */}
          <motion.div
            initial={{ right: '37rem' }}
            whileInView={{ right: '28rem' }}
            transition={transition}
            className="calories">
            <img src={Calories} alt="callories" />
            <div>
              <span>Calories</span>
              <span>220 kcal</span>
            </div>
          </motion.div>
        </div>
      </div>
    </ >
  )
}

export default Hero

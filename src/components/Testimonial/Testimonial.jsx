import React, { useState } from 'react'
import { testimonialsData } from '../../data/testimonialsData';
import LeftArrow from '../../assets/LeftArrow.png';
import RightArrow from '../../assets/RightArrow.png';
import { motion } from 'framer-motion';
import './Testimonial.css';

const Testimonial = () => {

    
    const [selected, setSelected] = useState(0);
    const tLength = testimonialsData.length;

    const transition = { type: 'spring', duration: 3 }

    return (
        <>
            <div className="Testimonials">
                <div className="left-t">
                    <span>Testimonials</span>
                    <span className='stroke-text'>What they</span>
                    <span>say about us</span>
                    <span>
                        {testimonialsData[selected].review}
                    </span>
                    <span>
                        <span style={{color:'var(--orange)'}}>
                            {testimonialsData[selected].name}
                        </span>{" "}
                        - {testimonialsData[selected].status}
                    </span>
                </div>

                <div className="right-t">
                <motion.div
              initial={{ opacity:0, x: -100 }}
              whileInView={{ opacity:1, x: 0}}
              transition={{ ...transition, duration:2 }}
            >
            </motion.div>

            <motion.div
              initial={{ opacity:0, x: 100 }}
              whileInView={{ opacity:1, x: 0}}
              transition={{ ...transition, duration:2 }}
            >
            </motion.div>

                    <img className='img' src={testimonialsData[selected].image} alt="" />

                    <div className="arrows">
                        <img 
                        onClick={()=>{
                            selected === 0 
                            ? setSelected(tLength-1) 
                            : setSelected((prev)=>prev-1);
                        }}
                        src={LeftArrow} alt="" />
                        <img 
                        onClick={()=>{
                            selected === tLength -1 
                            ? setSelected(0) 
                            : setSelected((prev)=>prev+1);
                        }}
                        src={RightArrow} alt="" />
                    </div>
                </div>
            </div>
        </>
    )
}

export default Testimonial

import React from 'react'
import Image1 from '../../assets/Image1.png';
import Image2 from '../../assets/Image2.png';
import Image3 from '../../assets/Image3.png';
import Image4 from '../../assets/Image4.png';
import Nb from '../../assets/Nb.png';
import Adidas from '../../assets/Adidas.png';
import Nike from '../../assets/Nike.png';
import Tick from '../../assets/Tick.png';
import './Reasons.css'


const Reasons = () => {
    return (
        <>
            <div className="Reasons" id='reasons'>
                <div className="left-r">
                    <img src={Image1} alt="" />
                    <img src={Image2} alt="" />
                    <img src={Image3} alt="" />
                    <img src={Image4} alt="" />
                </div>

                <div className="right-r">
                    <span>some reasons</span>
                    <div className="">
                        <span className='stroke-text'>why</span>
                        <span>choose us?</span>
                    </div>

                    <div className='details-r'>
                        <div>
                            <img src={Tick} alt=""></img>
                            <span>OVER 140+ EXPERT COACHS</span>
                        </div>
                        <div>
                            <img src={Tick} alt="" />
                            <span>TRAIN SMARTER AND FASTER THAN BEFORE</span>
                        </div>
                        <div>
                            <img src={Tick} alt="" />
                            <span>1 FREE PROGRAM FOR NEW MEMBER</span>
                        </div>
                        <div>
                            <img src={Tick} alt="" />
                            <span>RELIABLE PARTNERS</span>
                        </div>


                        <span
                            style={{

                                color: "var(--gray",
                                fontWeight: "normal"
                            }}
                        >
                            OUR PARTNERS
                        </span>
                        <div className="partners">
                            <img src={Nb} alt="" />
                            <img src={Adidas} alt="" />
                            <img src={Nike} alt="" />
                        </div>

                    </div>
                </div>
            </div>
        </>
    )
}

export default Reasons

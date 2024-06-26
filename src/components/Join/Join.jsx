import React from 'react'
// import emailjs from '@emailjs/browser'
import './Join.css';

const Join = () => {

    // const form = useRef();
    return (
        <>
            <div className="Join" id='join-us'>
                <div className="left-j">
                    <div>
                        <hr />
                        <span className='stroke-text'>READY TO</span>
                        <span>lEVEL UP</span>
                    </div>
                    <div>
                        <span>YOUR BODY</span>
                        <span className='stroke-text'>WITH US?</span>
                    </div>
                </div>
                <div className="right-j">
                    <form className='email-container' action="" >
                        <input type="email" name='user_email' placeholder='Enter your Email address' />
                        <button className='btn btn-j'>Join Now</button>
                    </form>
                </div>
            </div>
        </>
    )
}

export default Join

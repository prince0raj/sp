import React, { useRef, useState } from 'react';
import emailjs from 'emailjs-com'
import {FcApproval} from 'react-icons/fc'

const Contact=()=>{
    const form = useRef();
    const [value,setvalue] =useState("false");
    
    const sendEmail = (e) => {
      e.preventDefault();
      
      emailjs.sendForm('service_nsaomjc', 'template_hxhdos8', form.current, 'qnPXMgjhsU_XxY9Ft')
        .then((result) => {
            console.log(result.text);
        }, (error) => {
            console.log(error.text);
        });
       setvalue("true");
        e.target.reset();
    };
    setTimeout(()=>{
        setvalue("false")
    },10000)

    return(<>
    <section id="contact" onSubmit={sendEmail}>
        <div className="sucessfull" style={value==="true"?{"opacity": "1","visibility":"visible","transition":"0.4s all ease"}:{}}>
           <FcApproval/><span>successfully submitted</span> <button className='cut' onClick={()=>{
            setvalue("false")
           }}>X</button>
        </div>
         <form ref={form}>
            <input required type="text" name="name"placeholder='Enter Your name' />
            <input required type="email" name='email' placeholder='Enter your email' />
            <textarea required name="message" id=""  rows="7" placeholder='Your message'></textarea>
            <button type='submit' className='btn_send'>Send message</button>
         </form>
    </section>
    </>)
}
export default Contact
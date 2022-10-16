import React from "react";
import {BsCheck2Circle} from 'react-icons/bs'

const Banner_card=(prop)=>{
    return(<>
       <div className="box">
                    <div className="img">
                        <img src={prop.image} alt="" />
                    </div>
                    <div className="data">
                        <div className="Card_text">
                        <a target="_blank" rel="noreferrer" href={prop.link}><p>{prop.tittle}</p>
                        </a>
                        <div className="card_line">
                        <p >{prop.cname}<span>last date : {prop.date}</span></p>
                        <a target="_blank" rel="noreferrer" href={prop.link}><BsCheck2Circle/></a>
                        </div>
                        </div>
                    </div>
        </div>
    </>)
}

export default Banner_card;
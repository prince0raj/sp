import React from "react";
import Banner_card from "../Banner_card";
import Hackthon from './Hackthon'
import web from '../images/Hackthon.png'
import Hackthon_data from "./Hackthon_data";


const Hackthonpage = () => {
    return (<>
        <section id="page">
            <div className="page_head">
            <Banner_card image={web} date={Hackthon_data[0].date} cname={Hackthon_data[0].cname} tittle={Hackthon_data[0].tittle} link={Hackthon_data[0].link}/>
            <Banner_card image={web} date={Hackthon_data[2].date} cname={Hackthon_data[2].cname} tittle={Hackthon_data[2].tittle} link={Hackthon_data[2].link}/>
            <Banner_card image={web} date={Hackthon_data[1].date} cname={Hackthon_data[1].cname} tittle={Hackthon_data[1].tittle} link={Hackthon_data[1].link}/>
            </div>
            <div className="page_data">
                <Hackthon/>
            </div>
        </section>
    </>)
}

export default Hackthonpage;
import React from "react";
import Banner_card from "../Banner_card";
import coding from '../images/coding.png'
import Contest from './Contest'
import Contest_data from "./Contest_data";

const Contestpage = () => {
    return (<>
        <section id="page">
            <div className="page_head">
            <Banner_card image={coding} date={Contest_data[0].date} cname={Contest_data[0].cname} tittle={Contest_data[0].tittle} link={Contest_data[0].link}/>
            <Banner_card image={coding} date={Contest_data[1].date} cname={Contest_data[1].cname} tittle={Contest_data[1].tittle} link={Contest_data[1].link}/>
            <Banner_card image={coding} date={Contest_data[2].date} cname={Contest_data[2].cname} tittle={Contest_data[2].tittle} link={Contest_data[2].link}/>
            </div>
            <div className="page_data">
                <Contest/>
            </div>
        </section>
    </>)
}

export default Contestpage;
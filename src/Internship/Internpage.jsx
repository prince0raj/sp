import React from "react";
import Banner_card from "../Banner_card";
import web from '../images/INTERNSHIP.png'
import Internship_data from './Internship_data'
import Internship from "./Internship"
import internship from '../images/INTERNSHIP.png'



const Internpage = () => {
    return (<>
        <section id="page">
            <div className="page_head">
            <Banner_card image={internship} date={Internship_data[1].date} cname={Internship_data[1].cname} tittle={Internship_data[1].tittle} link={Internship_data[1].link}/>
            <Banner_card image={internship} date={Internship_data[0].date} cname={Internship_data[0].cname} tittle={Internship_data[0].tittle} link={Internship_data[0].link}/>
            <Banner_card image={internship} date={Internship_data[2].date} cname={Internship_data[2].cname} tittle={Internship_data[2].tittle} link={Internship_data[2].link}/>
            </div>
            <div className="page_data">
                <Internship/>
            </div>
        </section>
    </>)
}

export default Internpage;
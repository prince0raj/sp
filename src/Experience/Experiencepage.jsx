import React from "react";
import Banner_card from "../Banner_card";
import experience from '../images/experience.jpeg'
// import Fresser from './Fresser'
import Experience from './Experience'
import Expreience_data from './Experience_data'



const Experience_page = () => {
    return (<>
        <section id="page">
            <div className="page_head">
            <Banner_card image={experience} date={Expreience_data[0].date} cname={Expreience_data[0].cname} tittle={Expreience_data[0].tittle} link={Expreience_data[0].link}/>
            <Banner_card image={experience} date={Expreience_data[2].date} cname={Expreience_data[2].cname} tittle={Expreience_data[2].tittle} link={Expreience_data[2].link}/>
            <Banner_card image={experience} date={Expreience_data[1].date} cname={Expreience_data[1].cname} tittle={Expreience_data[1].tittle} link={Expreience_data[1].link}/>
            </div>
            <div className="page_data">
                {/* <Fresser/> */}
                <Experience/>
            </div>
        </section>
    </>)
}

export default Experience_page;
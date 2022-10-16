import React from "react";
import Banner_card from "../Banner_card";
// import experience from '../images/experience.jpeg'
import fresser from '../images/fresser.png'
import Fresser from './Fresser'
// import Experience from '../Experience/Experience'
// import Expreience_data from '../Experience/Experience_data'
import Home_fresser_data from './Fresser_data'



const jobpage = () => {
    return (<>
        <section id="page">
            <div className="page_head">
            <Banner_card image={fresser} date={Home_fresser_data[1].date} cname={Home_fresser_data[1].cname} tittle={Home_fresser_data[1].tittle} link={Home_fresser_data[1].link} />
            <Banner_card image={fresser} date={Home_fresser_data[2].date} cname={Home_fresser_data[2].cname} tittle={Home_fresser_data[2].tittle} link={Home_fresser_data[2].link} />
            <Banner_card image={fresser} date={Home_fresser_data[0].date} cname={Home_fresser_data[0].cname} tittle={Home_fresser_data[0].tittle} link={Home_fresser_data[0].link} />
            </div>
            <div className="page_data">
                <Fresser/>
                {/* <Experience/> */}
            </div>
        </section>
    </>)
}

export default jobpage;
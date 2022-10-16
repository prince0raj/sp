import React  from 'react'
import banner from './images/banner_final.png'
import Banner_card from './Banner_card'
import strange from './images/strange.gif'
import over_strange from './images/over strange.gif'

import internship from './images/INTERNSHIP.png'
import coding from './images/coding.png'
import Hackthon from './images/Hackthon.png'
import experience from './images/experience.jpeg'
import fresser from './images/fresser.png'


import Internship_data from './Internship/Internship_data'
import Home_fresser_data from './Fresser/Home_fresser_data'
import Expreience_data from './Experience/Experience_data'
import Contest from './Contest/Contest_data'
import Hackthon_data from './Hackthon/Hackthon_data'


const Head=()=>{
      return(<>
          <section id="head">
            <div className="banner">
                <img src={banner} alt={banner} />
                <div className="gif">
                <img src={strange} alt="" />
                <img src={over_strange} alt="" style={{"position":"absolute"}} />
                </div>
            </div>
            <div className="card_boxes">
                <div className="first_row">
                <Banner_card image={Hackthon} date={Hackthon_data[0].date} cname={Hackthon_data[0].cname} tittle={Hackthon_data[0].tittle} link={Hackthon_data[0].link}/>
                <Banner_card image={internship} date={Internship_data[0].date} cname={Internship_data[0].cname} tittle={Internship_data[0].tittle} link={Internship_data[0].link}/>
                </div>
                <div className="second_row">
                <Banner_card image={fresser} date={Home_fresser_data[0].date} cname={Home_fresser_data[0].cname} tittle={Home_fresser_data[0].tittle} link={Home_fresser_data[0].link} />
                <Banner_card image={experience} date={Expreience_data[0].date} cname={Expreience_data[0].cname} tittle={Expreience_data[0].tittle} link={Expreience_data[0].link}/>
                <Banner_card image={coding} date={Contest[0].date} cname={Contest[0].cname} tittle={Contest[0].tittle} link={Contest[0].link}/>
                </div>
            </div>
          </section>
      </>)
}

export default Head;
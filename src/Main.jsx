import React from "react";
import Expreience from "./Experience/Home_experience";
import Fresser from "./Fresser/Home_fresser";
import Contest from "./Contest/Home_contest";
import Hackthon from "./Hackthon/Home_hackthon";
import Internship from "./Internship/Home_internship";
const Main=()=>{
    return(<>
            <section id="Main">
                <Internship/>
                <Fresser/>
                <Expreience/>
                <Contest/>
                <Hackthon/>
            </section>
    </>)
}
export default Main;
import React from "react";
import { Link } from "react-router-dom";
import List from "../List";
import Fresser_data from './Home_fresser_data'

const Fresser=()=>{
    return(<>
       <div className="data_box">
                    <h2>Fresher</h2>
                    <div className="data_list">
                    {
                      Fresser_data.map((value,ind)=>{
                        return(
                        <List key={ind} link={value.link} date={value.date} c_name={value.cname} icons={value.icons} feature="Apply" tittle={value.tittle}/>
                      );})
                    }
                    </div>
                    <div className="more">
                      <Link to="/job">Read more</Link>
                    </div>
                </div>
    </>)
}
export default Fresser;
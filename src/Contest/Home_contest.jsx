import React from "react";
import List from "../List";
import Contest_data from './Home_contest_data'
import { Link } from "react-router-dom";

const Contest=()=>{
    return(<>
       <div className="data_box">
                    <h2>Contests</h2>
                    <div className="data_list">
                    {
                      Contest_data.map((value,ind)=>{
                        return(
                        <List key={ind} link={value.link} date={value.date} c_name={value.cname} icons={value.icons} feature="compete" tittle={value.tittle}/>
                      );})
                    }
                    </div>
                    <div className="more">
                      <Link to="/contest">Read more</Link>
                    </div>
                </div>
    </>)
}
export default Contest;
import React from "react";
import List from "../List";
import Hackthon_data from './Hackthon_data'

const Hackthon=()=>{
    return(<>
       <div className="data_box">
                    <h2>Hackathon</h2>
                    <div className="data_list">
                    {
                      Hackthon_data.map((value,ind)=>{
                        return(
                        <List key={ind} link={value.link} date={value.date} c_name={value.cname} icons={value.icons} feature="Register" tittle={value.tittle}/>
                      );})
                    }
                    </div>
                </div>
    </>)
}
export default Hackthon;
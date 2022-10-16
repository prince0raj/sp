import React from "react";
import List from "../List";
import Experience_data from './Experience_data'

const Expreience=()=>{
    return(<>
       <div className="data_box">
                    <h2>Expreienced</h2>
                    <div className="data_list">
                    {
                      Experience_data.map((value,ind)=>{
                        return(
                        <List key={ind} link={value.link} date={value.date} c_name={value.cname} icons={value.icons} feature="Apply" tittle={value.tittle}/>
                      );})
                    }
                    </div>
                </div>
    </>)
}
export default Expreience;
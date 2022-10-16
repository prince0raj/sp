import React from "react";
import List from "../List";
import Contest_data from './Contest_data'

const Contest=()=>{
    return(<>
       <div className="data_box">
                    <h2>Contests</h2>
                    <div className="data_list">
                    {
                      Contest_data.map((value,ind)=>{
                        return(
                        <List key={ind} link={value.link} date={value.date} c_name={value.cname} icons={value.icons} feature="Compete" tittle={value.tittle}/>
                      );})
                    }
                    </div>
                </div>
    </>)
}
export default Contest;
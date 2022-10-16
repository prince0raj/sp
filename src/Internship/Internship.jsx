import React from "react";
import List from "../List";
import Internship_data from './Internship_data'

const Internship = () => {
  return (<>
    <div className="data_box">
      <h2>Internship</h2>
      <div className="data_list">
        {
          Internship_data.map((value, ind) => {
            return (
              <List key={ind} link={value.link} date={value.date} c_name={value.cname} icons={value.icons} feature="Apply" tittle={value.tittle} />
            );
          })
        }
      </div>

    </div>
  </>)
}
export default Internship;
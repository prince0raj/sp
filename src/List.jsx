import React from "react";

const List=(prop)=>{
    return(<>
    <div className="list_of_list">
         <div className="icons">
            <img src={prop.icons} alt="" />
         </div>
         <div className="list_text">
        <div>
            <h3><a target="_blank" rel="noreferrer" href={prop.link}>{prop.tittle}</a></h3>
            <p className="company_name">
               {prop.c_name} <span>last date : {prop.date}</span>
            </p>
         </div>
         <a target="_blank" rel="noreferrer" className="btn" href={prop.link}>{prop.feature}</a>
         </div>
    </div>
    </>)
}
export default List;
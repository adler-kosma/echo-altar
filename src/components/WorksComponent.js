import React from "react";
import Link from "./Link";

function WorksComponent({projectName, durata, format, link, linkName, description}) {
  return (
    <div>
        <div className="text-header" style={{marginLeft: "30px", top: "5px", fontSize: "1.5vw"}} >{projectName}</div>
        <p className="text-body" style={{marginLeft: "60px", top: "0px"}}>durata: {durata}</p>
        <p className="text-body" style={{marginLeft: "60px", top: "0px"}}>format: {format}</p>  
        <p className="text-body" style={{marginLeft: "60px", top: "0px"}}>description: {description}</p>    
    </div>
  );
}

export default WorksComponent;
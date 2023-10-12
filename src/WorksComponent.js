import React from "react";

function WorksComponent({projectName, durata, format, description}) {
  return (
    <div>
        <div className="text-header" >{projectName}</div>
        <p className="text-body">durata: {durata}</p>
        <p className="text-body">format: {format}</p>    
        <p className="text-body">description: {description}</p>    
    </div>
  );
}

export default WorksComponent;

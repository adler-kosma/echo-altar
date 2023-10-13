import React from "react";
import WorksComponent from "../components/WorksComponent";

function Releases() {
  return (
    <div>
      <div className="box">
      {RELEASES.map(({ year, projects }) => {
          return (
            <div>
               <p className="text-header" style={{color: "red", top: "10px"}}>{year}</p>
               {projects.map(({ projectName, durata, format, description }) => {
                return (
                    <div>
                        <WorksComponent projectName={projectName} durata={durata} format={format} description={description} />
                    </div>
                );
                })}
            </div>
          );
        })}
      </div>
    </div>
  );
}

const RELEASES = [
    {year: "2023", projects: [
        { projectName: "VOLVM 2. pieces", durata: "45'", format: "2.0"},
    ]},
    {year: "2018", projects: [
        { projectName: "VOLVM 1.turbulence", durata:"23' 22", format:"2.0", description: "1. confidence 2. nervous 3. intermission 4. save time 5. Santorini"},
    ]},
    {year: "2015", projects: [
        { projectName: "VOLVM 0.", durata:"13' 40", format: "2.0", description: "this 1 time open yourself 2 those 3 words"},
    ]}

  ];

export default Releases;

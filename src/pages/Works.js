import React from "react";
import WorksComponent from "../WorksComponent";

function Works() {
  return (
    <div>
      <div className="box">
      {INSTALLATION.map(({ year, projects }) => {
          return (
            <div>
               <p className="text-header" style={{color: "red"}}>{year}</p>
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

const INSTALLATION = [
    {year: "2023", projects: [
        { projectName: "Prey/Pray", durata: "12", format: "video with stereo sound <a href=https://signejohannessen.se/prey-pray-2023/ target='_blank'>", description: "Video work by Signe Johanessen, sound and music by Adele Kosman.</a> Exhibited at Örebro Konsthall 01.04.23 - 28.05.23 and Oslo Kunstforening 10.08.23 — 17.09.23"},
    ]},
    {year: "2022", projects: [
        { projectName: "Sound Sculpture I - Agonia", durata:"23", format: "mono", description: "<a href=https://www.wetterlinggallery.com/exhibitions/wg-project-29 target='_blank'>Exhibited in 'On The Verge' curated by Jeanette Gunnarsson and Lauren Johnson at Wetterling Gallery 06.10.22 - 05.11.22</a>In collaboration with Noa Sköldin. Ceramics by Noa Sköldin, eletronics and music by Adele Kosman."},
        { projectName: "Pumping Gas – You've Touched on More Water", durata:"Durata: 20", format: 4.0, description: " <a href=https://nevvengallery.com/exhibitions/pumping-gas-youve-touched-on-more-water/ target='_blank'>Exhibited at Nevven Gallery 10.03.22 - 17.04.22</a> <a href=https://matterof.art/2022/exhibition/ghmp-10 target='_blank'>Exhibited at Prague Biennale Matter of Art 21.07.22 - 23.10.22</a>In collaboration with Fathia Mohidin. Quadrophonic sound piece, concrete blocks, licking stone and blue light."},
    ]},
    {year: "2021", projects: [
        { projectName: "wave", durata: "Durata: 10'", format:"6.0", description: "Sound piece for installation by Fathia Mohidin. Exhibited at Luleå Biennalen"},
    ]},
    {year: "2019", projects: [
        { projectName: "Hypersea", durata: "30'", format: "2 dancers, stereo sound", description: "A collaboration with Sara Skoglund and Klara SjöblomPerformed and exhibited in Henningsvær Lofoten Norway<a href=https://youtu.be/3xbedU33AjI target='_blank'>See documentation here.</a>"},
        { projectName: "For Dancemusic You’d Emit to Formless", durata: "35'", format: "4.0", description: "Ljudbänken for Stockholm Konst"},
    ]}

  ];

export default Works;

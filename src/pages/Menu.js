import React from "react";
import About from "./About";
import Works from "./Works";

function Menu() {
  
  return (
    <div>
      <div>
          <div>
            <h1> <a ref={About}>ABOUT</a></h1>
            <h1> <a ref={Works}></a>WORKS</h1>
            <h1> <a ref={About}></a>SOUNDS</h1>
            <h1> <a ref={About}></a>WATCH</h1>
          </div>
      </div>
    </div>
  );
}

export default Menu;


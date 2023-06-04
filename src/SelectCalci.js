
// import "./stylesheets/index.css"
import "./Content.css"
import { useState } from "react";
import {VscTriangleDown} from "react-icons/vsc"
import Dropdown from 'react-bootstrap/Dropdown';
// import { Displayheader } from "./displayheader";

export default function SelectCalci(props){


  return (
    <div className="Block">
    <div className="App">

    <div className="CalciContainer">
      <a href={props.dpt+"/cgpa"}>Calculate CGPA</a>
      <a href={props.dpt+"/sgpa"}>Calculate SGPA</a>

    </div>
    </div>
    </div>





    )
}

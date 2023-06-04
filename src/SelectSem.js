
// import "./stylesheets/index.css"
import "./Content.css"
import { useState } from "react";
import {VscTriangleDown} from "react-icons/vsc"
// import Dropdown from 'react-bootstrap/Dropdown';
// import { Displayheader } from "./displayheader";

export default function SelectSem(props){


    // return(
//         <>


// {/* <Displayheader img1="./log1.png" img2="./logc.png" /> */}



// <div id="contentx">
// <Dropdown>
//       <Dropdown.Toggle id="dropdown-basic">
//         Select your Semester&nbsp;
//       </Dropdown.Toggle>

//       <Dropdown.Menu>
//       <div style={{height:"150px", overflow:"auto"}}>


// {/* change for adding cgpa */}
        
// <Dropdown.Item className="drpdnitem" href={props.dpt+"/cgpa"}>Calculate{"  "}CGPA</Dropdown.Item>

// {/* change for adding cgpa */}


//         <Dropdown.Item className="drpdnitem" href={props.dpt+"/sem1"}>Semester-1</Dropdown.Item>
//         <Dropdown.Item className="drpdnitem" href={props.dpt+"/sem2"}>Semester-2</Dropdown.Item>
//         <Dropdown.Item className="drpdnitem" href={props.dpt+"/sem3"}>Semester-3</Dropdown.Item>
//         <Dropdown.Item className="drpdnitem" href={props.dpt+"/sem4"}>Semester-4</Dropdown.Item>
//         <Dropdown.Item className="drpdnitem" href={props.dpt+"/sem5"}>Semester-5</Dropdown.Item>
//         <Dropdown.Item className="drpdnitem" href={props.dpt+"/sem6"}>Semester-6</Dropdown.Item>
//         <Dropdown.Item className="drpdnitem" href={props.dpt+"/sem7"}>Semester-7</Dropdown.Item>
//         <Dropdown.Item className="drpdnitem" href={props.dpt+"/sem8"}>Semester-8</Dropdown.Item>
        
      


        
//         </div>

//       </Dropdown.Menu>
//     </Dropdown>
// </div>

//         </>






const [dropItems, setdropItems] = useState(true);
  const [openDisplay, setopenDisplay] = useState("none");
  const dropTheItems = (e) => {
    e.preventDefault();
    if (dropItems) {
      setdropItems(false);
      setopenDisplay("flex");
    } else {
      setdropItems(true);
      setopenDisplay("none");
    }
  };
  return (
    <div className="Block">

    <div className="App">
      <div onClick={dropTheItems} className="titleBox">
        <p className="title">Select Semester <p> <VscTriangleDown /></p></p>
      </div>
      <div style={{ display: openDisplay }} className="dropItems">
        <div className="items">
          <a href={props.type+"/sem1"}>Semester - 1</a>
          <a href={props.type+"/sem2"}>Semester - 2</a>
          <a href={props.type+"/sem3"}>Semester - 3</a>
          <a href={props.type+"/sem4"}>Semester - 4</a>
          <a href={props.type+"/sem5"}>Semester - 5</a>
          <a href={props.type+"/sem6"}>Semester - 6</a>
          <a href={props.type+"/sem7"}>Semester - 7</a>
          <a href={props.type+"/sem8"}>Semester - 8</a>
          



        </div>
      </div>
      {/* <h1>fjrluif</h1> */}
    </div>
    </div>





    )
}

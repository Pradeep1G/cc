
// import "./stylesheets/index.css"
import "./Content.css"
// import Dropdown from 'react-bootstrap/Dropdown';
// import { Dropdown } from 'rsuite';
import { useState } from "react";
import {VscTriangleDown} from "react-icons/vsc"
// import { Displayheader } from "./displayheader";

export default function Selectdpt(){
    // document.getElementById("content").style.display="none";
    
    // document.getElementById("footer").style.marginTop="820px";

//     return(
//         <>


        



// <div id="content">



// <Dropdown title="Dropdown">
//     <Dropdown.Item>New File</Dropdown.Item>
//     <Dropdown.Item>New File with Current Profile</Dropdown.Item>
//     <Dropdown.Item>Download As...</Dropdown.Item>
//     <Dropdown.Item>Export PDF</Dropdown.Item>
//     <Dropdown.Item>Export HTML</Dropdown.Item>
//     <Dropdown.Item>Settings</Dropdown.Item>
//     <Dropdown.Item>About</Dropdown.Item>
//   </Dropdown>






// <Dropdown>
//       <Dropdown.Toggle id="dropdown-basic">
//         Select your Department&nbsp;
//       </Dropdown.Toggle>
//       <Dropdown.Menu>

//         <Dropdown.Item className="drpdnitem" href="/CSE">CSE</Dropdown.Item>
//         <Dropdown.Item className="drpdnitem" href="/ECE">ECE</Dropdown.Item>
//         <Dropdown.Item className="drpdnitem" href="/Civil">Civil</Dropdown.Item>
//         <Dropdown.Item className="drpdnitem" href="/MEC">MEC</Dropdown.Item>
//         <Dropdown.Item className="drpdnitem" href="/EEE">EEE</Dropdown.Item>
//         <Dropdown.Item className="drpdnitem" href="/ETCE">ETCE</Dropdown.Item>
//         <Dropdown.Item className="drpdnitem" href="/CSECS">CSE Cyber Security</Dropdown.Item>
//         <Dropdown.Item className="drpdnitem" href="/CSEAIML">CSE A I& ML</Dropdown.Item>
//         <Dropdown.Item className="drpdnitem" href="/CSEAIR">CSE AI & Robotics</Dropdown.Item>
//         <Dropdown.Item className="drpdnitem" href="/CSEBCT">CSE Block Chain</Dropdown.Item>
//         <Dropdown.Item className="drpdnitem" href="/IT">IT</Dropdown.Item>
//         <Dropdown.Item className="drpdnitem" href="/CSEAI">CSE AI</Dropdown.Item>
//         <Dropdown.Item className="drpdnitem" href="/CSEIOT">CSE IOT</Dropdown.Item>
//         <Dropdown.Item className="drpdnitem" href="/CSEDS">CSE Data Science</Dropdown.Item>

        
//       </Dropdown.Menu>
//     </Dropdown>
// </div>

//         </>
//     );



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
        <p className="title">Select Department <p> <VscTriangleDown /></p></p>
      </div>
      <div style={{ display: openDisplay }} className="dropItems">
        <div className="items">
          <a href="/CSE">CSE</a>
          <a href="/ECE">ECE</a>
          <a href="/Civil">CIVIL</a>
          <a href="/MEC">MEC</a>
          <a href="/EEE">EEE</a>
          <a href="/ETCE">ETCE</a>
          <a href="/CSECS">CSE Cyber Security</a>
          <a href="/CSEAIML">CSE AI & ML</a>
          <a href="/CSEAIR">CSE AI & Robotics</a>
          <a href="/CSEBCT">CSE Block Chain</a>
          <a href="/IT">IT</a>
          <a href="/CSEAI">CSE AI</a>
          <a href="/CSEIOT">CSE IOT</a>
          <a href="/CSEDS">CSE Data Science</a>



        </div>
      </div>
      {/* <h1>fjrluif</h1> */}
    </div>
    </div>

  );






}

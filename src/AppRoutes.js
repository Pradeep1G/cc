import { StrictMode } from 'react';
import {Routes, Route} from 'react-router-dom';
import SgpaApp from './App';
import CgpaApp from './CgpaApp';
import SelectSem from './SelectSem';
import Selectdpt from './SelectDpt';
import SelectCalci from './SelectCalci';
// import Selectdpt from './selectdpt';
// import CGPA from './CGPA';

export default function AppRoutes() {
  


  return (
    <div>
      <div>
        {/* <button onClick={navigateSem1}>SEM1</button>
        <hr />
        <button onClick={navigateSem2}>SEM2</button>
        <hr />
        <button onClick={navigateSem3}>SEM3</button>
        <hr />
        <button onClick={navigateSem4}>SEM4</button>
        <hr />
        <button onClick={navigateSem5}>SEM5</button>
        <hr />
        <button onClick={navigateSem6}>SEM6</button>
        <hr />
        <button onClick={navigateSem7}>SEM7</button>
        <hr />
        <button onClick={navigateSem8}>SEM8</button> */}

        <Routes>
          <Route path="/" element={<Selectdpt />}></Route>
          <Route path="/CSE"     element={<SelectCalci dpt="CSE"/>}/>
          <Route path="/ECE"     element={<SelectCalci dpt="ECE"/>}/>
          <Route path="/Civil"   element={<SelectCalci dpt="Civil"/>}/>
          <Route path="/MEC"     element={<SelectCalci dpt="MEC"/>}/>
          <Route path="/EEE"     element={<SelectCalci dpt="EEE"/>}/>
          <Route path="/ETCE"    element={<SelectCalci dpt="ETCE"/>}/>
          <Route path="/CSECS"   element={<SelectCalci dpt="CSECS"/>}/>
          <Route path="/CSEAIML" element={<SelectCalci dpt="CSEAIML"/>}/>
          <Route path="/CSEAIR"  element={<SelectCalci dpt="CSEAIR"/>}/>
          <Route path="/CSEBCT"  element={<SelectCalci dpt="CSEBCT"/>}/>
          <Route path="/IT"      element={<SelectCalci dpt="IT"/>}/>
          <Route path="/CSEAI"   element={<SelectCalci dpt="CSEAI"/>}/>
          <Route path="/CSEIOT"  element={<SelectCalci dpt="CSEIOT"/>}/>
          <Route path="/CSEDS"   element={<SelectCalci dpt="CSEDS"/>}/>


          {/* <Route path="/CSE" element={<SelectCalci dpt="CSE"/>}/> */}
          <Route path="/CSE/cgpa"          element={<SelectSem type="cgpa" dpt="CSEDS"/>}/>
          <Route path="/ECE/cgpa"          element={<SelectSem type="cgpa" dpt="ECE"/>}/>
          <Route path="/Civil/cgpa"        element={<SelectSem type="cgpa" dpt="Civil"/>}/>
          <Route path="/MEC/cgpa"          element={<SelectSem type="cgpa" dpt="MEC"/>}/>
          <Route path="/EEE/cgpa"          element={<SelectSem type="cgpa" dpt="EEE"/>}/>
          <Route path="/ETCE/cgpa"         element={<SelectSem type="cgpa" dpt="ETCE"/>}/>
          <Route path="/CSECS/cgpa"        element={<SelectSem type="cgpa" dpt="CSECS"/>}/>
          <Route path="/CSEAIML/cgpa"      element={<SelectSem type="cgpa" dpt="CSEAIML"/>}/>
          <Route path="/CSEAIR/cgpa"       element={<SelectSem type="cgpa" dpt="CSEAIR"/>}/>
          <Route path="/CSEBCT/cgpa"       element={<SelectSem type="cgpa" dpt="CSEBCT"/>}/>
          <Route path="/IT/cgpa"           element={<SelectSem type="cgpa" dpt="IT"/>}/>
          <Route path="/CSEAI/cgpa"        element={<SelectSem type="cgpa" dpt="CSEAI"/>}/>
          <Route path="/CSEIOT/cgpa"       element={<SelectSem type="cgpa" dpt="CSEIOT"/>}/>
          <Route path="/CSEDS/cgpa"        element={<SelectSem type="cgpa" dpt="CSEDS"/>}/>




          <Route path="/CSE/sgpa"          element={<SelectSem type="sgpa" dpt="CSEDS"/>}/>
          <Route path="/ECE/sgpa"          element={<SelectSem type="sgpa" dpt="ECE"/>}/>
          <Route path="/Civil/sgpa"        element={<SelectSem type="sgpa" dpt="Civil"/>}/>
          <Route path="/MEC/sgpa"          element={<SelectSem type="sgpa" dpt="MEC"/>}/>
          <Route path="/EEE/sgpa"          element={<SelectSem type="sgpa" dpt="EEE"/>}/>
          <Route path="/ETCE/sgpa"         element={<SelectSem type="sgpa" dpt="ETCE"/>}/>
          <Route path="/CSECS/sgpa"        element={<SelectSem type="sgpa" dpt="CSECS"/>}/>
          <Route path="/CSEAIML/sgpa"      element={<SelectSem type="sgpa" dpt="CSEAIML"/>}/>
          <Route path="/CSEAIR/sgpa"       element={<SelectSem type="sgpa" dpt="CSEAIR"/>}/>
          <Route path="/CSEBCT/sgpa"       element={<SelectSem type="sgpa" dpt="CSEBCT"/>}/>
          <Route path="/IT/sgpa"           element={<SelectSem type="sgpa" dpt="IT"/>}/>
          <Route path="/CSEAI/sgpa"        element={<SelectSem type="sgpa" dpt="CSEAI"/>}/>
          <Route path="/CSEIOT/sgpa"       element={<SelectSem type="sgpa" dpt="CSEIOT"/>}/>
          <Route path="/CSEDS/sgpa"        element={<SelectSem type="sgpa" dpt="CSEDS"/>}/>







          <Route path="/CSE/cgpa/sem1"         element={<StrictMode><CgpaApp type="cgpa" dpt="CSE" semnum="1"/></StrictMode>} />
          <Route path="/ECE/cgpa/sem1"         element={<CgpaApp type="cgpa" dpt="ECE" semnum="1" />}/>
          <Route path="/Civil/cgpa/sem1"       element={<CgpaApp type="cgpa" dpt="Civil" semnum="1"/>} />
          <Route path="/MEC/cgpa/sem1"         element={<CgpaApp type="cgpa" dpt="MEC" semnum="1" />} />
          <Route path="/EEE/cgpa/sem1"         element={<CgpaApp type="cgpa" dpt="EEE" semnum="1"/>} />
          <Route path="/ECTE/cgpa/sem1"        element={<CgpaApp type="cgpa" dpt="ECTE" semnum="1" />} />
          <Route path="/CSECS/cgpa/sem1"       element={<CgpaApp type="cgpa" dpt="CSECS" semnum="1"/>} />
          <Route path="/CSEAIML/cgpa/sem1"     element={<CgpaApp type="cgpa" dpt="CSEAIML" semnum="1" />} />
          <Route path="/CSEAIR/cgpa/sem1"      element={<CgpaApp type="cgpa" dpt="CSEAIR" semnum="1" />} />
          <Route path="/CSEBCT/cgpa/sem1"      element={<CgpaApp type="cgpa" dpt="CSEBCT" semnum="1" />} />
          <Route path="/IT/cgpa/sem1"          element={<CgpaApp type="cgpa" dpt="IT" semnum="1" />} />
          <Route path="/CSEAI/cgpa/sem1"       element={<CgpaApp type="cgpa" dpt="CSEAI" semnum="1" />} />
          <Route path="/CSEIOT/cgpa/sem1"      element={<CgpaApp type="cgpa" dpt="CSEIOT" semnum="1" />} />
          <Route path="/CSEDS/cgpa/sem1"       element={<CgpaApp type="cgpa" dpt="CSEDS" semnum="1" />} />
          

          <Route path="/CSE/sgpa/sem1"   element={<StrictMode><SgpaApp  type="sgpa" dpt="CSE" semnum="1"/></StrictMode>} />
          <Route path="/ECE/sgpa/sem1"               element={<SgpaApp type="sgpa" dpt="ECE" semnum="1" />}/>
          <Route path="/Civil/sgpa/sem1"             element={<SgpaApp type="sgpa" dpt="Civil" semnum="1"/>} />
          <Route path="/MEC/sgpa/sem1"               element={<SgpaApp type="sgpa" dpt="MEC" semnum="1" />} />
          <Route path="/EEE/sgpa/sem1"               element={<SgpaApp type="sgpa" dpt="EEE" semnum="1"/>} />
          <Route path="/ECTE/sgpa/sem1"              element={<SgpaApp type="sgpa" dpt="ECTE" semnum="1" />} />
          <Route path="/CSECS/sgpa/sem1"             element={<SgpaApp type="sgpa" dpt="CSECS" semnum="1"/>} />
          <Route path="/CSEAIML/sgpa/sem1"           element={<SgpaApp type="sgpa" dpt="CSEAIML" semnum="1" />} />
          <Route path="/CSEAIR/sgpa/sem1"            element={<SgpaApp type="sgpa" dpt="CSEAIR" semnum="1" />} />
          <Route path="/CSEBCT/sgpa/sem1"            element={<SgpaApp type="sgpa" dpt="CSEBCT" semnum="1" />} />
          <Route path="/IT/sgpa/sem1"                element={<SgpaApp type="sgpa" dpt="IT" semnum="1" />} />
          <Route path="/CSEAI/sgpa/sem1"             element={<SgpaApp type="sgpa" dpt="CSEAI" semnum="1" />} />
          <Route path="/CSEIOT/sgpa/sem1"            element={<SgpaApp type="sgpa" dpt="CSEIOT" semnum="1" />} />
          <Route path="/CSEDS/sgpa/sem1"             element={<SgpaApp type="sgpa" dpt="CSEDS" semnum="1" />} />

      {/* change for adding cgpa */}
          
          {/* <Route path="/CSE/cgpa" element={<CGPA dpt="CSE" semnum="9" />} />
            */}
      
      {/* change for adding cgpa */}



        
          <Route path="/CSE/cgpa/sem2"   element={<StrictMode><CgpaApp  type="cgpa" dpt="CSE" semnum="2"/></StrictMode>} />
          <Route path="/ECE/cgpa/sem2"               element={<CgpaApp  type="cgpa" dpt="ECE" semnum="2" />}/>
          <Route path="/Civil/cgpa/sem2"             element={<CgpaApp  type="cgpa" dpt="Civil" semnum="2"/>} />
          <Route path="/MEC/cgpa/sem2"               element={<CgpaApp  type="cgpa" dpt="MEC" semnum="2" />} />
          <Route path="/EEE/cgpa/sem2"               element={<CgpaApp  type="cgpa" dpt="EEE" semnum="2"/>} />
          <Route path="/ECTE/cgpa/sem2"              element={<CgpaApp  type="cgpa" dpt="ECTE" semnum="2" />} />
          <Route path="/CSECS/cgpa/sem2"             element={<CgpaApp  type="cgpa" dpt="CSECS" semnum="2"/>} />
          <Route path="/CSEAIML/cgpa/sem2"           element={<CgpaApp  type="cgpa" dpt="CSEAIML" semnum="2" />} />
          <Route path="/CSEAIR/cgpa/sem2"            element={<CgpaApp  type="cgpa" dpt="CSEAIR" semnum="2" />} />
          <Route path="/CSEBCT/cgpa/sem2"            element={<CgpaApp  type="cgpa" dpt="CSEBCT" semnum="2" />} />
          <Route path="/IT/cgpa/sem2"                element={<CgpaApp  type="cgpa" dpt="IT" semnum="2" />} />
          <Route path="/CSEAI/cgpa/sem2"             element={<CgpaApp  type="cgpa" dpt="CSEAI" semnum="2" />} />
          <Route path="/CSEIOT/cgpa/sem2"            element={<CgpaApp  type="cgpa" dpt="CSEIOT" semnum="2" />} />
          <Route path="/CSEDS/cgpa/sem2"             element={<CgpaApp  type="cgpa" dpt="CSEDS" semnum="2" />} />

          <Route path="/CSE/sgpa/sem2"   element={<StrictMode><SgpaApp type="sgpa" dpt="CSE" semnum="2"/></StrictMode>} />
          <Route path="/ECE/sgpa/sem2"               element={<SgpaApp type="sgpa" dpt="ECE" semnum="2" />}/>
          <Route path="/Civil/sgpa/sem2"             element={<SgpaApp type="sgpa" dpt="Civil" semnum="2"/>} />
          <Route path="/MEC/sgpa/sem2"               element={<SgpaApp type="sgpa" dpt="MEC" semnum="2" />} />
          <Route path="/EEE/sgpa/sem2"               element={<SgpaApp type="sgpa" dpt="EEE" semnum="2"/>} />
          <Route path="/ECTE/sgpa/sem2"              element={<SgpaApp type="sgpa" dpt="ECTE" semnum="2" />} />
          <Route path="/CSECS/sgpa/sem2"             element={<SgpaApp type="sgpa" dpt="CSECS" semnum="2"/>} />
          <Route path="/CSEAIML/sgpa/sem2"           element={<SgpaApp type="sgpa" dpt="CSEAIML" semnum="2" />} />
          <Route path="/CSEAIR/sgpa/sem2"            element={<SgpaApp type="sgpa" dpt="CSEAIR" semnum="2" />} />
          <Route path="/CSEBCT/sgpa/sem2"            element={<SgpaApp type="sgpa" dpt="CSEBCT" semnum="2" />} />
          <Route path="/IT/sgpa/sem2"                element={<SgpaApp type="sgpa" dpt="IT" semnum="2" />} />
          <Route path="/CSEAI/sgpa/sem2"             element={<SgpaApp type="sgpa" dpt="CSEAI" semnum="2" />} />
          <Route path="/CSEIOT/sgpa/sem2"            element={<SgpaApp type="sgpa" dpt="CSEIOT" semnum="2" />} />
          <Route path="/CSEDS/sgpa/sem2"             element={<SgpaApp type="sgpa" dpt="CSEDS" semnum="2" />} />





          <Route path="/CSE/cgpa/sem3" element={<StrictMode><CgpaApp type="cgpa" dpt="CSE" semnum="3"/></StrictMode>} />
          <Route path="/ECE/cgpa/sem3"             element={<CgpaApp type="cgpa" dpt="ECE" semnum="3" />}/>
          <Route path="/Civil/cgpa/sem3"           element={<CgpaApp type="cgpa" dpt="Civil" semnum="3"/>} />
          <Route path="/MEC/cgpa/sem3"             element={<CgpaApp type="cgpa" dpt="MEC" semnum="3" />} />
          <Route path="/EEE/cgpa/sem3"             element={<CgpaApp type="cgpa" dpt="EEE" semnum="3"/>} />
          <Route path="/ECTE/cgpa/sem3"            element={<CgpaApp type="cgpa" dpt="ECTE" semnum="3" />} />
          <Route path="/CSECS/cgpa/sem3"           element={<CgpaApp type="cgpa" dpt="CSECS" semnum="3"/>} />
          <Route path="/CSEAIML/cgpa/sem3"         element={<CgpaApp type="cgpa" dpt="CSEAIML" semnum="3" />} />
          <Route path="/CSEAIR/cgpa/sem3"          element={<CgpaApp type="cgpa" dpt="CSEAIR" semnum="3" />} />
          <Route path="/CSEBCT/cgpa/sem3"          element={<CgpaApp type="cgpa" dpt="CSEBCT" semnum="3" />} />
          <Route path="/IT/cgpa/sem3"              element={<CgpaApp type="cgpa" dpt="IT" semnum="3" />} />
          <Route path="/CSEAI/cgpa/sem3"           element={<CgpaApp type="cgpa" dpt="CSEAI" semnum="3" />} />
          <Route path="/CSEIOT/cgpa/sem3"          element={<CgpaApp type="cgpa" dpt="CSEIOT" semnum="3" />} />
          <Route path="/CSEDS/cgpa/sem3"           element={<CgpaApp type="cgpa" dpt="CSEDS" semnum="3" />} />

          <Route path="/CSE/sgpa/sem3" element={<StrictMode><SgpaApp type="sgpa" dpt="CSE" semnum="3"/></StrictMode>} />
          <Route path="/ECE/sgpa/sem3"             element={<SgpaApp type="sgpa" dpt="ECE" semnum="3" />}/>
          <Route path="/Civil/sgpa/sem3"           element={<SgpaApp type="sgpa" dpt="Civil" semnum="3"/>} />
          <Route path="/MEC/sgpa/sem3"             element={<SgpaApp type="sgpa" dpt="MEC" semnum="3" />} />
          <Route path="/EEE/sgpa/sem3"             element={<SgpaApp type="sgpa" dpt="EEE" semnum="3"/>} />
          <Route path="/ECTE/sgpa/sem3"            element={<SgpaApp type="sgpa" dpt="ECTE" semnum="3" />} />
          <Route path="/CSECS/sgpa/sem3"           element={<SgpaApp type="sgpa" dpt="CSECS" semnum="3"/>} />
          <Route path="/CSEAIML/sgpa/sem3"         element={<SgpaApp type="sgpa" dpt="CSEAIML" semnum="3" />} />
          <Route path="/CSEAIR/sgpa/sem3"          element={<SgpaApp type="sgpa" dpt="CSEAIR" semnum="3" />} />
          <Route path="/CSEBCT/sgpa/sem3"          element={<SgpaApp type="sgpa" dpt="CSEBCT" semnum="3" />} />
          <Route path="/IT/sgpa/sem3"              element={<SgpaApp type="sgpa" dpt="IT" semnum="3" />} />
          <Route path="/CSEAI/sgpa/sem3"           element={<SgpaApp type="sgpa" dpt="CSEAI" semnum="3" />} />
          <Route path="/CSEIOT/sgpa/sem3"          element={<SgpaApp type="sgpa" dpt="CSEIOT" semnum="3" />} />
          <Route path="/CSEDS/sgpa/sem3"           element={<SgpaApp type="sgpa" dpt="CSEDS" semnum="3" />} />






          <Route path="/CSE/cgpa/sem4" element={<StrictMode><CgpaApp type="cgpa" dpt="CSE" semnum="4"/></StrictMode>} />
          <Route path="/ECE/cgpa/sem4"             element={<CgpaApp type="cgpa" dpt="ECE" semnum="4" />}/>
          <Route path="/Civil/cgpa/sem4"           element={<CgpaApp type="cgpa" dpt="Civil" semnum="4"/>} />
          <Route path="/MEC/cgpa/sem4"             element={<CgpaApp type="cgpa" dpt="MEC" semnum="4" />} />
          <Route path="/EEE/cgpa/sem4"             element={<CgpaApp type="cgpa" dpt="EEE" semnum="4"/>} />
          <Route path="/ECTE/cgpa/sem4"            element={<CgpaApp type="cgpa" dpt="ECTE" semnum="4" />} />
          <Route path="/CSECS/cgpa/sem4"           element={<CgpaApp type="cgpa" dpt="CSECS" semnum="4"/>} />
          <Route path="/CSEAIML/cgpa/sem4"         element={<CgpaApp type="cgpa" dpt="CSEAIML" semnum="4" />} />
          <Route path="/CSEAIR/cgpa/sem4"          element={<CgpaApp type="cgpa" dpt="CSEAIR" semnum="4" />} />
          <Route path="/CSEBCT/cgpa/sem4"          element={<CgpaApp type="cgpa" dpt="CSEBCT" semnum="4" />} />
          <Route path="/IT/cgpa/sem4"              element={<CgpaApp type="cgpa" dpt="IT" semnum="4" />} />
          <Route path="/CSEAI/cgpa/sem4"           element={<CgpaApp type="cgpa" dpt="CSEAI" semnum="4" />} />
          <Route path="/CSEIOT/cgpa/sem4"          element={<CgpaApp type="cgpa" dpt="CSEIOT" semnum="4" />} />
          <Route path="/CSEDS/cgpa/sem4"           element={<CgpaApp type="cgpa" dpt="CSEDS" semnum="4" />} />

          <Route path="/CSE/sgpa/sem4" element={<StrictMode><SgpaApp type="sgpa" dpt="CSE" semnum="4"/></StrictMode>} />
          <Route path="/ECE/sgpa/sem4"             element={<SgpaApp type="sgpa" dpt="ECE" semnum="4" />}/>
          <Route path="/Civil/sgpa/sem4"           element={<SgpaApp type="sgpa" dpt="Civil" semnum="4"/>} />
          <Route path="/MEC/sgpa/sem4"             element={<SgpaApp type="sgpa" dpt="MEC" semnum="4" />} />
          <Route path="/EEE/sgpa/sem4"             element={<SgpaApp type="sgpa" dpt="EEE" semnum="4"/>} />
          <Route path="/ECTE/sgpa/sem4"            element={<SgpaApp type="sgpa" dpt="ECTE" semnum="4" />} />
          <Route path="/CSECS/sgpa/sem4"           element={<SgpaApp type="sgpa" dpt="CSECS" semnum="4"/>} />
          <Route path="/CSEAIML/sgpa/sem4"         element={<SgpaApp type="sgpa" dpt="CSEAIML" semnum="4" />} />
          <Route path="/CSEAIR/sgpa/sem4"          element={<SgpaApp type="sgpa" dpt="CSEAIR" semnum="4" />} />
          <Route path="/CSEBCT/sgpa/sem4"          element={<SgpaApp type="sgpa" dpt="CSEBCT" semnum="4" />} />
          <Route path="/IT/sgpa/sem4"              element={<SgpaApp type="sgpa" dpt="IT" semnum="4" />} />
          <Route path="/CSEAI/sgpa/sem4"           element={<SgpaApp type="sgpa" dpt="CSEAI" semnum="4" />} />
          <Route path="/CSEIOT/sgpa/sem4"          element={<SgpaApp type="sgpa" dpt="CSEIOT" semnum="4" />} />
          <Route path="/CSEDS/sgpa/sem4"           element={<SgpaApp type="sgpa" dpt="CSEDS" semnum="4" />} />







          <Route path="/CSE/cgpa/sem5" element={<StrictMode><CgpaApp type="cgpa" dpt="CSE" semnum="5"/></StrictMode>} />
          <Route path="/ECE/cgpa/sem5"             element={<CgpaApp type="cgpa" dpt="ECE" semnum="5" />}/>
          <Route path="/Civil/cgpa/sem5"           element={<CgpaApp type="cgpa" dpt="Civil" semnum="5"/>} />
          <Route path="/MEC/cgpa/sem5"             element={<CgpaApp type="cgpa" dpt="MEC" semnum="5" />} />
          <Route path="/EEE/cgpa/sem5"             element={<CgpaApp type="cgpa" dpt="EEE" semnum="5"/>} />
          <Route path="/ECTE/cgpa/sem5"            element={<CgpaApp type="cgpa" dpt="ECTE" semnum="5" />} />
          <Route path="/CSECS/cgpa/sem5"           element={<CgpaApp type="cgpa" dpt="CSECS" semnum="5"/>} />
          <Route path="/CSEAIML/cgpa/sem5"         element={<CgpaApp type="cgpa" dpt="CSEAIML" semnum="5" />} />
          <Route path="/CSEAIR/cgpa/sem5"          element={<CgpaApp type="cgpa" dpt="CSEAIR" semnum="5" />} />
          <Route path="/CSEBCT/cgpa/sem5"          element={<CgpaApp type="cgpa" dpt="CSEBCT" semnum="5" />} />
          <Route path="/IT/cgpa/sem5"              element={<CgpaApp type="cgpa" dpt="IT" semnum="5" />} />
          <Route path="/CSEAI/cgpa/sem5"           element={<CgpaApp type="cgpa" dpt="CSEAI" semnum="5" />} />
          <Route path="/CSEIOT/cgpa/sem5"          element={<CgpaApp type="cgpa" dpt="CSEIOT" semnum="5" />} />
          <Route path="/CSEDS/cgpa/sem5"           element={<CgpaApp type="cgpa" dpt="CSEDS" semnum="5" />} />

          <Route path="/CSE/sgpa/sem5" element={<StrictMode><SgpaApp type="sgpa" dpt="CSE" semnum="5"/></StrictMode>} />
          <Route path="/ECE/sgpa/sem5"             element={<SgpaApp type="sgpa" dpt="ECE" semnum="5" />}/>
          <Route path="/Civil/sgpa/sem5"           element={<SgpaApp type="sgpa" dpt="Civil" semnum="5"/>} />
          <Route path="/MEC/sgpa/sem5"             element={<SgpaApp type="sgpa" dpt="MEC" semnum="5" />} />
          <Route path="/EEE/sgpa/sem5"             element={<SgpaApp type="sgpa" dpt="EEE" semnum="5"/>} />
          <Route path="/ECTE/sgpa/sem5"            element={<SgpaApp type="sgpa" dpt="ECTE" semnum="5" />} />
          <Route path="/CSECS/sgpa/sem5"           element={<SgpaApp type="sgpa" dpt="CSECS" semnum="5"/>} />
          <Route path="/CSEAIML/sgpa/sem5"         element={<SgpaApp type="sgpa" dpt="CSEAIML" semnum="5" />} />
          <Route path="/CSEAIR/sgpa/sem5"          element={<SgpaApp type="sgpa" dpt="CSEAIR" semnum="5" />} />
          <Route path="/CSEBCT/sgpa/sem5"          element={<SgpaApp type="sgpa" dpt="CSEBCT" semnum="5" />} />
          <Route path="/IT/sgpa/sem5"              element={<SgpaApp type="sgpa" dpt="IT" semnum="5" />} />
          <Route path="/CSEAI/sgpa/sem5"           element={<SgpaApp type="sgpa" dpt="CSEAI" semnum="5" />} />
          <Route path="/CSEIOT/sgpa/sem5"          element={<SgpaApp type="sgpa" dpt="CSEIOT" semnum="5" />} />
          <Route path="/CSEDS/sgpa/sem5"           element={<SgpaApp type="sgpa" dpt="CSEDS" semnum="5" />} />





          


          <Route path="/CSE/cgpa/sem6" element={<StrictMode><CgpaApp type="cgpa" dpt="CSE" semnum="6"/></StrictMode>} />
          <Route path="/ECE/cgpa/sem6"             element={<CgpaApp type="cgpa" dpt="ECE" semnum="6" />}/>
          <Route path="/Civil/cgpa/sem6"           element={<CgpaApp type="cgpa" dpt="Civil" semnum="6"/>} />
          <Route path="/MEC/cgpa/sem6"             element={<CgpaApp type="cgpa" dpt="MEC" semnum="6" />} />
          <Route path="/EEE/cgpa/sem6"             element={<CgpaApp type="cgpa" dpt="EEE" semnum="6"/>} />
          <Route path="/ECTE/cgpa/sem6"            element={<CgpaApp type="cgpa" dpt="ECTE" semnum="6" />} />
          <Route path="/CSECS/cgpa/sem6"           element={<CgpaApp type="cgpa" dpt="CSECS" semnum="6"/>} />
          <Route path="/CSEAIML/cgpa/sem6"         element={<CgpaApp type="cgpa" dpt="CSEAIML" semnum="6" />} />
          <Route path="/CSEAIR/cgpa/sem6"          element={<CgpaApp type="cgpa" dpt="CSEAIR" semnum="6" />} />
          <Route path="/CSEBCT/cgpa/sem6"          element={<CgpaApp type="cgpa" dpt="CSEBCT" semnum="6" />} />
          <Route path="/IT/cgpa/sem6"              element={<CgpaApp type="cgpa" dpt="IT" semnum="6" />} />
          <Route path="/CSEAI/cgpa/sem6"           element={<CgpaApp type="cgpa" dpt="CSEAI" semnum="6" />} />
          <Route path="/CSEIOT/cgpa/sem6"          element={<CgpaApp type="cgpa" dpt="CSEIOT" semnum="6" />} />
          <Route path="/CSEDS/cgpa/sem6"           element={<CgpaApp type="cgpa" dpt="CSEDS" semnum="6" />} />

          <Route path="/CSE/sgpa/sem6" element={<StrictMode><SgpaApp type="sgpa" dpt="CSE" semnum="6"/></StrictMode>} />
          <Route path="/ECE/sgpa/sem6"             element={<SgpaApp type="sgpa" dpt="ECE" semnum="6" />}/>
          <Route path="/Civil/sgpa/sem6"           element={<SgpaApp type="sgpa" dpt="Civil" semnum="6"/>} />
          <Route path="/MEC/sgpa/sem6"             element={<SgpaApp type="sgpa" dpt="MEC" semnum="6" />} />
          <Route path="/EEE/sgpa/sem6"             element={<SgpaApp type="sgpa" dpt="EEE" semnum="6"/>} />
          <Route path="/ECTE/sgpa/sem6"            element={<SgpaApp type="sgpa" dpt="ECTE" semnum="6" />} />
          <Route path="/CSECS/sgpa/sem6"           element={<SgpaApp type="sgpa" dpt="CSECS" semnum="6"/>} />
          <Route path="/CSEAIML/sgpa/sem6"         element={<SgpaApp type="sgpa" dpt="CSEAIML" semnum="6" />} />
          <Route path="/CSEAIR/sgpa/sem6"          element={<SgpaApp type="sgpa" dpt="CSEAIR" semnum="6" />} />
          <Route path="/CSEBCT/sgpa/sem6"          element={<SgpaApp type="sgpa" dpt="CSEBCT" semnum="6" />} />
          <Route path="/IT/sgpa/sem6"              element={<SgpaApp type="sgpa" dpt="IT" semnum="6" />} />
          <Route path="/CSEAI/sgpa/sem6"           element={<SgpaApp type="sgpa" dpt="CSEAI" semnum="6" />} />
          <Route path="/CSEIOT/sgpa/sem6"          element={<SgpaApp type="sgpa" dpt="CSEIOT" semnum="6" />} />
          <Route path="/CSEDS/sgpa/sem6"           element={<SgpaApp type="sgpa" dpt="CSEDS" semnum="6" />} />







          <Route path="/CSE/cgpa/sem7" element={<StrictMode><CgpaApp type="cgpa" dpt="CSE" semnum="7"/></StrictMode>} />
          <Route path="/ECE/cgpa/sem7"             element={<CgpaApp type="cgpa" dpt="ECE" semnum="7" />}/>
          <Route path="/Civil/cgpa/sem7"           element={<CgpaApp type="cgpa" dpt="Civil" semnum="7"/>} />
          <Route path="/MEC/cgpa/sem7"             element={<CgpaApp type="cgpa" dpt="MEC" semnum="7" />} />
          <Route path="/EEE/cgpa/sem7"             element={<CgpaApp type="cgpa" dpt="EEE" semnum="7"/>} />
          <Route path="/ECTE/cgpa/sem7"            element={<CgpaApp type="cgpa" dpt="ECTE" semnum="7" />} />
          <Route path="/CSECS/cgpa/sem7"           element={<CgpaApp type="cgpa" dpt="CSECS" semnum="7"/>} />
          <Route path="/CSEAIML/cgpa/sem7"         element={<CgpaApp type="cgpa" dpt="CSEAIML" semnum="7" />} />
          <Route path="/CSEAIR/cgpa/sem7"          element={<CgpaApp type="cgpa" dpt="CSEAIR" semnum="7" />} />
          <Route path="/CSEBCT/cgpa/sem7"          element={<CgpaApp type="cgpa" dpt="CSEBCT" semnum="7" />} />
          <Route path="/IT/cgpa/sem7"              element={<CgpaApp type="cgpa" dpt="IT" semnum="7" />} />
          <Route path="/CSEAI/cgpa/sem7"           element={<CgpaApp type="cgpa" dpt="CSEAI" semnum="7" />} />
          <Route path="/CSEIOT/cgpa/sem7"          element={<CgpaApp type="cgpa" dpt="CSEIOT" semnum="7" />} />
          <Route path="/CSEDS/cgpa/sem7"           element={<CgpaApp type="cgpa" dpt="CSEDS" semnum="7" />} />

          <Route path="/CSE/sgpa/sem7" element={<StrictMode><SgpaApp type="sgpa" dpt="CSE" semnum="7"/></StrictMode>} />
          <Route path="/ECE/sgpa/sem7"             element={<SgpaApp type="sgpa" dpt="ECE" semnum="7" />}/>
          <Route path="/Civil/sgpa/sem7"           element={<SgpaApp type="sgpa" dpt="Civil" semnum="7"/>} />
          <Route path="/MEC/sgpa/sem7"             element={<SgpaApp type="sgpa" dpt="MEC" semnum="7" />} />
          <Route path="/EEE/sgpa/sem7"             element={<SgpaApp type="sgpa" dpt="EEE" semnum="7"/>} />
          <Route path="/ECTE/sgpa/sem7"            element={<SgpaApp type="sgpa" dpt="ECTE" semnum="7" />} />
          <Route path="/CSECS/sgpa/sem7"           element={<SgpaApp type="sgpa" dpt="CSECS" semnum="7"/>} />
          <Route path="/CSEAIML/sgpa/sem7"         element={<SgpaApp type="sgpa" dpt="CSEAIML" semnum="7" />} />
          <Route path="/CSEAIR/sgpa/sem7"          element={<SgpaApp type="sgpa" dpt="CSEAIR" semnum="7" />} />
          <Route path="/CSEBCT/sgpa/sem7"          element={<SgpaApp type="sgpa" dpt="CSEBCT" semnum="7" />} />
          <Route path="/IT/sgpa/sem7"              element={<SgpaApp type="sgpa" dpt="IT" semnum="7" />} />
          <Route path="/CSEAI/sgpa/sem7"           element={<SgpaApp type="sgpa" dpt="CSEAI" semnum="7" />} />
          <Route path="/CSEIOT/sgpa/sem7"          element={<SgpaApp type="sgpa" dpt="CSEIOT" semnum="7" />} />
          <Route path="/CSEDS/sgpa/sem7"           element={<SgpaApp type="sgpa" dpt="CSEDS" semnum="7" />} />








          <Route path="/CSE/cgpa/sem8" element={<StrictMode><CgpaApp type="cgpa" dpt="CSE" semnum="8"/></StrictMode>} />
          <Route path="/ECE/cgpa/sem8"             element={<CgpaApp type="cgpa" dpt="ECE" semnum="8" />}/>
          <Route path="/Civil/cgpa/sem8"           element={<CgpaApp type="cgpa" dpt="Civil" semnum="8"/>} />
          <Route path="/MEC/cgpa/sem8"             element={<CgpaApp type="cgpa" dpt="MEC" semnum="8" />} />
          <Route path="/EEE/cgpa/sem8"             element={<CgpaApp type="cgpa" dpt="EEE" semnum="8"/>} />
          <Route path="/ECTE/cgpa/sem8"            element={<CgpaApp type="cgpa" dpt="ECTE" semnum="8" />} />
          <Route path="/CSECS/cgpa/sem8"           element={<CgpaApp type="cgpa" dpt="CSECS" semnum="8"/>} />
          <Route path="/CSEAIML/cgpa/sem8"         element={<CgpaApp type="cgpa" dpt="CSEAIML" semnum="8" />} />
          <Route path="/CSEAIR/cgpa/sem8"          element={<CgpaApp type="cgpa" dpt="CSEAIR" semnum="8" />} />
          <Route path="/CSEBCT/cgpa/sem8"          element={<CgpaApp type="cgpa" dpt="CSEBCT" semnum="8" />} />
          <Route path="/IT/cgpa/sem8"              element={<CgpaApp type="cgpa" dpt="IT" semnum="8" />} />
          <Route path="/CSEAI/cgpa/sem8"           element={<CgpaApp type="cgpa" dpt="CSEAI" semnum="8" />} />
          <Route path="/CSEIOT/cgpa/sem8"          element={<CgpaApp type="cgpa" dpt="CSEIOT" semnum="8" />} />
          <Route path="/CSEDS/cgpa/sem8"           element={<CgpaApp type="cgpa" dpt="CSEDS" semnum="8" />} />

          <Route path="/CSE/sgpa/sem8" element={<StrictMode><SgpaApp type="sgpa" dpt="CSE" semnum="8"/></StrictMode>} />
          <Route path="/ECE/sgpa/sem8"             element={<SgpaApp type="sgpa" dpt="ECE" semnum="8" />}/>
          <Route path="/Civil/sgpa/sem8"           element={<SgpaApp type="sgpa" dpt="Civil" semnum="8"/>} />
          <Route path="/MEC/sgpa/sem8"             element={<SgpaApp type="sgpa" dpt="MEC" semnum="8" />} />
          <Route path="/EEE/sgpa/sem8"             element={<SgpaApp type="sgpa" dpt="EEE" semnum="8"/>} />
          <Route path="/ECTE/sgpa/sem8"            element={<SgpaApp type="sgpa" dpt="ECTE" semnum="8" />} />
          <Route path="/CSECS/sgpa/sem8"           element={<SgpaApp type="sgpa" dpt="CSECS" semnum="8"/>} />
          <Route path="/CSEAIML/sgpa/sem8"         element={<SgpaApp type="sgpa" dpt="CSEAIML" semnum="8" />} />
          <Route path="/CSEAIR/sgpa/sem8"          element={<SgpaApp type="sgpa" dpt="CSEAIR" semnum="8" />} />
          <Route path="/CSEBCT/sgpa/sem8"          element={<SgpaApp type="sgpa" dpt="CSEBCT" semnum="8" />} />
          <Route path="/IT/sgpa/sem8"              element={<SgpaApp type="sgpa" dpt="IT" semnum="8" />} />
          <Route path="/CSEAI/sgpa/sem8"           element={<SgpaApp type="sgpa" dpt="CSEAI" semnum="8" />} />
          <Route path="/CSEIOT/sgpa/sem8"          element={<SgpaApp type="sgpa" dpt="CSEIOT" semnum="8" />} />
          <Route path="/CSEDS/sgpa/sem8"           element={<SgpaApp type="sgpa" dpt="CSEDS" semnum="8" />} />





        
        </Routes>
      </div>
    </div>
  );
}





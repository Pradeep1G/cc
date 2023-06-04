import './App.css';
// import './Content.css'
// import Getdataarray from './getData';
import GetCgpaData from './getCgpaData';
import TotalTodict from './TotalToDict';
// import Todict from './ToDict';
import DisplaySubject from './DisplaySubjects';
import { useState } from 'react';
import Modal from './ShowResult';

function CgpaApp(props) {



  const [modalOpen, setModalOpen] = useState(false);
  const [cgpa , setcgpa] = useState("");
//   const [marks_list_length, setmarks_list_length] = useState(null);
//   const [SemesterNumber, setSemesterNumber] = useState("1")

//   const data = GetCgpaData(props.dpt, "2")
// const data = <Getdataarray dpt={props.dpt} semnum="1"/>
  const arranged_data = TotalTodict(props)
// const arranged_data = Todict(props)

  var allData = [[],[],[],[]]

  for(var k=1;k<=Number.parseInt(props.semnum);k++){

    var datax = GetCgpaData(props.dpt, k+"")

    allData = [[...allData[0], ...datax[0]], [...allData[1], ...datax[1]], [...allData[2], ...datax[2]], [...allData[3], ...datax[3]]]

  }

  console.warn(allData)

//   const data1 = [[...data[0], ...data[0]], [...data[1], ...data[1]]]
//   console.warn(data)
  

//   data.push(data);
//   arranged_data.push(arranged_data)



//   for(var i=1; i<Number.parseInt(props.semnum);i++){
//     data.concat(<Getdataarray dpt={props.dpt} semnum={i}/>);
//   }






//   console.warn(data);
  // console.warn(arranged_data);


  var marks_list =[]
  var subjectpartialcredits = [];





  const changeHandle = (event)=>{




    event.preventDefault()
    // console.warn(event.target.length)
    for(var i=0; i<allData[2].length;i++){ 
      // if(event.target[i].value ==''){seterroccur(true)}
      marks_list.push(event.target[i].value);
    
    }



    for(var j=0; j<marks_list.length; j++){
      if(allData[3][j]===10){
        subjectpartialcredits.push((Number.parseInt((Number.parseInt(marks_list[j]*2)/10))+1)*(allData[2][j]))

      }else{
     subjectpartialcredits.push((Number.parseInt((Number.parseInt(marks_list[j])/10))+1)*(allData[3][j]))
    }
  }
    console.warn(subjectpartialcredits)

    
    
    console.warn(marks_list)

    // setmarks_list_length(marks_list.length)
    // console.warn(marks_list_length+"hjjy")

    let sumofsubjectpartialcredits = subjectpartialcredits.reduce(function (a, b) {
      return (a + b);
    }, 0);
    // console.warn(sumofsubjectpartialcredits);

    let sumofcredits=allData[2].reduce(function(a,b){
      return Number.parseInt(a)+Number.parseInt(b);
    }, 0);
    console.warn(sumofcredits)

    // console.warn(((sumofsubjectpartialcredits/sumofcredits)+"0").substring(0,6))
    console.warn((Number((sumofsubjectpartialcredits/sumofcredits).toFixed(2))+"0").substring(0,4));
    setcgpa((Number((sumofsubjectpartialcredits/sumofcredits).toFixed(2))+"0").substring(0,4));

marks_list = []
subjectpartialcredits = []

  }



  



  
  return (
    <>



    <div className="Container">

      {/* <h1>{props.dpt}</h1>
    
      <h1>{props.semnum}</h1> */}

      <div className='SubjectsBlock'>
      <h3> Enter Marks Till Semester - {props.semnum}</h3>
    <form onSubmit={changeHandle}>

    <div className="cpgpadiv">
{/* {document.getElementById("footer").style.bottom="-400px"} */}
    {document.documentElement.style.setProperty("--position", "relative")}
      
      {
        arranged_data.map((item)=>{
        if(item.Course_Code==='x' ){
            return <h1>Semester {item.Assumed_Credit}</h1>
        }else{
        return <DisplaySubject name={item.Course_Name} code = {item.Course_Code} credit={item.Course_Credit}/>
        }
      })}

    </div>

      <button
       type='submit'
       onClick={()=>{
        setModalOpen(true)
        if(modalOpen){
        document.getElementById("modalcontainer").style.display="flex"
        }
       }}
       >Calculate</button>
      {(modalOpen && <Modal gradepoints={cgpa<=10? cgpa: '100'} semnum={props.semnum} type="Cumulative"/>)}
      
</form>
  <p id="creditnotecgpa">* All elective subjects have 3 credits.</p>


</div>
   

    </div>
    </>
  );
}

export default CgpaApp;


import './App.css';
// import './Content.css'
import Getdataarray from './getData';
import Todict from './ToDict';
import DisplaySubject from './DisplaySubjects';
import { useState } from 'react';
import Modal from './ShowResult';

function SgpaApp(props) {


  const [modalOpen, setModalOpen] = useState(false);
  const [cgpa , setcgpa] = useState("");
  // const [marks_list_length, setmarks_list_length] = useState(null);


  const data = Getdataarray(props)
  const arranged_data = Todict(props)

  console.warn(data);
  // console.warn(arranged_data);


  var marks_list =[]
  var subjectpartialcredits = [];





  const changeHandle = (event)=>{




    event.preventDefault()
    // console.warn(event.target.length)
    for(var i=0; i<data[2].length;i++){ 
      // if(event.target[i].value ==''){seterroccur(true)}
      marks_list.push(event.target[i].value);
    
    }



    for(var j=0; j<marks_list.length; j++){
      if(data[3][j]===10){
        subjectpartialcredits.push((Number.parseInt((Number.parseInt(marks_list[j]*2)/10))+1)*(data[2][j]))

      }else{
     subjectpartialcredits.push((Number.parseInt((Number.parseInt(marks_list[j])/10))+1)*(data[3][j]))
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

    let sumofcredits=data[2].reduce(function(a,b){
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
    {document.documentElement.style.setProperty("--position", "relative")}
    {arranged_data.length>=8? document.documentElement.style.setProperty("--creditnotepadding", "80px"): document.documentElement.style.setProperty("--creditnotepadding", "105px")}


      {/* <h1>{props.dpt}</h1>
    
      <h1>{props.semnum}</h1> */}

      <div className='SubjectsBlock'>
      <h1>Semester - {props.semnum}</h1>
    <form onSubmit={changeHandle}>

      {arranged_data.map((item)=>{
        return <DisplaySubject name={item.Course_Name} code = {item.Course_Code} credit={item.Course_Credit}/>
      })}

      <button
      className='SubjectsBlockButton'
       type='submit'
       onClick={()=>{
        setModalOpen(true)
        if(modalOpen){
        document.getElementById("modalcontainer").style.display="flex"
        }
       }}
       >Calculate</button>
      {(modalOpen && <Modal gradepoints={cgpa<=10? cgpa: '100'} semnum={props.semnum} type=""/>)}
      
</form>
  <p id="creditnote">* All elective subjects have 3 credits.</p>


</div>
   

    </div>
    </>
  );
}

export default SgpaApp;





import  {useState, useEffect} from 'react';
// import ReactDOM from 'react-dom/client';
import Axios from "axios";

// const jasondataurl = "https://gpaserverx.onrender.com/course/CSEsem"

function GetCgpaData(dpt, num){
// const jasondataurl = "https://gpaserverx.onrender.com/course/CSEsem"
// https://gpaserverx.onrender.com/course/CSEsem


    const code_list = [];
    const name_list = [];
    const credit_list = [];
    const Assumed_credit_list = []
    // const semnum = props.semnum;
    // const dptname = props.dpt;
    const semnum = num;
    const dptname = dpt;


    // for(var i=1; i<Number.parseInt(props.semnum);i++){
    
        const [dataarray, setcourse] = useState([])
    
    useEffect(() => {  
        async function go(){
            // setsemno(semno)
            // const semno = props.semnum
            // fetch("https://gpaserverx.onrender.com/course/CSEsem"+props.semnum).catch(err => console.warn(err))
            // const response = await Axios.get("https://gpaserverx.onrender.com/course/"+dptname+"sem"+semnum); 
            const response = await Axios.get("http://localhost:3005/course/"+dptname+"sem"+semnum); 

            setcourse(response.data)
            console.log(response.data)
        }
        go()
    }, [semnum,dptname])
    console.log(dataarray)
    // console.log(go())


    dataarray.forEach((it) =>{
        console.log(it.Course_Name)
        code_list.push(it.Course_Code)
        name_list.push(it.Course_Name)
        credit_list.push(it.Course_Credit)
        Assumed_credit_list.push(it.Assumed_credit)
    })
    // }

    return [code_list, name_list, credit_list, Assumed_credit_list]

// const [dataarray, setcoursedata] = useState([
//     {
//         Course_Code:"",
//         Course_Name: "",
//         Course_Credit: "",
//     },
// ]);

// useEffect(() =>{
//     fetch("http://localhost:3001/course/semdata")
//     .then((res)=>res.json())
//     .then( (jsonRes)=> setcoursedata(jsonRes));
// },
// []);

// // useEffect(() => {
// // console.log(dataarray) ;
// // }, [dataarray]);

// return dataarray
    
}

export default GetCgpaData















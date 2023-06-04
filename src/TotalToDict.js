import GetCgpaData from "./getCgpaData";
import Getdataarray from "./getData";


function TotalTodict(props){
    const code_dict = []
    var allData=[[],[],[],[]]
    for(var k=1;k<=Number.parseInt(props.semnum);k++){
    const indicator = ['x','x','x', k+""]


        var datax = GetCgpaData(props.dpt, k+"")

        allData = [[...allData[0], ...indicator[0]], [...allData[1], ...indicator[1]], [...allData[2], ...indicator[2]], [...allData[3], ...indicator[3]]]

    
        allData = [[...allData[0], ...datax[0]], [...allData[1], ...datax[1]], [...allData[2], ...datax[2]], [...allData[3], ...datax[3]]]
        

      }
    // for(var i=1; i<Number.parseInt(props.semnum);i++){
    //     code_list.concat(<Getdataarray dpt={props.dpt} semnum={i}/>);
    //   }

    for(var i = 0; i<allData[0].length; i++){
        code_dict.push({})
        code_dict[i]["Course_Name"] =       allData[0][i]
        code_dict[i]["Course_Code"] =       allData[1][i]
        code_dict[i]["Course_Credit"] =     allData[2][i]
        code_dict[i]["Assumed_Credit"] =    allData[3][i]

    }

    

    return code_dict
}


export default TotalTodict



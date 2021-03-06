import React,{useState} from "react";
import axios from "../axiosbase";

const HelperContext = React.createContext();
const initialStyle ={tableOne: "0%", tableTwo: "100%",tableThree: "200%", tableFour: "300%", tableFive: "400%", tableSix: "500%", tableheight: 150,}
const initialSee = { tableOneData : {}, tableTwoData: {}, tableThree : {}, tableFour : {} }

export const HelpStore = (props) =>{

    const [ tableSee, setTableSee ] = useState(initialSee);
    const [ tableId, setTableId ] = useState(null);
    const [ GlobalStyle, setGlobalStyle ] = useState(initialStyle);
    
    const TableControl = (valueOne)=>{ setTableSee({tableOneData: valueOne}); }
    const TableIdControl = (tableId) => {
        console.log(tableId, " $$ global tableID $$");
        setTableId(tableId);
    }

    const StyleComp = (valueOne,valueTwo, valueThree,valueFour,valueFive,valueSix) =>{
        if(valueOne === "0%"){
          setGlobalStyle({  tableOne: valueOne,tableTwo: valueTwo,  tableThree: valueThree, tableFour : valueFour, tableFive : valueFive, tableSix : valueSix,tableheight: 190});
        }else if(valueTwo === "0%"){
          setGlobalStyle({ tableOne: valueOne,tableTwo: valueTwo,  tableThree: valueThree, tableFour : valueFour, tableFive : valueFive, tableSix : valueSix,tableheight: 400 });
        }else if(valueThree === "0%"){
          setGlobalStyle({tableOne: valueOne,tableTwo: valueTwo,  tableThree: valueThree, tableFour : valueFour, tableFive : valueFive, tableSix : valueSix, tableheight: 300 });
        }else if(valueFour === "0%"){
          setGlobalStyle({ tableOne: valueOne,tableTwo: valueTwo,  tableThree: valueThree, tableFour : valueFour, tableFive : valueFive, tableSix : valueSix, tableheight: 300 });
        }else if(valueFive === "0%"){
          setGlobalStyle({ tableOne: valueOne,tableTwo: valueTwo,  tableThree: valueThree, tableFour : valueFour, tableFive : valueFive, tableSix : valueSix, tableheight: 500 });
        }else if(valueFive === "0%"){
          setGlobalStyle({ tableOne: valueOne,tableTwo: valueTwo,  tableThree: valueThree, tableFour : valueFour, tableFive : valueFive, tableSix : valueSix, tableheight: 500 });
        }else{
          setGlobalStyle({tableOne: valueOne,tableTwo: valueTwo,  tableThree: valueThree, tableFour : valueFour, tableFive : valueFive, tableSix : valueSix, tableheight: 250 });
        }
      }

    return (
       <HelperContext.Provider
        value = {{
             tableSee,
             TableControl,
             TableIdControl,
             tableId,
             StyleComp,
             GlobalStyle
        }}
        >
       {props.children}    
       </HelperContext.Provider> 

    )
}

export default HelperContext;
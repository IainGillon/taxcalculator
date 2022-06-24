import { useState } from "react";
import { useEffect } from "react";
import Calculator from "../Logic/Calculator";


let s = 0;

let p = 0;


function setSalary(salary){
    s = salary;

}

function setPension(pension){
    p = pension;

}


const TaxCont = () => {
    useEffect(() => {
       

    }, []);

    return(
        
           <form>
             <input placeholder="salary" value={s} onChange={(e) => setSalary(e.target.value)}/>
             <input placeholder="pension" value={p} onChange={(e) => setPension(e.target.value)}/>
             <button type="button" onClick={takehomeCalc}/>
           </form>
        
    )





}

export default TaxCont;
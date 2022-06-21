// useState to set salary and pension
// 


let s = 0;

let p = 0;

function setSalary(salary){
    s = salary;

}

function setPension(pension){
    p = pension;

}


function taxCalculator(){
    let PAYE = 0;
    
    if(s <= 12570){
        
        PAYE = 0;
          
    }

    else if(s > 12570 && s <=14732){
        PAYE = s - 12570 / 100 * 19;
    }

    else if(s > 25689 && s <= 43662){
        PAYE = s - 12570 / 100 * 20;
    }

    else if(s > 53662 && s <= 150000){
        PAYE = s - 12570 / 100 * 40;
    }

    else{
        PAYE = s - 12570 / 100 * 46;
    }

    return PAYE;


}


function pensionCalculator(p){

    let pension = s / 100 * p;

    return pension;

}

function niCalculator(){

    let ni = 0

    let t = s - 9568;


    if(s <= 9568){

        ni = 0;

    }
    else if(s > 9568 && s <= 50270 ){
        ni = t / 100 * 13.25
    }

    else if(s > 50270){
        
        let income1 = t 

    }
}



function takehomeCalc(){
    taxCalculator(s);
    pensionCalculator(p);
    niCalculator(s);

    let takehome = s - PAYE - pension - ni;

    console.log('Your net pay is ' + takehome + ' you will pay ' + PAYE + ' in tax and '+ ni + ' in National insurancee' )

}


export default Calculator;
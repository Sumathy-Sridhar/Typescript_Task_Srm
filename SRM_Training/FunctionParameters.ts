import { Console } from "console";
//Default Parameters
console.log("DEFAULT PARAMETERS");
function sum(x:number, y:number=10){
    return x+y;
}
console.log("Sum = "+sum(3));
console.log("Sum = "+sum(20,40));

//Optional Parameters
console.log("OPTIONAL PARAMETERS");
function cusdetails(id:number,cusname:String,email_id?:String){
    console.log("Customer Id: ",id);
    console.log("Customer Name : ",cusname);
    if(email_id!=undefined){
        console.log("Customer Email_Id: ",email_id);
    }
}
cusdetails(101,'Brown','Brown@gmail.com');
cusdetails(123,"Cony");

// REST Parameters using Numbers
console.log("REST PARAMETERS");
function multiply(a:number,...b:number[]):number{
    let result=a;
    for(let i=0;i<b.length;i++){
        result*=b[i];
    }
    return result;
}
let res1=multiply(3,2);
console.log("Product = " +res1);
let res2=multiply(2,3,4,5);
console.log("Product of 4 nos = "+res2);

//REST Parameters using String
function StringDemo(...strn:String[]){
    for(let val=0;val<strn.length;val++){
        console.log(strn[val]);
    }
}
StringDemo("Hello", "cony");
StringDemo("12345","BrownCony","Sumathy@gmail.com","25.68");

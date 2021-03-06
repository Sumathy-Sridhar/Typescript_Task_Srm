import { type } from "os";
let variable:(String|number);
variable="Sumathy";
console.log(variable);
variable=25.20;
console.log(variable);
function display(val:(String|number)){
    if(typeof(val)=="number"){
        console.log(val +"= Input is of Number Format");
    }else if(typeof(val)=="string"){
        console.log(val +" = Input is of String Format");
    }
}

display(45);
display("Hello");
// display(true); It throws error as argument of type boolean is not assgined to the parameter of the function.

let ud:string|{};
ud:"sumathy"
/*let add;
ud=add=(a:number,b:number):number=> 
{
    return a+b;
}*/
let res;
ud=res=function add(a:number,b:number):number{
    return a+b;
}
console.log("Result : " +res(2,5));
import { Console } from "console";
let customer:[String,number,String,String,number,Date]=
    ["Brown",123,"Bread","Brown@gmail.com",968745123,new Date()];
console.log("Email Id of Customer : " +customer[3]);
console.log("Customer Details : " +customer);
console.log("Length of Tuple :"+customer.length);
customer.push("Cony",124,"Milk","Cony@yahoo.com",98745613112,new Date());
console.log("Length of the Tuple : "+customer.length);
console.log("Customer Details : ");
for(let i=0;i<customer.length;i++){
    console.log(customer[i]);
}
customer.pop();
console.log("Length of Tuple After Pop Operation: " +customer.length);
for(let i=0;i<customer.length;i++){
    if(customer[i]=='Cony'){
        console.log("Cony Found at Index: " +i);
    }
}

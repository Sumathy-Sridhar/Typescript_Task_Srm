interface PaymentManager{
    doPayment(paymentcreds:number,paymentMode:string):string;
    getPaymentStatus(refId: string):string;
}
class UPIPaymentImpl implements PaymentManager{
    public doPayment(paymentcreds:number,paymentMode:string):string
    {
        return `Payment of Rs ${paymentcreds} in ${paymentMode} is in Progress`;
    }
    public getPaymentStatus(refId: string): string {
       return `Payment done Successfully for reference Id: ${refId} `;
    }
}
class CreditCardPaymentImpl implements PaymentManager{
    doPayment(paymentcreds:number,paymentMode:string):string{
    return `Payment of Rs ${paymentcreds} in ${paymentMode} is in Progress`;
    }
    getPaymentStatus(refId: string): string {
        return `Payment done Successfully for reference Id: ${refId} `;
    }
}

let upi:UPIPaymentImpl=new UPIPaymentImpl();
console.log(upi.doPayment(10000,'Paytm'));
console.log(upi.getPaymentStatus('123456789'));
let upiobj:CreditCardPaymentImpl=new CreditCardPaymentImpl();
console.log(upiobj.doPayment(20000,'Gpay'));
console.log(upiobj.getPaymentStatus('23568749'));

var UPIPaymentImpl = /** @class */ (function () {
    function UPIPaymentImpl() {
    }
    UPIPaymentImpl.prototype.doPayment = function (paymentcreds, paymentMode) {
        return "Payment of Rs " + paymentcreds + " in " + paymentMode + " is in Progress";
    };
    UPIPaymentImpl.prototype.getPaymentStatus = function (refId) {
        return "Payment done Successfully for reference Id: " + refId + " ";
    };
    return UPIPaymentImpl;
}());
var CreditCardPaymentImpl = /** @class */ (function () {
    function CreditCardPaymentImpl() {
    }
    CreditCardPaymentImpl.prototype.doPayment = function (paymentcreds, paymentMode) {
        return "Payment of Rs " + paymentcreds + " in " + paymentMode + " is in Progress";
    };
    CreditCardPaymentImpl.prototype.getPaymentStatus = function (refId) {
        return "Payment done Successfully for reference Id: " + refId + " ";
    };
    return CreditCardPaymentImpl;
}());
var upi = new UPIPaymentImpl();
console.log(upi.doPayment(10000, 'Paytm'));
console.log(upi.getPaymentStatus('123456789'));
var upiobj = new CreditCardPaymentImpl();
console.log(upiobj.doPayment(20000, 'Gpay'));
console.log(upiobj.getPaymentStatus('23568749'));

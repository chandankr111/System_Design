interface Paymentstartegy{
    processpayment(amount : number) : void;
}

class paypal implements Paymentstartegy{
     processpayment(amount: number): void {
         console.log("paypal recieve payments");
     } 
}

class creditcard implements Paymentstartegy{
    processpayment(amount: number): void {
        console.log("paypal recieve payments");
    } 
}

class bitcoin implements Paymentstartegy{
    processpayment(amount: number): void {
        console.log("paypal recieve payments");
    } 
}

class onlinestore{
    private paymentstrategy : Paymentstartegy;
    
    constructor(paymentstrategy : Paymentstartegy){
       this.paymentstrategy = paymentstrategy;
    }

    checkout(amount : number): void{
        this.paymentstrategy.processpayment(amount);
        console.log(`payment  ${amount}` )
    }

}


const papal = new paypal();
const storeWithPayPal = new onlinestore(papal);
storeWithPayPal.checkout(100); // Outputs: "Paid 100 using PayPal."

const Card = new creditcard();
const storeWithCreditCard = new onlinestore(Card);
storeWithCreditCard.checkout(200); // Outputs: "Paid 200 using Credit Card."

const coin = new bitcoin();
const storeWithBitcoin = new onlinestore(coin);
storeWithBitcoin.checkout(300); // Outputs: "Paid 300 using Bitcoin."
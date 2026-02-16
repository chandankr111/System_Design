//  unidirection association is association in which only one part is depend on other not mutually depend each other 
// ex. order is depend on paymentgateway 

class paymentgateway{
    paymentrocess(amount : string){
        console.log(`process the payment ${amount}`);
    }
}

class order{
    gateway : paymentgateway;
    constructor( gateway : paymentgateway ){
        this.gateway = gateway;
    }

    checkout():void{
        this.gateway.paymentrocess("100");
    }
}
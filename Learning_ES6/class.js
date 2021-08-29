class Restuarnt {
    food = 'biriyani'
    pricePerPlate = 120;
    quantitiy;
    constructor(quantitiy) {
        this.quantitiy = quantitiy;
    }
    startMaking(pricePerPlate, quantitiy) {
        console.log('Biriyani is preparing. Your total price is: ' + this.pricePerPlate * this.quantitiy);
    }
};

oderBiriyani = new Restuarnt(1);
oderBiriyani.startMaking();

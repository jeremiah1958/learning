//constructor function for pen

// function Pen(name, color, price){
//     this.name = name;
//     this.color = color;
//     this.price = price;
    
// }

// Pen.prototype.showPrice = function(){
//     console.log(`The price of ${this.name} is ${this.price}`);
// }

// const pen = new Pen("Marker", "green", 55);

// pen.showPrice();

//create a class

class Pen {
    constructor(name, color, price){
        this.name = name;
        this.color = color;
        this.price = price;
    }
    
    showPrice(){
        console.log(`The price of ${this.name} is ${this.price}`);
    }
}

const pen = new Pen("Marker", "green", 55);

pen.showPrice();
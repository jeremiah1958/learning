class Chair {
    constructor(color, seatHeight, backSupport, seatSize, isMovable){
        this.color = color;
        this.seatHeight = seatHeight;
        this.backSupport = backSupport;
        this.seatSize = seatSize;
        this.isMovable = isMovable;
    }

    adjustableHeight(){
        console.log(`The height of the chair can be adjusted to ${this.seatHeight}`);
    };
    moveChair(){
        if(this.isMovable == true){
            console.log('The chair is movable');
        }
        else{
            console.log('The chair is not movable');
        }
        
    };
}

const chair = new Chair("Grey","25 inch", true, "30 inch", true);

chair.adjustableHeight();

//console.log("chair object", chair);

//document.getElementById("demo").innerHTML = chair;
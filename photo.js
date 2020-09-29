
export class Photo {
    constructor(width = 8, height = 10){
        this.width = width;
        this.height = height;
    }

    price(){
        let finalPrice;

        if ((this.width == 8) && (this.height == 10)){
            finalPrice = 4;
        } else {
            if ((this.width == 10) && (this.height == 12)){
                finalPrice = 6;
            } else {
                finalPrice = 10;
            }
        }

        return finalPrice;
    }

    toString(){
        return `This is a ${this.width} by ${this.height} photo and it costs $${this.price()}`;
    }   
}
class MattedPhoto extends Photo{
    constructor(width, height, color){
        super(width,height);
        this.color = color;
    }

    price(){
        return super.price() + 10;
    }
    toString(){
        return `This is a ${this.width} by ${this.height} matted ${this.color} photo and it costs $${this.price()}`;
    }    
}
    class FramedPhoto extends Photo{
    constructor(width, height, material,style){
        super(width,height);
        this.material = material
        this.style=style;
    }

    price(){
        return super.price() + 25;
    }
    toString(){
        return `This is a ${this.width} by ${this.height} ${this.material} photo and it costs $${this.price()}.The style of the photo is ${this.style}.`;
    }    
}

let photo1 = new Photo();
console.log(photo1.toString());

let photo2 = new Photo(12, 15);
console.log(photo2.toString());

let mattedPhoto1 = new MattedPhoto(9,12,'Red');
console.log(mattedPhoto1.toString());

let mattedPhoto2 = new MattedPhoto(10,11,'White');
console.log(mattedPhoto2.toString());

let framedPhoto1 = new FramedPhoto(5,12,'silver','modern');
console.log(framedPhoto1.toString());

let framedPhoto2 = new FramedPhoto(7,12,'gold','classic');
console.log(framedPhoto2.toString());
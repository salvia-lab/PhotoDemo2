const  {Photo,MattedPhoto,FramedPhoto}  = require("./photo");


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
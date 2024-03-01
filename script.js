const colorArray = ["violet","red","green","pink"]
const shapeArray = ["circle","triangle","rectangle","square","triangle2"]

const btn = document.querySelector(".background_color")
const sizeIncrease = document.querySelector('.sizeIncrease');
const sizeDecrease = document.querySelector('.sizeDecrease');
const shape = document.querySelector('.shape');
const changeShapeBtn = document.querySelector('.changeShapeBtn');


btn.addEventListener("click" , function(){
    const random = Math.floor(Math.random()*colorArray.length);
    console.log(random);
    document.querySelector(".background").style.backgroundColor = colorArray[random];
})

let size = "200px";
// console.log(size);
// console.log(parseInt(size));


changeShapeBtn.addEventListener('click', function() {
    const random = Math.floor(Math.random()*shapeArray.length);
        shape.id = shapeArray[random]
        shape.style.background = colorArray[random]
})
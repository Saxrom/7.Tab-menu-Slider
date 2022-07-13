var MySlider = [
    'assets/images/image1.webp',
    'assets/images/image2.jpeg',
    'assets/images/image3.png'
    
];

let index=0
let img = document.querySelector('.slider img')
img.src = MySlider[0]

var firstDote=document.querySelector('#first')
firstDote.addEventListener('click',() =>{
    img.src = MySlider[0]
})

var secondDote=document.querySelector('#second')
secondDote.addEventListener('click',() =>{
    img.src = MySlider[1]
})

var thirdDote=document.querySelector('#third')
thirdDote.addEventListener('click',() =>{
    img.src = MySlider[2]
})

function AutoPlay() {
    if(index == MySlider.length){
        index = 0;
    }
    img.src = MySlider[index];
}

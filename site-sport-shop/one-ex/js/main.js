



const bigImg = document.getElementById('big-img')


var imgElements = document.querySelectorAll('.img-img');



for (var i = 0; i < imgElements ;i++) {
    imgElements.item(i).addEventListener('click', onImageClick)
};

function onImageClick () {
    bigImg.src = this.src;
}



//////
var colorElements = document.querySelectorAll('.around');
for (var i = 0; i < colorElements.length ;i++) {
    colorElements.item(i).addEventListener('click', checkColor)
};
function checkColor() {
    var active = document.querySelector('.around.active')
    if (active) {
        active.classList.remove('active');
    }

    this.classList.add('active');
}







// ________________________________________________________________ old code

/*
const oneImg = document.getElementById('oneImg');
const twoImg = document.getElementById('twoImg');
const threeImg = document.getElementById('threeImg');
const bigImg = document.getElementById('big-img')

function onImageClick () {
    bigImg.src = this.src;
}

function clicker  (firstName)  {
    firstName.addEventListener('click',onImageClick );
}
oneImg.addEventListener('click',onImageClick );
twoImg.addEventListener('click',onImageClick );
threeImg.addEventListener('click',onImageClick );

 */
/*
var colorElements = document.querySelectorAll('.around');


for (var i = 0; i < colorElements.length ;i++) {
    colorElements.item(i).addEventListener('click', checkColor)
};

function checkColor() {

    var active = document.querySelector('.around.active')
    if (active) {
        active.classList.remove('active');
    }

    this.classList.add('active');
}
 */
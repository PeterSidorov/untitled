
const oneImg = document.getElementById('oneImg');
const twoImg = document.getElementById('twoImg');
const threeImg = document.getElementById('threeImg');
const bigImg = document.getElementById('big-img')

function onImageClick () {
    bigImg.src = this.src;
};

function clicker  (firstName)  {
    firstName.addEventListener('click',onImageClick );
};

clicker(oneImg);
clicker(twoImg);
clicker(threeImg);

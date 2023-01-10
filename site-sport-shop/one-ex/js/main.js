
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
// ________________________________________________________________ NEW PART
const pink = document.getElementById('pink')
const violet = document.getElementById('violet')
const yellow = document.getElementById('yellow')

pink.addEventListener('click', () => {
    pink.classList.add('active')

    violet.classList.remove('active')
    yellow.classList.remove('active')
})

violet.addEventListener('click', () => {
    violet.classList.add('active')

    pink.classList.remove('active')
    yellow.classList.remove('active')
})

yellow.addEventListener('click', () => {
    yellow.classList.add('active')

    pink.classList.remove('active')
    violet.classList.remove('active')
})



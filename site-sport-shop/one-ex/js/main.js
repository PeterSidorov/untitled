const oneImg = document.getElementById('oneImg');
const twoImg = document.getElementById('twoImg');
const threeImg = document.getElementById('threeImg');



oneImg.addEventListener('click', () => {
    document.querySelector('.big-img').src="img/bike3.png";
});

twoImg.addEventListener('click', () => {
    document.querySelector('.big-img').src="img/bike1.png";
});

threeImg.addEventListener('click', () => {
    document.querySelector('.big-img').src="img/bike2.png";
});



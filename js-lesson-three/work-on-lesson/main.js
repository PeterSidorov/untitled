/*
DOM
-----------------------------
<!-- HTML
<div id="html">
  HTML
</div>

<div id="css">
  CSS
</div>

<div id="js">
  JavaScript
</div>

<p class="paragraph">
    paragraph
</p>-->
---------------------------------------
JavaScript

const html = document.getElementById('html')
const css = document.getElementById('css')
const js = document.getElementById('js')

const p = document.querySelector('.paragraph')

const divs = document.querySelectorAll('div')
console.log(html)
console.log(css)
console.log(js)
console.log(p)
console.log(divs)

 */
/*
Замена текста через JavaScript
<div id="js">
    JavaScript
</div>
---------------------------------------
const js = document.getElementById('js')

js.innerHTML = 'Python';
console.log(js)
  */
// ---------------------------------------
// ---------------------------------------
// ---------------------------------------
// ---------------------------------------
// ---------------------------------------
// ---------------------------------------


/*
    <style>
        .div-red {
        color: red;
    }
        .div-green {
        color: green;
    }
    </style>

---------------------------------------

<div id="text" className="div-red">
    Gjdhfbjehbj ejfh hfjkhd fjfbd fjefgjc hfk
</div>

---------------------------------------


const text = document.getElementById('text')

console.log(text)
//text.className = 'div-green'
//или
text.classList.toggle('div-green')

 */
//добавляет класс
/*
.hide {
            display: none;
        }
 */
// const div = document.getElementById('div')
// const btn = document.getElementById('btn')
//
// btn.addEventListener('click', () => {
//     div.classList.toggle('hide')
// })
/*
---------------------------------------

    <style>
        .paragraph {
        font-size: 50px;
    }

    </style>







    ---------------------------------------
        <button id="btn">Click</button>
<div id="div" className="paragraph">
    <p>
        IUGHJIUhh dauhhfebjd seuie vufgvds gdgvs tv yjsdcygh sdyds
    </p>
</div>


        ---------------------------------------
const div = document.getElementById('div')
const btn = document.getElementById('btn')

btn.addEventListener('click', () => {
    div.style.fontSize = '150px'
    div.style.color = 'red'
})
---------------------------------------
 */
/*
<button id="btn">
    Click
</button>
const btn = document.getElementById('btn')

const showMassage = () => {
    alert('Ты нажал на кнопку')
}

btn.onclick = showMassage;

 */

const div = document.querySelector('.div')

const showMessage = () => {
    alert('Hello world')
}

div.addEventListener('mouseover', showMessage);





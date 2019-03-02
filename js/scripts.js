let hide = document.querySelector('#answer');
let final = document.querySelector('#eggcap');
document.addEventListener('DOMContentLoaded', () => {

   hide.style.display = 'none';
   final.style.display = 'none';


});

let question = document.querySelector('#eggpic');
/*
image.addEventListener('mouseover', function(e) {
  image.setAttribute('src', 'images/eggs.jpg');
	image.setAttribute('alt', 'picture of eggs');
});
*/
question.onmouseover = () => {
  question.setAttribute('src', 'images/eggs.jpg');
//	question.setAttribute('alt', 'picture of eggs');
}

let towel = document.querySelector('#onclick');

towel.onclick = () => {
  hide.style.display = 'block';
};

let reveal = document.querySelector('#final');

reveal.onclick = () => {
  reveal.style.display = 'block';
};
/*
image.addEventListener('click', function(e) {
  image.setAttribute('src', 'https://cdn.pixabay.com/photo/2016/03/18/14/15/eggs-1265072_960_720.jpg');
	image.setAttribute('alt', 'picture of eggs');
  })
  */

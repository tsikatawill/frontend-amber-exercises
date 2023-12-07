
const displayNumOfItem = document.getElementById('displayItem');
const displayCartNum = document.getElementById('cartDis');

let numOfItem = 0;
let qty = 0;

// Add button 

document.getElementById('plus').addEventListener('click', ()=>{
  numOfItem += 1;
  displayNumOfItem.textContent = numOfItem;
});


// subtract button 

document.getElementById('minus').addEventListener('click', ()=>{
  numOfItem += -1;
  displayNumOfItem.textContent = numOfItem;
});


// button to add number of items into cart 

document.getElementById('add').addEventListener('click', ()=>{
  // grab the number of item selected and add to number of item in the cart
  qty += numOfItem;
  displayCartNum.textContent = qty;
  
  displayCartNum.style.display = 'block';  //display the number of items in the cart on the ui
   displayNumOfItem.textContent = 0;      //reset  to 0
   numOfItem = 0;                         //reset to 0

});




// IMAGE SLIDER

const display = document.querySelector('.img-display');
const popup = document.querySelector('.img-pop');
const scrollContainer = document.querySelector(".img-slider");
const backBtn = document.getElementById("left");
const nextBtn = document.getElementById("right");
const closeBtn = document.querySelector(".close");

scrollContainer.addEventListener("wheel", (e) => {
  e.preventDefault();
  scrollContainer.scrollLeft += e.deltaY;
});

nextBtn.addEventListener("click", () => {
  scrollContainer.style.scrollBehavior = "smooth";
  scrollContainer.scrollLeft += 640;
});

backBtn.addEventListener("click", () => {
  scrollContainer.style.scrollBehavior = "smooth";
  scrollContainer.scrollLeft -= 640; //width of image 640px
});

closeBtn.addEventListener('click', ()=> {
  popup.style.display = 'none';
});

display.addEventListener('click', ()=> {
  popup.style.display = 'block';

});

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


// cart

document.getElementById('cart').addEventListener('click', ()=>{
  
})
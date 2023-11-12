let numOfItem = 0;

let displayNumOfItem = document.getElementById('displayItem');
let displayCartNum = document.getElementById('cartDis');

document.getElementById('plus').addEventListener('click', ()=>{
  numOfItem += 1;
  displayNumOfItem.textContent = numOfItem;
});

document.getElementById('minus').addEventListener('click', ()=>{
  numOfItem += -1;
  displayNumOfItem.textContent = numOfItem;
});


document.getElementById('add').addEventListener('click', ()=>{
  displayCartNum.textContent = displayNumOfItem.textContent;
  
  displayCartNum.style.display = 'block';
   displayNumOfItem.textContent = 0;
   numOfItem = 0;

});


// cart

document.getElementById('cart').addEventListener('click', ()=>{
  
})
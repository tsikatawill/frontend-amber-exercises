//  get form data ///


const form = document.querySelector('#info');
const disPlay = document.querySelector('.display');
const bookBtn = document.getElementById('rent');
const bookNow = document.querySelector('.forms');

bookBtn.addEventListener('click', ()=> bookNow.style.display = 'block',);




//handle form submission

form.addEventListener("submit", function(event) {
  event.preventDefault(); 

  //hide display of details
 disPlay.style.display = 'block';
 bookNow.style.display = 'none';

//get inputs value

let firstName = document.getElementById('firstname').value;
let lastName = document.getElementById('lastname').value;
let age = document.getElementById('age').value;
let phone = document.getElementById('phone').value;
let email = document.getElementById('email').value;
let address = document.getElementById('address').value;
let city = document.getElementById('city').value;
let carType = document.getElementById('type').value;
let pickDate = document.getElementById('date-pickup').value;
let returnDate = document.getElementById('date-return').value;
let returnTime = document.getElementById('time-return').value;
let pickTime = document.getElementById('time-pickup').value;



//display submitted data

const fullName = document.querySelector('.data1');
fullName.textContent =  `Full Name : ${firstName} ${lastName}`;

const userAge = document.querySelector('.data2');
userAge.textContent =  `Age : ${age}`;

const userPhone = document.querySelector('.data3');
userPhone.textContent =  `Phone : ${phone}`;

const userEmail = document.querySelector('.data4');
userEmail.textContent =  `Email : ${email}`;

const userAddress = document.querySelector('.data5');
userAddress.textContent =  ` Address : ${address}`;

const userCity = document.querySelector('.data6');
userCity.textContent =  `City : ${city}`;

const carSelected = document.querySelector('.data7');
carSelected.textContent =  `Car : ${carType}`;

const datePickup = document.querySelector('.data8');
datePickup.textContent =  `Pick-up Date : ${pickDate}`;

const timePickup = document.querySelector('.data9');
timePickup.textContent =  `Pick-up Time : ${pickTime}`;

const dateOfReturn = document.querySelector('.data10');
dateOfReturn.textContent =  `Return Date : ${returnDate}`;

const timeOfReturn = document.querySelector('.data11');
timeOfReturn.textContent =  `Return Time : ${returnTime}`;

form.reset();
});

const inputElement = document.getElementById("passportImage");
const imagePreview = document.getElementById("imagePreview");


inputElement.addEventListener("change", function() {
  const file = inputElement.files[0];
  let reader = new FileReader();

  reader.onload = function(e) {
      imagePreview.src = e.target.result;
      imagePreview.style.display = "block";
  }
  reader.readAsDataURL(file);
});


//  close button for details display
const closeBtn = document.getElementById('close');
closeBtn.addEventListener('click', () =>  disPlay.style.display = 'none',);



// const pdfDownload = document.getElementById('pdf');
pdfDownload.addEventListener('click', generatePDF );

// //******  PDF  *********//

function generatePDF() {
  const doc = new jsPDF();
  const itemList = document.getElementById("itemList").getElementsByTagName("li");
  for (let i = 0; i < itemList.length; i++) {
      doc.text(20, 10 + (i * 10), (i + 1) + ". " + itemList[i].textContent);
  };
  doc.save("details.pdf");
};




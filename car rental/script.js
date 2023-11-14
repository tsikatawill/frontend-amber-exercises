const myForm = document.querySelector("form");
const display = document.querySelector(".display");
const formValidation = () => {
  if (myForm["fullname"].value === "") {
    alert("Name required");
  } else if (myForm["age"].value < 18) {
    alert("Must be 18 years");
  } else if (myForm["email"].value === "") {
    alert("email required");
  } else if (myForm["ppicture"].value === "") {
    alert("Passport Picture required");
  } else if (myForm["dvla"].value === "NO") {
    alert("Must Have A Drivers' License");
  } else {
    const fullname = myForm["fullname"].value;
    const age = myForm["age"].value;
    const email = myForm["email"].value;
    const ppicture = myForm["ppicture"].value;
    const dvla = myForm["dvla"].value;

    display.innerHTML = `Hello. Your details have been received. Please check your mail by the close of tofay ${fullname}, ${age}, ${email} ${ppicture}, ${dvla}`;
  }
};
myForm.addEventListener("submit", (event) => {
  event.preventDefault();
  validateForm();
});

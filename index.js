const date = document.querySelector('.date_of_birth');
const number = document.querySelector(".luckyNumber");
const text_output = document.querySelector('.output');
const button = document.querySelector('#check');
const space=document.querySelector('#content');
var resultImg = document.createElement('img');
resultImg.className = "resultImg";

button.addEventListener("click", function () {
  if (date.value === "" || number.value === "") {
    alert("Please enter the required feilds*");
    console.log("click");
  } else {

    const dob = date.value;
    const sum = Calculate_dob(dob);
    if (sum % number.value === 0) {
      text_output.textContent = 'Your birthday is lucky 🥳';
      resultImg.src = 'src/giphy.gif';
    } else {
      text_output.textContent = 'Your birthday is not lucky 🙈';
      resultImg.src = "src/unlucky.gif";
    }
    space.appendChild(resultImg);
  }

});

function Calculate_dob(dob) {
  let sum = 0;
  let value = dob.replaceAll("-", "");
  for (let i = 0; i < value.length; i++) {
    sum = sum + Number(value.charAt(i));
  }
  return sum;
}
const API = "https://open.er-api.com/v6/latest/USD";

const search = document.querySelector(".searchbox");
const fromCur = document.querySelector(".form");
const toCur = document.querySelector(".to");

const finalValue = document.querySelector(".finalValue");
const finalAmount = document.getElementById("finalAmount");

const convertButton = document.querySelector(".convert");

let resultFrom;
let resultTo;
let searchValue;

function displayResult(currency) {
  let fromRate = currency.rates[resultFrom];
  let toRate = currency.rates[resultTo];


  finalValue.innerHTML = ((toRate / fromRate) * searchValue).toFixed(5);
  finalAmount.style.display = "block";
}

toCur.addEventListener("change", (event) => {
  resultTo = event.target.value;
});

fromCur.addEventListener("change", (event) => {
  resultFrom = event.target.value;
});

search.addEventListener("change", (event) => {
  searchValue = event.target.value;
});

convertButton.addEventListener("click", () => {
  fetch(API)
    .then((data) => {
      return data.json();
    })
    .then(displayResult)
    .catch((error) => {
      "ERROR!!!", error;
    });
});

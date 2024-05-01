let fromSelect = document.querySelector("#fromCurrency");
let toSelect = document.querySelector("#toCurrency");
let fromImg = document.querySelector("#fromImg");
let toImg = document.querySelector("#toImg");
let msg = document.querySelector(".msg");
let btn = document.querySelector(".btn");
let  URL = `https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/usd.json`



// Populating countries in from
  for(let currCodeFrom in countryList){
    // console.log(currCode, countryList[currCode])
    let newOption = document.createElement("option");
    newOption.value = currCodeFrom;
    newOption.innerText = currCodeFrom;
    fromSelect.appendChild(newOption);
    fromSelect.addEventListener("change", (e) => {
      let selectedCurrCode = e.target.value;
      updateFlagFrom(selectedCurrCode);
    })
  }


  // Populating countries in to
  for(let currCodeTo in countryList){
    // console.log(currCode, countryList[currCode])
    let newOption = document.createElement("option");
    newOption.value = currCodeTo;
    newOption.innerText = currCodeTo;
    toSelect.appendChild(newOption);
    toSelect.addEventListener("change", (e) => {
      let selectedCurrCode = e.target.value;
      updateFlagTo(selectedCurrCode)
    })

  }

  // Function for update flag
function updateFlagFrom(currCode){
 
    fromImg.setAttribute("src", `https://flagsapi.com/${countryList[currCode]}/flat/64.png`)
  
}

function updateFlagTo(currCode){
 
    toImg.setAttribute("src", `https://flagsapi.com/${countryList[currCode]}/flat/64.png`)
  
}
btn.addEventListener("click", calculateRate);

//  Function for Calculation
async function calculateRate(){
  let inputNum = document.querySelector(".inputNumber").value;
  let rate = await fetch(`https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/${fromSelect.value.toLowerCase()}.json`)
  let data = await rate.json();
  let  calculatedData = inputNum * data[fromSelect.value.toLowerCase()][toSelect.value.toLowerCase()];
  msg.innerText = `${inputNum} ${fromSelect.value} = ${calculatedData} ${toSelect.value}`;

}


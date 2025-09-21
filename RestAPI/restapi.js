var BASE_URL ="https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api01/latest/currencies";
var countryList={


    "AED": "AE",
    "AFN": "AF",
    "ALL": "AL",
    "AMD": "AM",
    "ANG": "NL", 
    "AOA": "AO",
    "ARS": "AR",
    "AUD": "AU",
    "AWG": "AW",
    "AZN": "AZ",
    "BAM": "BA",
    "BBD": "BB",
    "BDT": "BD",
    "BGN": "BG",
    "BHD": "BH",
    "BIF": "BI",
    "BMD": "BM",
    "BND": "BN",
    "BOB": "BO",
    "BRL": "BR",
    "BSD": "BS",
    "BTN": "BT",
    "BWP": "BW",
    "BYN": "BY",
    "BZD": "BZ",
    "CAD": "CA",
    "CDF": "CD",
    "CHF": "CH",
    "CLP": "CL",
    "CNY": "CN",
    "COP": "CO",
    "CRC": "CR",
    "CUP": "CU",
    "CVE": "CV",
    "CZK": "CZ",
    "DJF": "DJ",
    "DKK": "DK",
    "DOP": "DO",
    "DZD": "DZ",
    "EGP": "EG",
    "ERN": "ER",
    "ETB": "ET",
    "EUR": "EU",
    "FJD": "FJ",
    "FKP": "FK",
    "FOK": "FO",
    "GBP": "GB",
    "GEL": "GE",
    "GGP": "GG",
    "GHS": "GH",
    "GIP": "GI",
  
  }


var dropdowns= document.querySelectorAll(".dropdowns select");
var btn= document.querySelectorAll(".form  button");
var fromCurr= document.querySelectorAll(".from select");
var toCurr= document.querySelectorAll(".to select");


for(let select of dropdowns){
    for(let currCode in countryList){
let newOption = document.createElement("option");
newOption.innerText = currCode;
newOption.value = currCode;

if(select.name==="from" && currCode==="USD"){
    newOption.selected="selected";
}else if(select.name==="To" && currCode==="INR"){
    newOption.selected="selected";

}
select.append(newOption);

}
select.addEventListener("change",(evt)=>{
    updateFlag(evt.target);
})
}
var updateFlag =(element)=>{
    let currCode= element.value;
    let countryCode= countryList[currCode];
    let newSrc=`https://flagsapi.com/${countryCode}/flat/64.png`
    let img=element.pareentElement.querySelector("img");
    img.src= newSrc;

};

btn.addEventListener("click",(evt)=>{
    evt.preventDefault();
    let amount= document.querySelector(".amount input")
    let amtVal = amount.value;
    if(amtVal===""||amtVal<1){
    amtVal=1;
    amount.value="1";
}
// console.log(fromCurr.value,toCurr.value);
const URL=`${BASE_URL}/${fromCurr}/${toCurr}.json`;

fetch(URL)
        .then(res => res.json())
        .then(data => {
            const rate = data[toCode];
            const convertedAmount = (amtVal * rate).toFixed(2);
            console.log(`Converted Amount: ${convertedAmount}`);
        })
        .catch(err => {
            console.error("Error fetching data:", err);
        });
});
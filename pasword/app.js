
// Dom elemets
const resultEl = document.querySelector(".password-display");
const rangeEl = document.querySelector(".ranges");
const lengthEl = document.querySelector(".lengTH");
const upperEl = document.getElementById("includeUppercase")
const lowerEl = document.getElementById("includeLower")
const numberEl = document.getElementById("includeNumbers")
const symbolEl = document.getElementById("includeSymbols")
const generateEl = document.querySelector(".btn");



const rendomFunc ={
    lowger: getRandomLower,
    upper: getRandomUpper,
    symbol: getRandomSymbol,
    number: getRandomNumber
}; 

generateEl.addEventListener("click",(e)=>{
    e.preventDefault();
    const Length = +lengthEl.value;
    const hasLower = lowerEl.checked;
    const hasUpper = upperEl.checked;
    const hasNumber = numberEl.checked;
    const hasSymbol = symbolEl.checked;

    resultEl.innerText = generatePassword(hasLower, hasNumber, hasUpper, hasSymbol , Length)
})


function generatePassword(symbol, upper, lowger, number , Length){
let generatedPassword =  '';
const typesCount = lowger + upper + number + symbol;
console.log("typesCount",typesCount)
 const typeArr = [{lowger} , {upper} , {number} , {symbol}].filter
 (item => Object.values(item)[0])
 if(typesCount === 0){
    return '';
 }
 for(let i = 0; i < Length; i += typesCount){
    typeArr.forEach(type =>{
        const funcName =  Object.keys(type)[0];
        console.log("funcName", funcName);

        generatedPassword += rendomFunc[funcName]();

    })
}

    const finalPassword = generatedPassword.slice(0, Length)
    return finalPassword
 }  
//  console.log("typesArr" ,typeArr)



function  getRandomLower(){
    return String.fromCharCode(Math.floor(Math.random() * 26) + 97);
}
function  getRandomUpper(){
    return String.fromCharCode(Math.floor(Math.random() * 26) + 65);
}
function  getRandomNumber(){
    return String.fromCharCode(Math.floor(Math.random() * 10) + 48);
}
function  getRandomSymbol(){
    const symbols = "!@#%^&*()_+[}/<.:;|"
    return symbols[Math.floor(Math.random()* symbols.length)]
}

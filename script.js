const api="https://api.exchangerate-api.com/v4/latest/USD"

const convertbtn=document.querySelector(".convert-btn")
const fromcurrency=document.querySelector('.from')
const tocurrency=document.querySelector('.to')
const inputvalue=document.querySelector('.input-value')
const convertedvalue=document.querySelector('.convertedvalue')
const resetbtn=document.querySelector('.reset-btn')
const swapbtn=document.querySelector('.swap-btn')
let resultFrom=fromcurrency.value;
let resultto=tocurrency.value;
let searchvalue;

fromcurrency.addEventListener('change',(e)=>{
    resultFrom=e.target.value
})
tocurrency.addEventListener('change',(e)=>{
    resultto=e.target.value
})

inputvalue.addEventListener('input',updatevalue)
function updatevalue(e){
    searchvalue=e.target.value
}
convertbtn.addEventListener("click",getResults)
function getResults(){
    fetch(api)
    .then(response=>{ return response.json()})
    .then(data=> displaResult(data))
}

function displaResult(data){
    let fromrate=data.rates[resultFrom]
    let torate=data.rates[resultto]
    convertedvalue.value=((torate/fromrate)*searchvalue).toFixed(2)
}
resetbtn.addEventListener('click',resetAll)
function resetAll()
{
    inputvalue.value=0
    convertedvalue.value=0
}


function swapCurrency(e){
    let temp = fromcurrency.value;
    fromcurrency.value = tocurrency.value;
    tocurrency.value = temp;

    // Update resultFrom and resultto with the new values
    resultFrom = fromcurrency.value;
    resultto = tocurrency.value;
}
swapbtn.addEventListener('click',swapCurrency)
/*------------------------ Cached Element References ------------------------*/
const numberElements = document.querySelectorAll('.number')

const operatorElements = document.querySelectorAll('.operator')

const equalsElement = document.querySelector('.equals')

const displayElement = document.querySelector('.display')


console.log(numberElements)
console.log(operatorElements)
console.log(equalsElement)
console.log(displayElement)
/*-------------------------------- Constants --------------------------------*/

/*-------------------------------- Variables --------------------------------*/
let number1 = null
let number2 = null
let operator = null

/*-------------------------------- Functions --------------------------------*/
function handleNumber(){}

function handleOperator(){}

function handleEquals(){
    console.log('Equals Button Clicked')
}

/*----------------------------- Event Listeners -----------------------------*/

equalsElement.addEventListener('click',handleEquals)

for(let oneNumberElement of numberElements){
    oneNumberElement.addEventListener('click',handleNumber)
}
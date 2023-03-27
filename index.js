const bill = document.getElementById('bill');
const person = document.getElementById('person');
const tipAmount = document.getElementById('amount-tip');
const tipTotal = document.getElementById('amount-total');
const reset = document.getElementById('reset');

let tips = document.getElementsByClassName("btn-tip");
let tips1 = Array.from(tips);
let customTip = document.getElementById('tip-input');

let billAmount = 0.00;
let tipValue = 5;
let personAmount = 0;
bill.value = billAmount;

bill.addEventListener('input', billInputF);
person.addEventListener('input', peopleInputF);
customTip.addEventListener('input', customTipF);

function billInputF() {
    billAmount = parseFloat(bill.value);
    calculateTip();
}

function peopleInputF() {
    personAmount = parseInt(person.value);
    calculateTip();
}

function customTipF() {
    tipValue = parseFloat(customTip.value);
    customTip.classList.add('active-custom');
    console.log(typeof(tipValue));
    calculateTip();
}

tips1.forEach(function (val) {
    val.addEventListener("click", handleClick);
});

function handleClick(event) {
    tips1.forEach((val) => {
        val.classList.remove("active");

        if(event.target.innerHTML == val.innerHTML) {
            val.classList.add("active");
            tipValue = parseFloat(val.innerHTML);
            console.log(tipValue);
        }
    });
    calculateTip();
}



function calculateTip() {
    let tipAmountFull = ((billAmount * tipValue / 100) / personAmount).toFixed(2);
    let tipTotalFull = (billAmount / personAmount + parseFloat(tipAmountFull)).toFixed(2);

    if(personAmount >= 1) {
        tipAmount.innerHTML = '$' + tipAmountFull;
        tipTotal.innerHTML = '$' + tipTotalFull;
    }  
}

reset.addEventListener('click', () => {
    bill.value = 0;
    person.value = 0;
    tipAmount.innerHTML = "$0.00";
    tipTotal.innerHTML = "$0.00";
    customTip.value = "Custom";
});








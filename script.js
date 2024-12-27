let billInput = document.getElementById("billInput");
let peopleInput = document.getElementById("peopleInput");
let tipAmount = document.getElementById("tipAmount");
let total = document.getElementById("total");
let customTip = document.getElementById("customTip");

let spanNotif = document.querySelector(".container__input span");

let buttons = document.querySelectorAll(".container__input--button-group button")
let resetButton = document.getElementById("resetButton");

function caculator(billNumber, tip, peopleNumber) {
    tipAmount.innerHTML = "$" + (billNumber * tip) / peopleNumber;
    total.innerHTML = "$" + billNumber / peopleNumber;
}

buttons.forEach(button => {
    button.addEventListener('click', () => {
        if (peopleInput.value != "") {
            tip = button.innerHTML.split("%");
            caculator(billInput.value, tip[0] / 100, peopleInput.value);
        } else {
            spanNotif.style.visibility = "visible";
            peopleInput.style.backgroundColor = "rgba(255, 0, 0, 0.1)";
        }
    });
});

peopleInput.addEventListener('input', (event) => {
    if (event.value != "") {
        spanNotif.style.visibility = "hidden";
        peopleInput.style.backgroundColor = "hsl(189, 41%, 97%)";
    }
});

customTip.addEventListener('input', (event) => {
    if (peopleInput.value != "") {
        console.log(event.value);
        caculator(billInput.value, customTip.value / 100, peopleInput.value);
    } else {
        spanNotif.style.visibility = "visible";
        peopleInput.style.backgroundColor = "rgba(255, 0, 0, 0.1)";
    }
});

resetButton.addEventListener('click', () => {
    billInput.value = "";
    peopleInput.value = "";
    tipAmount.innerHTML = "$0.00";
    total.innerHTML = "$0.00";
});
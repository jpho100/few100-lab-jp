
let tenPct: HTMLElement;
let fifteenPct: HTMLElement;
let tweentyPct: HTMLElement;
let checkAmount: HTMLInputElement;

export function runApp() {

    tenPct = document.getElementById("btnTenPct");
    fifteenPct = document.getElementById("btnFifteenPct");
    tweentyPct = document.getElementById("btnTweentyPct");

    tenPct.addEventListener('click', handleClickTenPct);
    fifteenPct.addEventListener('click', handleClickFifteenPct);
    tweentyPct.addEventListener('click', handleClickTweentyPct);

}

function handleClickTenPct() {
    if (!IsCheckAmountValid())
        return;
    PopulateData(10);
    ChangeButtonStyle(10);
}


function handleClickFifteenPct() {
    if (!IsCheckAmountValid())
        return;
    PopulateData(15);
    ChangeButtonStyle(15);
}

function handleClickTweentyPct() {
    if (!IsCheckAmountValid())
        return;
    PopulateData(20);
    ChangeButtonStyle(20);
}

function IsCheckAmountValid() {
    checkAmount = document.getElementById("checkAmount") as HTMLInputElement;
    if (checkAmount.value == "" || parseFloat(checkAmount.value) <= 1.00) {
        alert("Please enter the check amount above.");
        return false;
    }
    return true;
}

function PopulateData(pct) {
    var tipText = document.getElementById("tipText") as HTMLElement;
    tipText.innerHTML = "You are tipping " + pct + "%";

    var billAmount = document.getElementById("billAmount") as HTMLElement;
    var tipPercentage = document.getElementById("tipPercentage") as HTMLElement;
    var amountOfTip = document.getElementById("amountOfTip") as HTMLElement;
    var total = document.getElementById("total") as HTMLElement;

    billAmount.innerText = "Bill Amount:   $" + Math.round(parseFloat(checkAmount.value)).toFixed(2);
    tipPercentage.innerText = "Tip Percentage:   " + pct + "%";
    amountOfTip.innerText = "Amount Of Tip:   $" + (Math.round(parseFloat(checkAmount.value) * pct) / 100).toFixed(2);
    total.innerText = "Total to be Paid:   $" + (Math.round(parseFloat(checkAmount.value)) * (1 + pct / 100)).toFixed(2);
}

function ChangeButtonStyle(pct) {
    tenPct.classList.remove('Selected');
    fifteenPct.classList.remove('Selected');
    tweentyPct.classList.remove('Selected');

    if (pct == 10) {
        tenPct.classList.add('Selected');
    }
    else if (pct == 15) {
        fifteenPct.classList.add('Selected');
    }
    else if (pct == 20) {
        tweentyPct.classList.add('Selected');
    }
}

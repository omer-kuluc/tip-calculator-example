inputBill.addEventListener('change',handleBillInput);
inputSelectTip.addEventListener('change',handleSelectTipInput);
inputNumberOfPeople.addEventListener('change', handleNumberOfPeopleInput);
calculateBtn.addEventListener('click', handleCalc);
resetBtn.addEventListener('click', handleReset);


function handleBillInput() {
  if(inputBill.value.trim!== '') {
    inputBill.innerHTML = inputBill.value;
  }
}

function handleSelectTipInput() {
  if(inputSelectTip.value.trim!== '') {
    inputSelectTip.innerHTML = inputSelectTip.value;
  }
}

function handleNumberOfPeopleInput() {
  if(inputNumberOfPeople.value.trim!== '') {
    inputNumberOfPeople.innerHTML = inputNumberOfPeople.value;
  }
}

let total = 0;
let amountTip = 0;
let tipPercent = 0;
let tipAmount = 0;


function handleCalc() {
  if (Number(inputNumberOfPeople.value) === 0) {
    warnText.innerHTML = "Can't be zero!";
    return;
  }

  if (inputBill.value === "" || inputSelectTip.value === "" || inputNumberOfPeople.value === "") {
    alert('Boş değer girerek hesaplama yapılmaz');

  } else {
    tipPercent = Number((Number(inputBill.value) * Number(inputSelectTip.value)) / 100);
    amountTip = tipPercent / Number(inputNumberOfPeople.value);
    total = Number((Number(inputBill.value) + Number(tipPercent)) / Number(inputNumberOfPeople.value));
    totalPriceTxt.innerHTML = total.toFixed(2);
    amountPriceTxt.innerHTML = amountTip.toFixed(2);
  }
}

function handleReset() {
  inputBill.value = "";
  inputSelectTip.value = "";
  inputNumberOfPeople.value = "";
  totalPriceTxt.innerHTML = "$0.00";
  amountPriceTxt.innerHTML = "$0.00";
  warnText.innerHTML= '';
}
//login button event handler
let button = document.querySelector("#login");
button.addEventListener("click",function(){
let loginArea = document.querySelector(".login-area");
let showArea = document.querySelector("#transiction-area");
showArea.style.display = "block";
loginArea.style.display = "none";
})


//deposit button event handler
const depositBtn = document.querySelector("#addDeposit");

depositBtn.addEventListener("click",function(event){
    // let depositAmount = document.querySelector("#depositAmount").value;
    // let depositNumber = parseFloat(depositAmount);
    const depositNumber = getInputNumber("depositAmount");

    // let currentDeposit = document.getElementById("currentDeposit").innerText;
    // let currentDepositNumber = parseFloat(currentDeposit);
    // let totalDeposit = currentDepositNumber + depositNumber;
    // document.getElementById("currentDeposit").innerText = totalDeposit;
    // document.querySelector("#depositAmount").value = "";
    updateSpanText("currentDeposit",depositNumber);
    updateSpanText("currentBalance",depositNumber);
    

    
})

//withdraw button handler
const withdrawBtn = document.querySelector("#addWithdraw");
withdrawBtn.addEventListener("click",function(){
    const withdrawNumber = getInputNumber("withdrawAmount");
    console.log(withdrawNumber)
})

function getInputNumber(id){
    const withdrawAmount = document.getElementById(id).value;
    const withdrawNumber = parseFloat(withdrawAmount);
    return withdrawNumber;
}

function updateSpanText(id,depositNumber){
    const current = document.getElementById(id).innerText;
    const currentNumber = parseFloat(current);
    const totalBalance = depositNumber + currentNumber;
    document.getElementById(id).innerText = totalBalance;
}

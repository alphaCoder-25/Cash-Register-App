const billAmount = document.querySelector("#bill-amount");
const nextButton = document.querySelector("#next-button");
const cashGiven = document.querySelector("#cash-given");
const checkButton = document.querySelector("#check-button");
const message = document.querySelector("#error-message");

// nextButton.addEventListener("click", function validateBillAmount() {
//     // hideMessage();
//     if (billAmount.value === "text") {
//         showMessage("Your bill amount should be a number, not string");
//     } else {
//         showMessage("The bill amount should be greater than 0");
//     }
// });

checkButton.addEventListener("click", function validateBillAndCashAmount(){
    hideMessage();
    if (billAmount.value > 0 ){
        if( cashGiven.value >= billAmount.value ){
            const amountToBeReturned = cashGiven.value - billAmount.value;
            calculateChange(amountToBeReturned);
        } else {
            showMessage("Do you wanna wash plates?");
        }
    } else {
        showMessage("Invalid Bill Amount");
    }
});

function calculateChange(amountToBeReturned){};

function hideMessage(){
    message.style.display = "none";
}

function showMessage(msg){
    message.style.display = "block";
    message.innerText = msg;
}
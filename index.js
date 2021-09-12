const dateOfBirth = document.querySelector("#birthday");
const luckyNumber = document.querySelector("#lucky-num");
const checkButton = document.querySelector("#check-btn");

checkButton.addEventListener('click', function getOutput() {
    console.log(dateOfBirth.value,luckyNumber.value);
})
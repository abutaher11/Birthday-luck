const dateOfBirth = document.querySelector("#birthday");
const luckyNumber = document.querySelector("#lucky-num");
const checkButton = document.querySelector("#check-btn");
const outputBox = document.querySelector("#output-box");


function checkDobIsLucky(){
    const dob = dateOfBirth.value;
    const sum = calculateSum(dob);
    if (dob && luckyNumber.value){
        compareVal(sum, luckyNumber.value)
    }
    else {
        outputBox.innerText = "Please enter both fields to continue";
    }
    
}

function compareVal(sum, luckyNumber){
    if(sum%luckyNumber==0){
        outputBox.innerText = "Your birthday is lucky";
    }
    else {
        outputBox.innerText = "Your make your own luck";
    }
}


function calculateSum(dob){
    dob = dob.replaceAll("-","");
    let sum = 0;
    for(let i=0; i<=dob.length; i++){
        sum = sum + Number(dob.charAt(i));
    }
    return sum;
}

checkButton.addEventListener('click', checkDobIsLucky)
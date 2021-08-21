// This is the phone part calculation 
function updatePhone(isIncreasing) {
    const phoneDigit = document.getElementById('phone-add')
    let phoneAddNumber = phoneDigit.value
    if (isIncreasing == true) {
        // phoneDigit.value = parseInt(phoneAddNumber) + 1;
        phoneAddNumber = parseInt(phoneAddNumber) + 1;
    }
    else if (phoneAddNumber > 0) {
        // phoneDigit.value = parseInt(phoneAddNumber) - 1;
        phoneAddNumber = parseInt(phoneAddNumber) - 1;
    }
    phoneDigit.value = phoneAddNumber;
    // update total phone price 
    const phonePrice = document.getElementById('phone-price')
    phonePrice.innerText = phoneAddNumber * 1229;
}

document.getElementById('plus-phone').addEventListener('click', function () {
    updatePhone(true)
})
// First phone minus part 
document.getElementById('phone-minus').addEventListener('click', function () {
    updatePhone(false)
})

// 2nd phone increase option work 
function phoneCasePrice(increasePhoneCase) {
    const phoneCase = document.getElementById('phone-case')
    let phoneCaseText = phoneCase.value
    if (increasePhoneCase == true) {
        phoneCaseText = parseInt(phoneCaseText) + 1;
        phoneCase.value = phoneCaseText;
    } else if (phoneCaseText > 0) {
        phoneCaseText = parseInt(phoneCaseText) - 1;
        phoneCase.value = phoneCaseText;
    }
    // phone case price 
    const casePrice = document.getElementById('case-price')
    casePrice.innerText = phoneCaseText * 59
}
// phone case plus part 
document.getElementById('phone-case-plus').addEventListener('click', function () {
    phoneCasePrice(true)
})
// phone case minus part 
document.getElementById('phone-case-minus').addEventListener('click', function () {
    phoneCasePrice(false)
})
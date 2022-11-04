document.addEventListener("DOMContentLoaded", function() {
 
    let numBtns = document.querySelectorAll("button.numBtn");
    let calcText = document.querySelector("input.calc-text");
    let processBtn = document.querySelectorAll("button.processBtn");
    let total = 0;
    let submitBtn = document.querySelector("div.submitBtn");
    let totalText = document.querySelector("input.total-text");
    submitBtn.addEventListener('click', function(){
        totalText.value = total;
    });
    for (const btn of numBtns){
        btn.addEventListener('click', function () {
            calcText.value += btn.textContent;
        });
    }
    for (const pBtn of processBtn){
        pBtn.addEventListener('click', function(){
            console.log(pBtn.textContent);
            if (pBtn.textContent === '+' && calcText.value){
                total += parseInt(calcText.value);
                calcText.value = ''
            }
            else if (pBtn.textContent === '-' && calcText.value){
                total -= parseInt(calcText.value);
                calcText.value = ''
            }
            else if (pBtn.textContent === '*' && calcText.value){
                total *= parseInt(calcText.value);
                calcText.value = ''
            }
            else if (pBtn.textContent === '/' && calcText.value){
                total /= parseInt(calcText.value);
                calcText.value = ''
            }
            console.log(total)
        });
    }
 });   
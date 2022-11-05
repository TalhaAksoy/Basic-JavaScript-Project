document.addEventListener("DOMContentLoaded", function(){
    let hourUpBtn = document.querySelector('button.hour-upBtn');
    let minuteUpBtn = document.querySelector('button.minute-upBtn');
    let secondUpBtn = document.querySelector('button.second-upBtn');
    let milisecondUpBtn = document.querySelector('button.milisecond-upBtn');
    let hourText = document.querySelector('span.hour-time');
    let miniuteText = document.querySelector('span.minute-time');
    let secondText = document.querySelector('span.second-time');
    let milisecondText = document.querySelector('span.milisecond-time');
    let hourDownBtn = document.querySelector('button.hour-downBtn');
    let minuteDownBtn = document.querySelector('button.minute-downBtn');
    let secondDownBtn = document.querySelector('button.second-downBtn');
    let milisecondDownBtn = document.querySelector('button.milisecond-downBtn');
    let startBtn = document.querySelector('button.startBtn');
    let stopBtn = document.querySelector('button.stopBtn');
    let resetBtn = document.querySelector('button.resetBtn');

    hourUpBtn.addEventListener('click', function(){
        hourText.textContent = parseInt(hourText.textContent) + 1;
        
    });
    minuteUpBtn.addEventListener('click', function(){
        miniuteText.textContent = parseInt(miniuteText.textContent) + 1;
    });
    secondUpBtn.addEventListener('click', function(){
        secondText.textContent = parseInt(secondText.textContent) + 1;
    });
    milisecondUpBtn.addEventListener('click', function(){
        milisecondText.textContent = parseInt(milisecondText.textContent) + 1;
    });
    hourDownBtn.addEventListener('click', function(){
        if (parseInt(hourText.textContent) > 0)
            hourText.textContent = parseInt(hourText.textContent) - 1;
        
    });
    minuteDownBtn.addEventListener('click', function(){
        if (parseInt(miniuteText.textContent) > 0)
            miniuteText.textContent = parseInt(miniuteText.textContent) - 1;
    });
    secondDownBtn.addEventListener('click', function(){
        if (parseInt(secondText.textContent) > 0)
            secondText.textContent = parseInt(secondText.textContent) - 1;
    });
    milisecondDownBtn.addEventListener('click', function(){
        if (parseInt(milisecondText.textContent) > 0)
            milisecondText.textContent = parseInt(milisecondText.textContent) - 1;
    });
    startBtn.addEventListener('click', function(){
        if (parseInt(hourText.textContent) > 0 || parseInt(miniuteText.textContent) > 0 || parseInt(secondText.textContent) > 0 || parseInt(milisecondText.textContent) > 0)
        {
            const timeInterval = setInterval(function(){
                if (parseInt(milisecondText.textContent) > 0)
                    milisecondText.textContent = parseInt(milisecondText.textContent) - 1;
                if (parseInt(secondText.textContent) > 0)
                {
                    if (parseInt(milisecondText.textContent) === 0 && parseInt(secondText.textContent) > 0)
                    {
                        secondText.textContent = parseInt(secondText.textContent) - 1;
                        milisecondText.textContent = 100;
                    }

                }
                if (parseInt(miniuteText.textContent) > 0)
                {
                    if (parseInt(secondText.textContent) === 0 && parseInt(miniuteText.textContent) > 0)
                    {
                        miniuteText.textContent = parseInt(miniuteText.textContent) - 1;
                        secondText.textContent = 59;
                    }
                        
                }
                if(parseInt(hourText.textContent) > 0)
                {
                    if(parseInt(miniuteText.textContent) === 0 && parseInt(hourText.textContent) > 0)
                    {
                        hourText.textContent = parseInt(hourText.textContent) - 1;
                        miniuteText.textContent = 59;
                    }
                }
            }, 10);
            stopBtn.addEventListener('click', function(){
                clearInterval(timeInterval);
            });
            resetBtn.addEventListener('click', function(){
                hourText.textContent = 0;
                miniuteText.textContent = 0;
                secondText.textContent = 0;
                milisecondText.textContent = 0;
                clearInterval(timeInterval);
            });
        }
    });
});
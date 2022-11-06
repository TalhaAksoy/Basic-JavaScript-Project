document.addEventListener('DOMContentLoaded', function(){
    const hourText = document.querySelector('span.hourText');
    const minuteText = document.querySelector('span.minuteText');
    const secondText = document.querySelector('span.secondText');
    const milisecondText = document.querySelector('span.milisecondText');
    function showTime(){
        const d = new Date();
        let second = d.getSeconds();
        let minute = d.getMinutes();
        let hour = d.getHours();
        let milisecond = d.getMilliseconds();
        hourText.textContent = hour;
        minuteText.textContent = minute;
        secondText.textContent = second;
        milisecondText.textContent = milisecond;
        setTimeout(showTime, 1);
    }
    showTime();
});

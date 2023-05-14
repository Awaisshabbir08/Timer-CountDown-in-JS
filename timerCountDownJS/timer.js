let  endDate = "17 May 2023 02:00 PM";
document.getElementById('end-date').innerHTML = endDate;

let inputs = document.querySelectorAll('input');

function clock(){
    let end = new Date(endDate);
    let start = new Date();
    let diff = (end - start) / 1000;

    if(diff < 0) return;

    let days = Math.floor(diff / 3600 / 24);
    let hours = Math.floor(diff / 3600) % 24;
    let minutes = Math.floor(diff / 60) % 60;
    let seconds = Math.floor(diff) % 60;
    inputs[0].value = days;
    inputs[1].value = hours;
    inputs[2].value = minutes;
    inputs[3].value = seconds;
    
}


setInterval(() => {
    clock(); 
    
}, 1000);
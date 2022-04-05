/* Значение innerHTML миллисекунд */
let value1 = 0;
/* Значение innerHTML секунд */
let value2 = 0;
/* Значение innerHTML минут */
let value3 = 0;

let timer;
let timerWork = false;

let element1 = document.getElementById('milliseconds');
let element2 = document.getElementById('seconds');
let element3 = document.getElementById('minutes');


let elem1 = document.querySelector('.start');
elem1.addEventListener('click', function() {
    if (timerWork) return;
    timerWork = true;
    timer = setInterval(function() {
        test1_1();
    }, 10);
});

let elem3 = document.querySelector('.finish');
elem3.addEventListener('click', function() {
    clearInterval(timer);
    timerWork = false;
});

let elem2 = document.querySelector('.cancel');
elem2.addEventListener('click', test1_2);
function test1_2() {
    value1 = 0;
    value2 = 0;
    value3 = 0;
    element1.innerHTML = '00';
    element2.innerHTML = '00';
    element3.innerHTML = '00';
    clearInterval(timer);
    timerWork = false;
}

function test1_1() {            
    value1 = value1 + 1;
    element1.innerHTML = '0' + value1;
    if (value1 > 9) {
        element1.innerHTML = value1;
    } if (value1 > 99) {
        value1 = 0;
        element1.innerHTML = '0' + value1;                
        value2 = value2 + 1;
        element2.innerHTML = '0' + value2;
        if (value2 > 9) {
            element2.innerHTML = value2;
        } if (value2 > 59) {
            value2 = 0;
            element2.innerHTML = '0' + value2;                    
            value3 = value3 + 1; 
            element3.innerHTML = '0' + value3;
            if (value3 > 9) {
                element3.innerHTML = value2;
            }
            if (value3 > 59) {
                value3 = 0;
                element3.innerHTML = '0' + value3;
            }
        }
    }             
}
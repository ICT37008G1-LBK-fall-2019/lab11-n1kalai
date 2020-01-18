
// დაწერეთ regex-ი რომელიც შეამოწმებს არის თუ არა სწორ ფორმატში ჩაწერილი თარიღი და დრო. სწორი ფორმატია 2019.10.09 13:00:00.1234
let p = document.querySelectorAll('p');
let correct = p[1];
let uncorrect = p[0];
let submit = document.querySelector('.submit');
let input = document.querySelector('.controlNumber');
let date = /[1-2]\d{3}\.(1[0-2]|0[0-9])\.([0-2][0-9]|3[0-1])\s([0-1][0-9]|[2][0-3])\:([0-5][0-9])\:([0-5][0-9])/;


const checkCorrection = (e) => {
    let input = document.querySelector('.controlNumber').value.trim();
    if(input && input.match(date)){
     correct.style.opacity = 1;
     uncorrect.style.opacity = 0;  
   
 
    } else {
     correct.style.opacity = 0;
     uncorrect.style.opacity = 1;
     e.preventDefault();
    

    }
}
input.addEventListener('blur',checkCorrection)
submit.addEventListener('click',checkCorrection);

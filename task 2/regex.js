
// დაწერეთ regex-ი რომელიც შეამოწმებს არის თუ არა სწორ ფორმატში ჩაწერილი თარიღი და დრო. სწორი ფორმატია 2019.10.09 13:00:00.1234
let p = document.querySelectorAll('p');
let correct = p[1];
let uncorrect = p[0];
let submit = document.querySelector('.submit');
let input = document.querySelector('.controlNumber');



const checkCorrection = (e) => {
    let input = document.querySelector('.controlNumber').value.trim();
    if(input && input.match(/^\d{4}(\.)\d{2}(\.)\d{2}(\s{1})\d{2}(\:)\d{2}(\:)\d{2}(\.)\d{4}$/)){
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

let text = document.querySelector('.text').textContent;
let secondText = document.querySelector('.text2');
let newText = text.replace(/([a-zA-Z0-9\-\_\.]{3,50}\@[a-zA-Z]{2,10}\.[a-z]{2,4})|((514|551|555|557|558|559|568|570|571|574|577|591|592|593|595|596|597|598|599)[0-9]{6})/g,'#personaldata#');



    secondText.innerHTML = newText;






// davitriot Text  V
// chavyarot masivshi V
// vipovot emaili V
// vipovot nomeri 
// chavanacvlot  #personaldata# V
// gavxadot text V
// gamovachinot V

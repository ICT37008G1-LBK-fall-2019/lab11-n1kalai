// დაწერეთ regex-ი რომელიც ტექსტში მობილური ტელეფონის ნომრებს da email-ებს იპოვის და ჩაანაცვლებს #personaldata#-თი

let text = document.querySelector('.text').textContent;
let secondText = document.querySelector('.text2');
let textArray = text.split(' ');
let xui = textArray.map((item) => {
    if (item.match(/\w@\w/)){
        item = '<b  style="color:green">' + '#personaldata#' + '</b>';
        
    } else if (item.match(/(514|551|555|557|558|559|568|570|571|574|577|591|592|593|595|596|597|598|599)[0-9]{6}/)) {
        item = '<b style="color:blue">' + '#personaldata#' + '</b>';
    }
    return item;
});

let newText = xui.join(' ');
secondText.innerHTML = newText;




// davitriot Text  V
// chavyarot masivshi V
// vipovot emaili V
// vipovot nomeri 
// chavanacvlot  #personaldata# V
// gavxadot text V
// gamovachinot V
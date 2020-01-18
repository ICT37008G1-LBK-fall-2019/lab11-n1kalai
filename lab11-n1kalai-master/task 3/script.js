let oldTime = document.querySelector('.oldTime').textContent;
let clear = document.querySelector('.clear');
let newTime = oldTime.replace(/([1-2]\d{3})\.(1[0-2]|0[0-9])\.([0-2][0-9]|3[0-1])\s(([0-1][0-9]|[2][0-3])\:([0-5][0-9])\:([0-5][0-9]))/,'$1.$2 $4');
clear.innerHTML = newTime;
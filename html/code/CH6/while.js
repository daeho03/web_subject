// while 문
// 1 : 1월부터 12월까지 출력
// var i = 1;
// while (i < 13){
//     console.log(i);
//     i++;
// }

// 2 : 1부터 10까지의 합을 출력하는 코드
// var sum = 0;
// var i = 1;
// while(i < 11){
//     sum += i;
//     i++;
// }
// console.log(sum);

// 3 : 사용자로부터 입력받은 구구단 출력
// const readline = require('readline');
// const rl = readline.createInterface({
//     input : process.stdin,
//     output : process.stdout,
// });

// var i = 1;
// rl.question('단수를 입력하시오. : ', function(dan){
//     while(i < 10){
//         console.log(dan + " * " + i +  " = " + dan * i);
//         i++
//     }
//     rl.close();
// });
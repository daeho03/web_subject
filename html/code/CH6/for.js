// for 문

// 1 : 기본 for문
// for(var i = 0; i < 5; i++){
//     console.log("javascript");
// }

// 2 : * 10개 출력
// for(var i = 0; i < 10; i++){
//     console.log('*');
// }

// 3 : 100까지의 짝수 전부 출력
// for(var i = 2; i < 101; i+=2){
//     console.log(i);
// }

// 4 : 1부터 10까지의 합
// var sum = 0;
// for(var i = 1; i < 11; i++){
//     sum += i;
// }
// console.log(sum);

// 5 : 2 x 구구단 구하기
// for(var i = 1; i < 10; i++){
//     console.log("2 * " + i + " = " + 2*i);
// }

// 6 : 입력 받은 구구단 출력하기
// const readline = require('readline');
// const rl = readline.createInterface({
//     input : process.stdin,
//     output : process.stdout,
// });

// rl.question('단수를 입력하세요. : ', function(dan){
//     for(var i = 1; i < 10; i++){
//         console.log(dan + " * " + i + " = " + dan * i);
//     }
//     rl.close();
// });

// 7 : 배터리 충전 상태 출력
// for (var i = 0; i < 101; i++){
//     console.log("충전중 : " + i + "%");
// }
// console.log("충전이 완료되었습니다.");

// 8 : for 문의 구성 요소 생략 가능(무한 반복)
// - for 문 시작 시 초기문과 증감문 생략
// var i = 0;
// for (; i < 101;){
//     console.log("충전중 : " + i + "%");
//     i++;
// }
// console.log("충전이 완료되었습니다.");

// 9 : for 문의 구성 요소 생략 가능(2)(무한 반복)
// - for 문에서 모든 구성 요소가 생략되는 경우
// var i = 0;
// for (;;){
//     console.log("충전중 : " + i + "%");
//     i++;
// }
// console.log("충전이 완료되었습니다.");

// 10 : 배열의 데이터 추가
var arr = ["JavaScript", "C", "Python"];

arr.push('ASP.net');
arr.push('C#.net');

for(var i = 0; i < arr.length; i++){
    console.log(arr[i]);
}
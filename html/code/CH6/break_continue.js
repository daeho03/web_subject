// break
// var value = 0;
// while(true){
//     if(value > 100){
//         break;
//     }

//     console.log("value의 값 : " + value);
//     value++;
// }

// console.log("value는 100보다 크다.");

// continue
// var value = 0;
// while(value < 10){
//     value++;
//     if(value % 2 == 0){
//         continue;
//     }

//     console.log("value의 값 : " + value);
// }

// 삼항 연산자 활용 
// 삼항 연산자의 ? 옆에는 continue와 break 사용 불가
// var value = 0;
// while(value < 10){
//     value++;
//     (value % 2 == 0) ? continue :
//     console.log("value의 값 : " + value);
// }

// 구구단 2단부터 9단까지 모두 출력하는 코드
// var dan = 2;
// while(dan < 10){
//     var num = 1;
//     while(num < 10){
//         console.log(dan + "*" + num + "=" + dan * num);
//         num++;
//     }
//     dan++;
// }

// 반복문의 중첩
// var dan = 2;
// while (dan < 10){
//     var num = 1;
//     while(num < 10){
//         console.log(dan + "*" + num + "=" + dan * num);
//         num++;
//     }
//     dan++;
// }

// 레이블 사용
var dan = 2;
outside : while (dan < 10){
    var num = 1;
    while(num < 10){
        if(dan == 6 && num ==1) break outside;
        console.log(dan + "*" + num + "=" + dan * num);
        num++;
    }
    dan++;
}
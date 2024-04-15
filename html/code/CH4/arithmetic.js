// 산술 연산자
// 1 : 기본 산술 연산자
// var a = 3;
// var b = 2;
// console.log('더하기 결과: ' + (a + b));
// console.log('빼기 결과: ' + (a - b));
// console.log('곱하기 결과: ' + (a * b));
// console.log('나누기 % 결과: ' + (a / b));
// console.log('나누기 / 결과: ' + (a % b));
// console.log('거듭제곱 결과: ' + (a ** b));

// 2 : 더하기 연산자의 특별한 기능(1)
// console.log("Hello" + "World");

// 3 : 더하기 연산자의 특별한 기능(2)
// console.log('긴급출동' + 119);
// console.log('1' + 1);

// 4 : 더하기 연산자의 특별한 기능(3)
// 다른 타입 앞에 +를 붙이면 숫자형으로 형 변환이 일어남
// console.log(+"1024" + 1);
// console.log(+true);
// console.log(+false);

// 5 : 빼기, 곱하기, 나누기 연산자의 특별한 기능
// 피연산자가 문자열이라도 내용이 숫자형 데이터면 내부적으로 숫자형으로 형변환 후 연산
// console.log('10' - 2);
// console.log('10' * 2);
// console.log('10' / 2);
// console.log('10' % 3);
// console.log('2' ** 2);

// 할당 연산자
// 1 : 기본 할당 연산자
// var a = 3;
// var b = a + 2;
// var c = b - a;
// console.log(a);
// console.log(b);
// console.log(c);

// 2 : 복합 할당 연산자
// 자신의 변수에 연산하고 그 결과를 자신의 변수에 저장하는 경우가 흔함
// var a = 3;
// a = a + 2;
// console.log(a);
// 코드를 단축하기 위해 복합 할당 연산자 활용 - +=, -=, *=, /=
// var b = 3;
// b += 3;
// console.log(b);
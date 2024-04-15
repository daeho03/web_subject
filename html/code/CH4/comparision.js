// 비교 연산자
// 1 : 비교 연산의 기준(1)
// var a = 10;
// var b = 20;
// console.log(a > b);
// console.log(a == b);
// console.log(a != b);

// 2 : 비교 연산의 기준(2)
// 피연산자가 둘다 문자열인 경우 맨 왼쪽 알파벳 부터 비교
// console.log('A' < 'B');
// console.log('ABCD' > 'ABDC');

// 3 : 동등 연산자와 일치 연산자
// var size1 = 1024;
// var size2 = '1024';
// console.log(size1 == size2);
// console.log(size1 === size2);

// 4 : 서로 다른 타입끼리 비교
// 비교 값의 자료형이 서로 다르면 내부에서 전부 숫자형으로 형변환
// console.log(300 > '200');
// console.log('10' > 9);
// console.log(true == 1);
// console.log(true == '1');
// console.log(false == 1);
// console.log(false == '0');
// console.log(2 == '002');

// 5 : null과 undefined 비교
// console.log(null == undefined);
// console.log(null === undefined);

// 6 : 조건부 연산자
// var age = 30;
// var result = age >= 19 ? "성인입니다" : "더 자라렴";
// console.log(result);

// 논리 연산자
// 1 : && 연산자의 기본 원리(1)
// console.log(true && true);
// console.log(true && false);
// console.log(false && true);
// console.log(false && false);

// 2 : && 연산자의 기본 원리(2)
// var id = '20201525';
// var pw = '1111';
// var result = (id == '20201525' && pw == '1111') ? "로그인되었습니다" : "아이디 또는 비밀번호가 틀렸습니다";
// console.log(result);

// 3 : && 연산자의 단축 평가
// 왼쪽 -> 오른쪽으로 평가 진행 / 중간에 평가 결과가 나오면 바로 평가 결과 반환
// console.log(false && 'sejong');
// console.log(true && 'sejong');
// console.log('sejong' && false);
// console.log('sejong' && true);
// console.log('sejong' && '1111');
// console.log(null && false);

// 4 : || 연산자의 기본 원리(1)
// console.log(true || true);
// console.log(true || false);
// console.log(false || true);
// console.log(false || false);

// 5 : || 연산자의 기본 원리(2)
// var age = 30;
// var result = (age > 65 || age < 7)
// ? "지원 대상입니다." : "지원 대상이 아닙니다";
// console.log(result);

// 6 : || 연산자의 단축 평가
// 왼쪽 -> 오른쪽으로 평가 진행 / 중간에 평가 결과가 나오면 바로 평가 결과 반환
// console.log(false || 'sejong');
// console.log(true || 'sejong');
// console.log('sejong' || false);
// console.log('sejong' || true);
// console.log('sejong' || '1111');
// console.log(null || false);

// 7 : ! 연산자의 기본 원리(1)
// console.log(!false);
// console.log(!true);

// 8 : ! 연산자의 기본 원리(2)
// 피연산자가 불리언형이 아닌 경우도 !연산자를 사용하면 불리언형으로 변환하여 반환
// console.log(!'sejong');
// console.log(!null);
// console.log(!0);

// 9 : nullish 병합 연산자 ??
// var id = "sejong";
// var result = id ?? null ? "아이디가 입력되었습니다" : "아이디가 입력되지 않았습니다.";
// console.log(result);

// 연산자 우선순위
// 1 : 괄호 사용
// 우선순위를 바꿀 수 있고 가독성을 높일 수 있다.
// var val = 10;
// val = (val*3) + (10/5) - 5;
// console.log(val);
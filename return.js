const arr = ["회사소개", "제품소개", "고객센터", "위험해"]; //arr 값을 저장할 주소만 저장
arr[1] += "다시들어가볼까?" // 값을 바꿈

const newarr = [...arr]  // Array값이 바뀌었음 -> 새로고침 (복사 )

const arr2 = ["네이버", "다음", "구글"] //arr2라는 땅주소저장
const arr3 = [ ...arr2] 

const obj = {}
const obj2 = { ...obj}

console.log(arr)

// 변수  x를 써서 forin문으로 콘솔출력

for (x in arr) {
    console.log(x, arr[x]);
}
for (var x = 0; x < arr.length; x++) {
    console.log(x, arr[x]);
}

let arry = new Array();
arry[0] = "회사소개";
arry[100] = "제품소개";


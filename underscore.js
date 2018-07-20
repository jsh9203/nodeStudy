var _ = require('underscore');   // 언더스코어는 _ 를 변수이름을 사용하는것이 관례
var arr = [3,6,9,1,12];


console.log(arr[0]);
console.log(_.first(arr));

console.log(arr[arr.length-1]);
console.log(_.last(arr));
// toán tử giải : dùng trong array và object
const listNumber = [1, 2, 3, 4, 5];

// rest parameter (...)
function totalNumber(a = 0, ...b ) {
  console.log(a); // 1
  console.log([...b]); // [2,3,4,5]
}
totalNumber(...listNumber);
//console.log([...listNumber]);

var test = [1, 2];
var number = 1;
// object
// console.log(test +number);

listUser = [
  {
    name: "Trần Vũ Huỳnh Đức",
    age: 20,
  },
  {
    name: "Trần Vũ Huỳnh Đức2",
    age: 21,
  },
];

console.log(...listUser);

let listObj =  (item)=>{
    item.forEach(element => {
        console.log(element)
    });
}
listObj([...listUser]);
console.log('------')

for(var i = 0 ; i < [...listUser].length ;i++){
    console.log(listUser[i]);
}
// Trả về 2 object hoặc duyệt ra từng phần tử
console.log(...listUser);
// trả về 1 mảng chứ 2 object hoặc trả ra 2 object
console.log([...listUser]);


let listAge = [
  1,2,3,4
];
let name = [
  'Đức',
  'Huỳnh',
]
let address = [
  {
    add : 'Ok'
  },
  {
    add : 'ok2'
  }
]

// spread sytax
let listFinal = [...listAge ,...name,...address];



console.log(listFinal);


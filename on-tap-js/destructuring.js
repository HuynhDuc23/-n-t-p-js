// listUser = [
//     {
//         name : 'Trần Vũ Huỳnh Đức',
//         age : 18 
//     },
//     {
//         name : 'Trần Anh Đông ',
//         age :25 
//     }
// ];

// // Destructuring Objects và Destructuring Arrays.

// // var a, b;
// // [a, b] = [1, 2]
// // console.log(a, b); //1 2

// //or 
// // rest parameter
//  const [a, b,c] = [1, 2]
// console.log(a, b,c); //1 2 undefined


// objName = {
//     name : 'Trần Vũ Huỳnh Đức',
//     age : 18 ,
//     address:'Bình Sơb'
// }
// // console.log(objName.name);
// // console.log(objName.name);
// // console.log(objName.name);

// const {name} = listUser[0];
// console.log(name); // Trần Vũ Huỳnh Đức

// const {age} = listUser[1];
// console.log(age); // 25

// const {age} = listUser[0];
// console.log(age); // 25 => error


// arr
// const [a1,b2]=[2,1];
// console.log(a1,b2);

// obj
// const {a3, b3, c3} = {a3: 1, b3: 2, c3: () => 3}
// console.log(a3, b3, c3)// 1, 2, () => 3

// var a, b;
// [a, b] = [1, 2]
// console.log(a, b); //1 2

// const [a,b] = [1,2];
// console.log(a,b)

const [a, b, c] = [1, 2, 3, 4, 5]
console.log(a, b, c); // 1, 2, 3
// Khai Báo Biến
// let , const , var , automatically
// var sum = ()=>{
//     var a = 0 ;
//     console.log('ok');
// }
// console.log(a);
// Khi khai báo tất cả các biến trong function thì nó 
// chỉ có phạm vi trong function

if(true){
    b = 0 ;
}
console.log(b);

// default và var : có phạm vi truy cập global 
// let const : phạm vi truy cập trong một khối
for( a = 0 ; a <5 ;a++){
   // Biến a : dùng let const thì sẽ không gọi được
   // default và var có thể sử dụng bến ngoài
}
console.log(a);


// hosting : gọi trước khi khai báo 
console.log(c);
var c = 8;
console.log(c);
// nó sẽ đưa var c -> lên đầu sau đó nó sẽ gọi -> log -> c = undefind-> gọi
c = 8;

var age = 18 ;
age =  19+1 ;
console.log(age);

// chỉ có var có tính hosting
console.log(tuoi);
var tuoi =20 ;
console.log(tuoi);

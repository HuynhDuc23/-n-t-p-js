
// declaration có tính hosting 
console.log(sum(2,3));

function sum(a,b){
    return a + b ;
}

// arrows functions
// không có tính hosting
var sum2 =  (a,b)=>{
    return a + b ;
}
console.log(sum2(2,3));

// expresstions functions

// không có tính hosting
let exp  =  function (a,b){
    return a + b ;
}
console.log(exp(2,3));

console.log("----")

Array.prototype.forEach2 = function (callback){
    for(var i = 0 ; i < this.length ;i++){
        (callback(this[i]));
    }
    
}

function arraySum(){
   [...arguments].forEach2(function(item){
     console.log(item+1)
   })
    console.log(...arguments);
}

arraySum(1,2,3,4,56);

let listUserNumbers = [1,2,3,4,5];
console.log('-----New')

var listsNew = [];
Array.prototype.forEach3 = function(callback){
    for(let i = 0 ; i < listUserNumbers.length ;i++){
         callback(this[i]);
    } 
    listUserNumbers =  listsNew ;
}
function total () {
    listUserNumbers.forEach3(function(item){
        console.log(item+1);
        listsNew.push(item+1);
    })
    console.log(listsNew);
    console.log(listUserNumbers);
}
total();

// Tóm Lại Thèn foreach nó xử lý trên chính mảng gốc
// arrows function không có đối tượng arguments








console.log("==== Conditional Statements ====");
if(20 === 20){
    console.log("Both are equal");
}else{
    console.log("Both are not equal");
}
console.log("======");
console.log("== Switch it ==");
let statusCode = 200;
switch (statusCode) {
    case 200:{
        console.log("OK");
        break;
    }
       

case 201:{
    console.log("CREATED");
    break;
}

case 404:{
    console.log("OK");
    break;
}
    
    default:
        console.log("Invalid status code");
        break;
}

console.log("====Looping====");

console.log("FOR LOOP :- ");
let students = [{roll:1,name:"Bhumi",age:21},{roll:2,name:"Bhagyashri",age:23}];
for (let i=0;i<students.length;i++){
    const student = students[i];
    console.log(student.name)
}
console.log("=====")


console.log("WHILE LOOP :- ");
let index=0;
while(index<students.length){
    const s = students[index]
    console.log(s);
    index++;

}
console.log("=====")

console.log("=== Function ===");
function fun1(){
    console.log("In fun1");
}

fun1();
function fun2(num1, num2){
    console.log(num1+num2);
}
fun2(10,20);
function fun3(name,age=22){
    const msg = name + " your age is " + age;
    console.log(msg);
}
fun3("Bhumi",24);
function fun4(num1,num2){
    console.log(num1 + num2)
        return "Hi";
    }
let res=fun4(22,22);
console.log(res);
console.log("=====")

let id=10;

let API_URL='localhost:8080/get-user/'+id

let url = `localhost:8080/get-user/${id}`

console.log(API_URL);
console.log(url);

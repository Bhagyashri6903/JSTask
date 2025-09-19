//How to create date object
// let date = new Date(); //current date time
// console.log(date);

// console.log("====");
// let previous = new Date("2025-09-18"); //A UTC date for "2025-09-18" (midnight UTC)
// console.log(previous);

// console.log("====");
// let next=new Date(2025,8,26); //A local date for 2025-09-26 (using 0-based month index).
// console.log(next);

// console.log("====");
// let milis= Date.now(); //The current timestamp in milliseconds since Jan 1, 1970.
// console.log(milis);

// console.log("====");
// let miliDate=new Date(1758256522034)

// console.log("diff");
// console.log((Date.now() - 1758256522034) / 1000); //A calculated difference

// console.log(miliDate); //The date for 1758256522034 milliseconds since epoch.

console.log("==== Get specific part ====");

let now = new Date();
console.log("Current Time :" + now.toLocaleTimeString());
console.log("Year : " + now.getFullYear());
console.log("Month :" + now.getMonth());
console.log("Date :" + now.getDate());

console.log("HH : " + now.getHours());
console.log("MM : " + now.getMinutes());
console.log("SS : " + now.getSeconds());
console.log("SSS : " + now.getMilliseconds());
console.log("Day :"  + now.getDay());

console.log("===========");
console.log("==== Set specific part ====");

let current = new Date();
current.toLocaleTimeString();

//current.setFullYear(2027);
console.log("After 2 years :" + current.getFullYear());

console.log("===========");
console.log("==== Date Formatting ====");
console.log("Current : " + current);
console.log("   Date String:" + current.toDateString());
console.log("ISO String: " + current.toISOString());
console.log("Locale string:" + current.toLocaleString());
console.log("Time string:" + current.toTimeString());

console.log("==== Custom Formatting ====");
function formatDate(date){

    //YYYY-MM-DD HH:MM:SS

    return (date.getFullYear() + '-'+date.getMonth()+'-'+date.getDate()+' '+date.getHours()+':'+date.getMinutes()+':'+date.getSeconds());
}
let formatedDate = formatDate(current);
console.log(formatedDate);
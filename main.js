   


// String metodlari

// 1-ci task

// let birinci =prompt("Melumati qeyd edin:");
// let ikinci=birinci.slice(0,1).toUpperCase();
// console.log(ikinci);


// 2-ci task

// let birinci= prompt("Melumati qeyd edin: ");
// let netice= birinci.slice(0, 1).toUpperCase() + birinci.slice(1);
// console.log(netice); 


// 3-cu task

// let birinci = prompt("Melumati qeyd edin:");
// if(isNaN(birinci)){
//     console.log("string");
// }else{
//     console.log("Number");
// };


// 4-cu task

// let birinci =prompt("Melumati qeyd edin: ");
// if(isNaN(birinci)){
//     let arr=[];
//     arr.push(birinci);
//     console.log(arr);
// }else{
//     console.log("Numberdir deye add olunmur");
// };


// 5-ci task

// let birinci = prompt("Melumati qeyd edin:");
// let arr=[];
// let ikinci =birinci.split("");
// arr.push(ikinci);
// console.log(ikinci);



// 6-ci task

// let birinci = "Baki gozel seher mehriban diyar";
// let ikinci =birinci.split(' , ')
// let arr = [ikinci];
// console.log(arr);



// 7-ci task

// let birinci ="Baki gozel seher mehriban diyar";
// let ikinci = birinci.split(" ").join("----");
// console.log(ikinci);


// 8-ci task

// let birinci = prompt("Melumati daxil edin: ");
// let netice =birinci.charAt(birinci.length-1).toUpperCase();
// console.log(netice);


// 9-cu task

// let birinci =prompt("Melumati daxil edin: ");
// let netice = birinci.charAt(birinci.length-1).toUpperCase();
// let birlesdir =netice.concat(birinci);
// console.log(birlesdir);









//? Task click edende sozu tapib bg renglemek

// let input = document.querySelector("input");
// let button = document.querySelector("button");
// let words = document.querySelector("p");


// button.addEventListener("click", () => {
//     let searchText = input.value.trim();
//     words.innerText = searchText;
//     words.style.color = "red";

//     input.value = "";
// });








//? Task click edende sozu tapib bg renglemek

// let button = document.querySelector("button");
// let p = document.querySelector("p");
// let input1 = document.querySelector("#input1");
// let input2 = document.querySelector("#input2");
// let input3 = document.querySelector("#input3");




// button.addEventListener("click", (e) => {
//     e.preventDefault();

//     let value1 = parseFloat(input1.value);
//     let value2 = parseFloat(input2.value);
//     let value3 = parseFloat(input3.value);

//     if (isNaN(value1) || isNaN(value2) || isNaN(value3)) {
//         p.innerText = "Zehmet olmasa duzgun ededleri daxil edin";
//     } else {
//         let minValue = Math.min(value1, value2, value3);
//         let maxValue = Math.max(value1, value2, value3);

//         p.innerText = "Ən kiçik ədəd: " + minValue + ", Ən böyük ədəd: " + maxValue;
//     }
// });






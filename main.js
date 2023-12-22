   


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







// Task2
// let arr =["php","php","css","css","script","script","html","html","java"];
// let arr1 = [...new Set(arr)];

// console.log(arr1);



// Task 5
// let arr =[34,2,6,10,365,89,44];

// let max = Math.max(...arr);
// let min = Math.min(...arr);

// console.log(max);
// console.log(min);


// Task6
// let arr =["Neriman","Orxan","Allahverdi","Esmer","Ferhad","Nezrin"];

// arr.forEach((array)=>{
//     if(array.includes("N") || array.includes("M")){
//         console.log(array);
//     }
// });


// Task 7

// let colors =["Blue","Orange","Yellow","Red"];

// colors.forEach((color)=>{
//     let verilen =(color + " " + color.length);
//     console.log(verilen.split(","));
// });




// let colors =["yellow","green","red"];
// let color =[];

// colors.map(item=>{
//     color.push(item,item.length)
//     return item
// });

// console.log(color);


// colors.map(item=>(
//     color.push(item,item.length)
// ));

// console.log(color);



// colors.forEach(item=>{
//     color.push(item,item.length)
// });
// console.log(color);





// Obyektler

// let obj ={
//     name:'Tural',
//     surname:'jafarov',
//     age:27,
//     'university 0f chiga':'BDU'
// };

// delete obj.name
// console.log(obj);



// let ob = new Object();
//  ob.name="Tural";
//  ob.age=27;
//  console.log(ob);





// let a =prompt("Daxil ele");
// console.log(a);
// console.log(obj[a]);









// Inputnan verilenlerin add olunmasi

let input1 = document.querySelector("#input1");
let input2 = document.querySelector("#input2");
let btn1 = document.querySelector(".btn1");
let btn2 = document.querySelector(".btn2");
let btnRemove = document.querySelector(".btnRemove");

let arr = ["Kia", "Mercedes", "BMW"];
let verilenler = arr.join(", ");
let divElement = document.createElement("div");
divElement.textContent = verilenler;
divElement.setAttribute("style", "padding:50px")
document.body.appendChild(divElement);

btn1.addEventListener("click", (e) => {
    e.preventDefault();
    birinci();
  
});

btn2.addEventListener("click", (e) => { 
     e.preventDefault();
     ikinci();
});

 btnRemove.addEventListener("click", (e) => { 
    e.preventDefault();
     ucuncu();
    });




function sil() {
    input1.value = input2.value = "";
}

function birinci(){
    arr.push(input1.value.trim());
    verilenler = arr.join(", "); 
    divElement.textContent = verilenler; 
    sil();
};


function ikinci(){
    arr.unshift(input1.value.trim());
    verilenler = arr.join(" ,"); 
    divElement.textContent = verilenler; 
    sil();
}


arr.forEach(item=>{
    if(item==input2.value){
        item.remove();
    }
});
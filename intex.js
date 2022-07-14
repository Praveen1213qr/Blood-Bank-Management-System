   //alert("pk windows hello world");
    //console.log("pk windows");

    //*operators in javascripts

    //1.Arithmatic operators
  //  var x = 4;
   // var y = 36;

   // console.log("addition",x+y);
    //console.log("multiplicatio",x*y);
    //console.log("substraction",x-y);
    //console.log("division",x/y);
    
//     2.Assignment operators

//     var z = x;
//    z +=2;
//    console.log(z);

//     3.comparison operators

    // let a = 4;  
    // let b = 5;
    
    // console.log(a==b);
    // console.log(a>=b);
    // console.log(a<=b);
    // console.log(a < b);

    //4.Logical operators

    // console.log(true && true);
    // console.log(true && false);
    // console.log(false && true);
    // console.log(false&& false);

    // console.log(true || true);
    // console.log(true || false);
    // console.log(false || true);
    // console.log(false || false);

    // console.log(! true);
    // console.log(! false);
     
    //data types

    //1.primitive data types

    //i. numbers

   // let num1 = 3;
    //console.log(num1);

    //ii. boolean

    //  let a = true;
    //  let b = false;
    //  console.log(a);
    //  console.log(b);

    //iii. null

    // let n=null;
    // console.log(n)

    //symbol


    //iv. string

    //let str1 = "ram";
    //console.log(str1);

    //v. undefine

    // let und1;
    // console.log(und1);

    //2.reference data types

    
    // let marks = {ram:35, shyam:56, mohan:78}
    // console.log(marks)
    // console.log(marks["ram"]);

 //i. array

//  let arr1 = [2, "ram", null, undefined, [1,2,3,4,5,6]];   
//  console.log(arr1);
//  console.log(arr1[2]);

//ii. conditionals

// let age = 18;
// if(age>18){
//     console.log("you can drink liquor");
// }
// else if(age=18){
//     console.log("you will drink liqour first time");
// }
// else{
//     console.log("you can't drink liqour");
// }

//day 7 :tuesday
//switch

// let day = 5;
// switch(day){
//   case 0:
//   document.write ("Today is sunday")
//   break;

// case 1 :
//   document.write ("Today is Monday")
//   break;

// case 2:
//   document.write ("Today is tuesday")
//   break;

// case 3:
//   document.write ("Today is wednesday")
//   break

// case 4:
//   document.write ("Today is thursday")
//   break;

// case 5:
//   document.write ("Today is friday")
//   break;

// case 6:
//   document.write ("Today is saturday")
//   break;

// default:
//   document.write("please enter valid week day")
// }


// let month = 4;

// switch(month){
//   case 1:
//     document.write("jan")
//     break;

//     case 2:
//     document.write("feb")
//     break;

//     case 3:
//     document.write("march")
//     break;
//     case 4:
//     document.write("april")
//     break;
//     case 5:
//     document.write("may")
//     break;
     

// }

//methid of Array
//let myarr = ["ram","potato", 23, null, true];
//console.log(myarr.length)
//pop
//myarr.pop()
//console.log(myarr)
//push
//myarr.push("rat", "2")
//console.log(myarr)
//shift
//myarr.shift("ram")
//console.log(myarr)

//unshift
//myarr.unshift("shyam")
//console.log(myarr)

//string
// let mystring = "smriti is mad"
// console.log(mystring.length)
// console.log(mystring.indexOf("mad"))
// console.log(mystring.slice(0, 7))
// console.log(mystring.replace("smriti", "mushkan"))

//loop
//for loop
//let arr = [1, 2, 3, 4, 5, 6, 7];
// for(let i = 0; i<arr.length;i++){
//   if(i==2){
//     continue;
//     //break;
//   }
//   console.log(arr[i]);
// }


//while loop
// let arr = [1, 2, 3, 4, 5, 6, 7];
// let j = 13;
// // while(j<arr.length){
// //   console.log(arr[j]);
// //   j++
// //}
// do{
//   console.log(arr[j]);
//   j++
// }while(j<arr.length)

//function
// function avg(a,b,c){
//   c=(a+b+c)/2;
//   return c;
// }
// c1 = avg(5, 7, 5)
// console.log(c1)

//aero function
// avg = (a,b) =>{
//   c = (a+b)/2;
//   return c;
// }
// c1 = avg(6, 3)
// console.log(c1)

//date
// let mydate = new Date();
// console.log(mydate)
// console.log(mydate.getTime());
// console.log(mydate.getFullYear());

//DOM(document ) Manupulation
//let elem = document.getElementById("myBtn")
//  let elem = document.getElementsByClassName("container");
//  console.log(elem);

// elem[0].style.background = "yellow";

//elemClass[0].ClassList.add("bg");
//elemClass[0].ClassList.remove("bg");

// let tn = document.getElementsByTagName("div");
// console.log(tn);

// createdElement = document.createElement("p");
// createdElement.innerText = "This is a created ppk"
// tn[0].appendChild(createdElement);

function clicked(){
  console.log("btn clicked");
}

window.onload = function(){
  console.log("website is khushi iwweee pagl")
}

//set time interval
clicked = ()=>{
  console.log("i am your king");
};
//setTimeout(clicked, 3000);
setInterval(logKaro,2000);







    
    

//1ch masala
// let sonlar = +prompt() 
// if (sonlar % 2 == 0) {
//     alert("Sonlar juft")}
//     else {
//         alert ("Sonlar toq")}

// console.log(sonlar)

//2-masala
// let sonlar = +prompt() 
// if ( sonlar === 0) {
//     alert("sonlar 0 ga teng")
// }
// if (sonlar % 2 == 0) {
//     alert("Sonlar juft")}
//     else {
//         alert ("Sonlar toq")}

// console.log(sonlar)

//3-masala 

// function sonlar(son, son1) {
//     if (son > son1) {
//         alert("1-son katta")
//     } else if(son < son1){
//         alert("2-son katta")
//     }else {
//         alert("sonlar teng")
//     }




// }

// sonlar(8, 8)

//4-masaala
// function baholar(baho) {
//     if (baho <= 59) {
//         alert("imtihondan otmadi baho 2")
//     } else if(59 <baho <= 69){
//         alert("imtihondan otdi baho 3")
//     }else if (70<baho<=89){
//         alert("imtihondan otdi baho 4")

//     }else if (90<baho<=100) {
//         alert("imtihondan otdi 5")
//     }

// }
// baholar(55)


// 5- masala


// 5-savol
// function tekshiruv() {
//     const togriLogin = "ustudy2025";
//     const togriParol = "U9frontend";

//     const login = prompt("Loginni kiriting:");
//     const parol = prompt("Parolni kiriting:");

//     if (login === togriLogin && parol === togriParol) {
//         console.log("Muvaffaqiyatli");
//     } else if (login !== togriLogin && parol === togriParol) {
//         console.log("Kiritilgan login xato");
//     } else if (login === togriLogin && parol !== togriParol) {
//         console.log("Kiritilgan password xato");
//     } else {
//         console.log("Kiritilgan login va password xato");
//     }
// }

// tekshiruv();

// 2-normativ 1-masala

// let arr = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20]
// let res = arr.filter((n)=> n%2===0)
// console.log(res);

// 2-masala


// function hisoblash(n) {
//   let sum = 0
//   for (let i = 1; i <= n; i++) {
//     sum += i
//   }
//   return sum
// }

// const n = n2(prompt("n sonini kiriting:"))
// const sum2 = hisoblash(n)
// console.log("1 dan " + n + " gacha bo‘lgan sonlar yig‘indisi: " + natija);

// 3-masala

// function musbatyigindi(array) {
//   let sum = 0
//   for (let i = 0; i < array.length; i++) {
//     if (array[i] > 0) {
//       sum += array[i]
//     }
//   }
//   return sum;
// }

// let sonlar = [7, 5, 2, 6, 9, 4, 12, 3, 11, 18]
// let natija = musbatyigindi(sonlar)

// console.log("Musbat sonlar yig'indisi:", natija);

// 4-masala

// function 3va5karrali() {
//   let result = []

//   for (let i = 1; i <= 100; i++) {
//     if (i % 3 === 0 && i % 5 === 0) {
//       result.push(i)
//     }
//   }

//   console.log(result.join(" "));
// }

// // 3va5karrali()


// 5-masala


// let arr = [2, -8, 2, 1, 5, 4, -15, 9, 13];

// let engkotta = Math.max(...arr);
// let engkichik = Math.min(...arr);

// console.log(`kattasi ${engkotta}, kichigi ${engkichik}`);


// 1-masala\
// let num = [3,8,9,7,5]
// let res = num.at(-1) 
// let res1 = res ** 2
// let res2 = num.pop()
// let res3 = num.unshift(res1)
// console.log(num)



// 2- masala
// let arr = [9, 8, 5, 1, 6, 4]
// let res = arr.filter((n) => n % 2 === 0)
// let res1 = res.reduce((acc, cur) => acc + cur)
// console.log(res1);


// 3 chi masala

// let arr = [2, -8, 9, 1, -15, 3, 0, 5]
// let res = arr.filter((n) => n > 0)
// let res2 = res.reduce((acc, cur) => acc * cur)
// console.log(res2);

// 4 chi masala

// let arr = [6, 1, 3, 5, 6, 2, 0, 4]
// let res = arr.filter((n) => n > 2)
// console.log(res.map((n) => n * n));
    
// 5 chi masala

// let arr = [1, [2, 3], [4, [5, 6, 7]]]
// let arr2 = arr.flat(2)
// let res = arr2.filter((n) => n % 2 === 1)
// console.log(res);



// 1- masala
// let arr =["jasmina","Muhammadiyor", "Bek","Yusufxon", "Asad", "Jhon"]
// let res = arr.filter((n) => 5 < n.length)
// console.log(res);

// 2-masala
// let arr = [1,2,3,4,5]
// let max = Math.max(...arr)
// let min = Math.min(...arr)

// let res = max - min
// console.log(res);


// 3-masala
// let name = ["seVinCh","ibrohiM","miRKomil","JURABEK","abdulaziz"]

// let res = name.map((n) => n.charAt(0).toUpperCase() + n.slice(1))


// console.log(res);



// 4-masala


// let arr = [16, 20, 8, 2, 12, 27, 9, 13];
// let last = arr[arr.length - 1];

// let res = arr.find(x => x < last) || 0;

// console.log(res);

// 5 chi masala

// let arr1 = [1, 2, 2, 3, 4, 4, 5];
// let res1 = arr.filter(n => arr.indexOf(n) === arr.lastIndexOf(n));

// console.log(res);


// 5 - normativ 
// 1- masala  

// let obj = {
//     name: "Palonchi",
//     age: 0,
//     country: "Earth"
// }

// obj.name = "Ibrohim"
// obj.age = 16
// obj.country = "Uzbekistan"

// console.log(obj);

// 2-masala


// let obj = {
//     valyuta: "dollar",
//     miqdor: 100
//   };
//   let kartoshkaNarxi = 2; //1kg ga 
//   let colaNarxi = 5;      // 1 donaga
//   let kartoshkaKg = 10;  // necha kg
//   let colaSoni = 6;      // necha dona
//   let jamiXarajat = (kartoshkaKg * kartoshkaNarxi) + (colaSoni * colaNarxi);
//   obj.miqdor = obj.miqdor - jamiXarajat;
//   console.log(obj); 
  
//   3- masala 

// let obj = { Anvar: 19, Salim: 21, Jasur: 13 };
// let maxName = "";
// let maxAge = 0;

// for (let name in obj) {
//   if (obj[name] > maxAge) {
//     maxAge = obj[name];
//     maxName = name;
//   }
// }

// console.log(`${maxName}: ${maxAge}`); 

// 4-masala

// let obj = { name: "John", age: 22, city: "Tashkent" };
// let arr = Object.entries(obj);

// arr = arr.map(([key, value]) => {
//   if (key === "age") return [key, 30];
//   if (key === "city") return [key, "New York"];
//   return [key, value];
// });

// console.log(arr);

// 5-masala

// let obj = { Salim: 60, Ali: 50, Kimsan: 90 };
// let maxBall = 100; 

// let newObj = {};

// for (let name in obj) {
//   let percent = (obj[name] / maxBall) * 100;
//   if (percent >= 60) {
//     newObj[name] = percent;
//   }
// }

// console.log(newObj); 




// 6-normativ

// 1-masala


// let obj = {
//     name: "John",
//     age: 22,
//     city: "Tashkent",
//     country: "Uzbekistan",
//     isMarried: false
// }

// console.log(Object.keys(obj));


// 2-masala
//     let obj = {
//         boyi: 15,
//         eni: 10
//     }
//    let res = obj.boyi*obj.eni
//    console.log( " to'rtburchakni yuzi " ,res , " kvadrat metr");



// 3-masala
// let obj = {
//     soliq: 20,
//     kamunal: 12,
//     prava: 980,
//     havo: 3,
//     qanchaKotarildi: function(foiz) {
//         return {
//             soliq: this.soliq * foiz / 100,
//             kamunal: this.kamunal * foiz / 100,
//             prava: this.prava * foiz / 100,
//             havo: this.havo * foiz / 100
//         };
//     }
// };

// let natija = obj.qanchaKotarildi(15);
// console.log(natija);





// 4-masala

// let obj = {
//   Salim: 50,
//   Vali: 87,
//   Ali: 12,
//   deleteUser: function(name) {
//     delete this[name];
//   }
// };

// obj.deleteUser("Vali");

// console.log(obj);

// 5-masala
 
// let obj = {
//   olam: 7,
//   mandarin: 4,
//   banan: 6,
//   apelsin: 1
// };

// for (let key in obj) {
//   if (obj[key] % 2 !== 0) {
//     delete obj[key];
//   }
// }

// console.log(obj);

// 7-normativ


// 1-masala
// let obj = {Salim: 25, Ali: 7, Malika: 2};

// for (let key in obj) {
//   obj[key] += 2;
// }

// console.log(obj);


// 2-masala
// const users = [
//   { name: "Ali", age: 20 },
//   { name: "Vali", age: 25 },
//   { name: "Sami", age: 22 }
// ];

// for (const user of users) {
//   console.log(`${user.name} : ${user.age}`);
// }



// 3-masala
// let obj= { a:10, b:"hello",c:5, d:true};
// let res = Object.entries(obj).filter(([key, value]) => typeof value === 'number');
// console.log(res);

// 4-masala

// let person = {
//     name: "Lola",
//     age: null,
//    job: "Teacher",
//    city: null
// }

// let res = Object.entries(person).filter(([key, value]) => value !== null && value !== undefined);
// console.log(res);


// 5-masala
// const user = [
// {
//     name: "Ali",
//     age: 17 },
// {
//     name: "Vali", 
//     age: 19 },
// {
//     name: "Sami",
//     age: 21 }
// ]
       
// let res = user.filter((n) => n.age >= 18);
// console.log(res.map((n) =>  n.name + " " +   n.age));





// eski normativ masalalar


// 1-masala

// function birinchiTakrorlanganHarf(matn) {
//   for (let i = 0; i < matn.length; i++) {
//     let harf = matn[i];
  
//     if (matn.indexOf(harf, i + 1) !== -1) {
//       return harf;
//     }
//   }
//   return null;
// }

// console.log(birinchiTakrorlanganHarf("javascript")); 
// console.log(birinchiTakrorlanganHarf("frontend"));   
// console.log(birinchiTakrorlanganHarf("abcdef"));     


// 2-masala
// function sortByAge(arr) {
//   return arr.sort((a, b) => a.age - b.age);
// }

// console.log(sortByAge([{ age: 30 }, { age: 20 }, { age: 40 }]));

// console.log(sortByAge([{ age: 25 }, { age: 22 }, { age: 28 }]));

// console.log(sortByAge([{ age: 50 }, { age: 10 }, { age: 40 }]));


// 3-masala

// for (let i = 1; i <= 20; i++) {
//   if (i % 3 === 0 && i % 5 === 0) {
//     console.log("FizzBuzz");
//   } else if (i % 3 === 0) {
//     console.log("Fizz");
//   } else if (i % 5 === 0) {
//     console.log("Buzz");
//   } else {
//     console.log(i);
//   }
// }

// 4-masala
// function qiymatIndexiniTop(arr, qiymat) {
//   const index = arr.indexOf(qiymat);
//   return index !== -1 ? index : -1;
// }

// console.log(qiymatIndexiniTop([1, 5, 7, 9], 7));   
// console.log(qiymatIndexiniTop([10, 20, 30], 15));  
// console.log(qiymatIndexiniTop([4, 6, 8], 6));      

// 5-masala

// function palindromTekshir(satr) {
//   const teskari = satr.split('').reverse().join('');
//   return satr === teskari;
// }

// console.log(palindromTekshir("madam"));    
// console.log(palindromTekshir("racecar"));  
// console.log(palindromTekshir("hello"));    

// 8- normativ

// 1-masala

// let son1 = 10
// let son2 = 20
// let amal = prompt("qaysi amalni qilmoqchisiz  */+-")

// try {
//     if (amal === "+"){
//         console.log(son1 + son2)
//     } else if ( amal === "-") {
//         console.log(son1-son2);
        
//     } else if (amal === "*") {
//         console.log(son1*son2);
//         } else if (amal === "/") {
//             console.log(son1/son2);
//             } else {
//                 console.log("Iltimos, quyidagi amallardan birini tanlang: +, -, *, /");
//                 }
//                 } catch (error) {
//                     console.log("Xatolik paydo bo'ldi");
//                     }

// 2-masala
    

// const username = " Vali"
// const email = " textexample.com"
// const age = 8

// try {
//     if (username.length < 3) {
//         throw new Error("foydalanuvchi ismi 3 ta harfdan kam bolmasin");
//         }
//         if (email.includes("@")) {
//             throw new Error("email @ va . belgilari yoq" );
//             }
//             if (age < 7) {
//                 throw new Error("Foydalanuvchi 7 yoshdan kichik ");
//                 }
//                 console.log("foydalanuvchi ro'yhatdan o'tdi");
//                 } catch (error) {
//                     console.log(error.message); 
//                 }



// 3-masala
// function checkType(value) {
//   if (Array.isArray(value)) {
//     console.log(value , "Bu array");
//   } else if (typeof value === "string") {
//     console.log(value ,"Bu string");
//   } else if (typeof value === "number") {
//     console.log(value ,"Bu number");
//   } else if (typeof value === "boolean") {
//     console.log(value ,"Bu boolean");
//   } else if (typeof value === "object") {
//     console.log(value ,"Bu object");
//   } else {
//     console.log(value ,"Noma'lum tur");
//   }
// }

// checkType(5);          
// checkType([1, 2]);     
// checkType("Salom");    
// checkType(true);       
// checkType({a: 1});     

// 4-masala

// const user = {
//   name: "Ali",
//   age: 25,
//   email: "ali@example.com",
//   isStudent: true
// };

// function validateUser(user) {
//   const errors = [];

  
//   if (typeof user.name !== "string") {
//     errors.push("Name string bo'lishi kerak.");
//   } else if (user.name.length < 3) {
//     errors.push("Name kamida 3 ta harfdan iborat bo'lishi kerak.");
//   }

  
//   if (typeof user.age !== "number") {
//     errors.push("Age number bo'lishi kerak.");
//   } else if (user.age < 7) {
//     errors.push("Age 7 yoki undan katta bolishi kerak.");
//   }

 
//   if (typeof user.email !== "string") {
//     errors.push("Email string bo'lishi kerak.");
//   } else if (!user.email.includes("@") || !user.email.includes(".")) {
//     errors.push("Email '@' va '.' belgilarini oz ichiga olishi kerak.");
//   }

//   if (typeof user.isStudent !== "boolean") {
//     errors.push("isStudent boolean tipida bolishi kerak.");
//   }

//   if (errors.length > 0) {
//     console.log("Xatoliklar:");
//     errors.forEach((error) => console.log("- " + error));
//   } else {
//     console.log("Foydalanuvchi malumotlari togri!");
//   }
// }

// validateUser(user);


// // exam1 
// 1-masala

// function makeNegative(num) {
//     if (num > 0 ) {
//         console.log(-num);
        
//     } else {
//         console.log(num);
        
//     }
// }
//  makeNegative(5)
//  makeNegative(-3)
//  makeNegative(0)


//  2-masala


// function evenOrOdd(number) {
//  if (number% 2 == 0) {
//     console.log("even");
    
//  } else {
//     console.log("Odd");
    
//  }
// }

// evenOrOdd(5)
// evenOrOdd(4)
// evenOrOdd(120)

// 3-masala

// function removeChar(str) {
// let arr= str.split("")
// let res1 = arr.pop()
// let res2 =arr.shift()
// let res3 = arr.join("")
//     console.log(res3);
    
// }
// removeChar("hello")
// removeChar("abc")
// 4-masala
// function solution(str){
//  let res = str.split("")
//  let res2 = res.reverse()
//  console.log(res2);
 
// }
// solution("world")
// 5-masala

// function positiveSum(arr){
//    let res1= arr.filter((n)=> n > 0);
//    let res = res1.reduce((a,b)=> a+b);
//     console.log(res);
    
// }

// positiveSum([1,-2, 3,-5,-8,4])

// 6-masala
// function repeatStr(n , s) {
//     if (n > 0){
//        let res =  s.repeat(n);
//         console.log(res);
        
//     } else {
//         let res2= s.repeat(1)
//         console.log(res2);
        
//     }
    
// }
// repeatStr(3, "ha")

// 7-masala

// function getMiddle(s){
// if (s.length()%2 ==1 ) {
//   let res = s.slice(s.length()/2,s.length()/2+1)
//   console.log(res);
  
    
// } else {
// console.log(s.slice(1,3));
 
// }

// }
// getMiddle("test")
// getMiddle("testing")

// 8-masala

// function findShort(s){
//  let arr = s.split(" ");
//  let min = arr[1].length;
// for (let i = 1; i < arr.length; i++) {
//  if (arr[i].length < min) {
//  min = arr[i].length; }
//  console.log(min);
            
// }
// }
// findShort(" I Love Javascript Frontend")
// findShort("Simple and easy tasks")





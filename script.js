
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




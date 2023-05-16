// 1. Գրել ֆունկցիա, որը կվերադարձնի true եթե տրված արժեքը սիմետրիկ է, հակառակ դեպքում կվերադարձնի false: Խնդիրը գրել երկու տարբեր եղանակներով, առաջին եղանակում առանց մեթոդների բացառությամբ length մեթոդի և երկրորդ եղանակում միայն մեթոդներով։

// let x =  'sfs';
// function sim (arr) {
//     let y = '';
//     for(let i = x.length - 1; i >= 0; i--){
//         y = x[i]
//     }
//     return(y === x)
// }
// console.log(sim(x));



// let text = 'abba'

// let x = text.split('').reverse().join('');

// if(text === x ){
//     console.log(`text simetric `);
// }else {
//     console.log(`text not simetric`);
// }

// 2. Գրել ռեկուրսիվ ֆունկցիա որը կստանա թվերի զանգված և կվերադարձնի նոր զանգված, որի մեջ կլինեն տրված զանգվածից զույգերը։


// function rec(arr, i=0, newArr=[]) {
//     if(i > arr.length){
//         return
//     }
//     if(arr[i] % 2 === 0 ){
//         newArr.push (arr[i])
//     }
//     rec(arr,i+=1,newArr)
//     return newArr
// }

//  console.log(rec([1,2,3,4,5,6,7,8,18,32]));

// 3. Ունենք տեքստ որի մեջ կան բաց թողնված բառեր որոնց փոխարեն դրված է "_" նշանը և ունեն զանգված որի մեջ կան բառեր։ Գրել ֆունկցիա որը կստանա հետևյալ փոփոխականները որպես արգումենտ և կվերադարձնի տեքստի վերջնական արդյունքը։
// Փոփոխականները`
// let words = ["first", "succeed", "again"];
// let sentence = "If at _ you don’t _, try, try _.";

// function fullText(words,sentence) {
//     for(let i = 0; i < words.length; i++){
//         for(let j = 0; j < sentence.length; j++){
//             if(sentence[j] === '_'){
//                 sentence = sentence.replace('_', words[i]);
//                 break
//             }
//         } 
//     }
//     return sentence
// }

// console.log(fullText(words,sentence));

// 4. Ունենք հետևյալ բազմաչափ զանգվածը` [4, -2, 3, 9, 2, 6, -8, 12]։ Գրել ֆունկցիա, որը տրված զանգվածից կհեռացնի բացասականները և կսորտավորի դրականները։ Վերադարցնել սորտավորված զանգվածը և այն տարրերը, որոնք հեռացվել են զանգվածից։ Պատասխան՝
// Sorted array: [2,3,4,6,9,12]
// Removed numbers: [-2,-8]


//   let arr =  [4, -2, 3, 9, 2, 6, -8, 12];

//    for(let i = 1; i < arr.length; i++){
//     for(let j = 0; j < arr.length; j++){
//         if(arr[i] < arr[j]){
//             [arr[i],arr[j]] = [arr[j],arr[i]]
//         }
//     }
//    }
//    console.log(arr);
  
  
// 5․ Ունենք հետևյալ զանգվածը՝ [6, 9, -5, 12, 3, -1, 6, 9, -2, 64, 15, -3, 36]; Գրել class, որը կունենա arr պարամետր, կունենա getRoots մեթոդ, որը կվերադարձնի նոր զանգված, որի մեջ կլինեն այն թվերը, որոնք ունեն արմատ, կունենա arithmeticAverage մեթոդ, որը կվերադարձնի զանգվածի միջին թվաբանականը, կունենա ascendingSortExceptNegitves մեթոդ, որը կվերադարձնի նույն զանգվածը սորտավորված ըստ աճման կարգի, բայց բացասականները պետք է մնան նույն ինդեքսում։

// class Arr {
//     constructor(arr){
//         this.arr = arr
//     }
//     getRoots () {
//         let newArr = []
//         for (let i = 0; i < this.arr.length; i++){
//             if((this.arr[i] ** 0.5) % 1 === 0){
//                 newArr.push(this.arr[i])
//             }
//         }
//         return newArr 
//     }
//     arithmeticAverage (){
//         let sum = 0
//         for(let i = 0; i < this.arr.length; i++){
//             sum += this.arr[i]
//         }
//         return Math.round(sum / this.arr.length)
//     }
//     ascendingSortExceptNegitves (){
//         for(let i = 0; i < this.arr.length; i++){
//             for (let j = 0; j < this.arr.length; j++){
//                 if(this.arr[i] < 0) {
//                     continue
//                 }else{
//                     if(this.arr[i] > this.arr[j]){
//                         [this.arr[i],this.arr[j] < this.arr[j],this.arr[i] ]
//                     }
//                 }
//             }
//         }
//         return this.arr
//     }
// }

// const newArr = new Arr ([6, 9, -5, 12, 3, -1, 6, 9, -2, 64, 15, -3, 36]);
// console.log(newArr.getRoots());

// 6. Գրել ֆունկցիա, որը որպես պարամետրեր կստանա k բնական թիվ և divisor, ֆունկցիան պետք է վերադարձնի k-ից մեծ ամենամոտ թիվը, որը բազմապատիկ է divisor-ին:
// const dush = (k, divisior) => {
//     for(let i = k + 1; i < k * divisior; i++){
//         if(i % divisior === 0)
//         return i
//     }
// }
// console.log(dush(44,4));
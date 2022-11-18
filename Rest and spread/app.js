const arr = ['bangla', 'english', 'arabic', ['japanis', 'hindi'], 'British'];
const [bangla, english, , ...rest] = arr;
//console.log(bangla,english,rest); rest

/* const newarr=[...arr]
//console.log(newarr)
arr.push("islam")
console.log(arr)

console.log(newarr)
 */
const Object = {
    classTeacher: "Mr X",
    students: 89,
    goodAt: {
        bangla: {
            book: 100,
            read: 10
        },
        hindi: 30,
        English: 20,
        arabic: 19
    }
}
 const Object2 = {
    classTeacher:"Mr: Y",
    institute:"govt school"
 }

 const mix={...Object,...Object2}
 //console.log(mix)
// function sumOfAllNumber(...numbers){
// return numbers.reduce((sum,crr)=> sum + crr,0);
// }


// console.log(sumOfAllNumber(1,2,3,4,10,50))











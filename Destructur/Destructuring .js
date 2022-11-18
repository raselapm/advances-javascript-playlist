/* const arr=['bangla','english','arabic',['japanis','hindi'],'British'];

const [one,two,,four]=arr;
console.log(one,two,four)
console.log(one,two,four[1])

 */
const Object={
    classTeacher: "Mr X",
    students    : 89,
    goodAt      :{
        bangla:{
            book:100,
            read:10
        },
        hindi  :30,
        English:20,
        arabic:19
    }
}
// const{classTeacher:teacher,goodAt:{hindi,bangla:{book}}}=Object
// console.log(teacher,book);

// real use destucturing 
function fun(option){ 
    let math=option.math;
    let bangla=option.bangla;

    return  [bangla + math,math-bangla]
}
const result=fun({math:90, bangla:40})
let [sum,sub] = result
console.log(sum,sub);





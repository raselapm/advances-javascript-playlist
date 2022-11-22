/* const map=new Map([
    [1,"A"],
    [2,"B"],
    [3,"C"],
    [4,"D"],
]);

//console.log(map);
//console.log(map.values());      must be function call (*** )
//console.log(map.entries());
//console.log(map.delete(1));
// console.log(map.set(5,"E"));      set values
// console.log(map.get(2));
// console.log(map.keys());
// console.log(map.has(5));       // true/false return
// map.forEach(value=>console.log(value))
console.log(map)
//console.log(map); */


const obj = [
    {
        id: 1,
        title: "title_1",
        description: "des_1"
    }, {
        id: 2,
        title: "title_2",
        description: "des_2"
    }, {
        id: 3,
        title: "title_3",
        description: "des_3"
    }
]

/* function findIndex(id){
    return obj.find((item)=>item.id === id)
}

console.log(findIndex(2)); */

const map = new Map([
    [1, {
        id: 1,
        title: "title_1",
        description: "des_1"
    }],
    [2, {
        id: 2,
        title: "title_2",
        description: "des_2"
    }],
    [3, {
        id: 3,
        title: "title_3",
        description: "des_3"
    }]

])


console.log(map.get(2));





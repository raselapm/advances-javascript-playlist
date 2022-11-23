/* let arr=[2,3,4,5,2,9,3];
let set=new Set(arr);
console.log(set.has(2));



 */
function removedublicate(arr) {
    /* let newArr = []
    for (let i = 0; i < arr.length; i++) {
        const element = arr[i];
        if (!newArr.includes(element)) {
            newArr.push(element);
        }}
    return newArr;   */
    let set=new Set(arr);
    console.log([...set])
}
removedublicate([2, 3, 4, 5, 2, 9, 3])








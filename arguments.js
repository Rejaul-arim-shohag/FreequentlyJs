function addNum(num1, num2){
    let sum = 0;
    for(let i=0; i<arguments.length; i++){
        const num = arguments[i];
        console.log(num)
        sum = sum+num;
    }
    return sum;
}
const result = addNum(34, 56, 45, 76,78);
arguments[2] = 90;
console.log(result)
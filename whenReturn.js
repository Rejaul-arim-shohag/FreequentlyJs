function evenify(number){
    let result;
    if(number%2==0){
        result = number;
    } else{
        result = number*2;
    }
    return result;
}
// const evenifyResult = evenify(3)
// const squreResult= evenifyResult*evenifyResult;
// console.log(squreResult);

function evenifyAll(nums){
    let even_array = [];
    for(let i=0; i<nums.length; i++){
        const num = nums[i];
        let result= evenify(num);
        even_array.push(result);
    }
    return even_array;
}
const nums =[12, 13, 14, 5, 16]
const evenifresult = evenifyAll(nums);
console.log(evenifresult);

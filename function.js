//Sum of Array number 
function sumOfArrayNumber(inputArray){
    let sum = 0;
    for(let i=0; i<inputArray.length; i++){
        sum = sum+inputArray[i];
        console.log(sum)
    }
};

const karimArray = [12, 34, 56, 34];
// console.log(sumOfArrayNumber(karimArray));


//array number double and sum all array element
function arrayDoubleNum(number){
    let sum = 0;
    for(let i = 0; i<number.length; i++){
        const arrayDouble = number[i]*2;
        sum = sum+arrayDouble;
    } return sum;
}


//array element double and push double number in a new array
function numberDoubleOfArray(num){
    let doubleArray= [];
    for(let i=0; i<num.length; i++){
        const number = num[i];
        if(number%2 ===0){
            doubleArray.push(number)
        } else{
            const doubleNum = num[i]*2;
            doubleArray.push(doubleNum);
        }
    }
    return doubleArray;
}
const singleArray = [12, 45, 67, 90, 91];
const result =  numberDoubleOfArray(singleArray);
// console.log(result)

// function evenOrOdd(number){
//    if(number%2==0){
//        console.log(number +"is even")
//    } else{
//        console.log(number+ "is odd")
//    }
// }
const friendAge = [12, 13, 14, 15, 16, 17, 18, 19]
for(let i = 0; i<friendAge.length; i++){
    const age = friendAge[i];
    evenOrOdd(age)
}


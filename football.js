// function footballPoint(wins, draws, losses){
//     const winPoints = wins*3;
//     const drawsPoints = draws*1;
//     const lossesPoints = losses*0;
//     const totalPoints = winPoints+drawsPoints+lossesPoints;
//     return totalPoints;
// };
// const bercelona = (6, 7, 2);
// const bercelonPoint = footballPoint(bercelona);
// console.log(bercelonPoint)
// function total(num1, num2, num3){
//     const first = num1*3;
//     const second = num2*1;
//     const third = num3*0;
//     const totalResult = first + second + third;
//     return totalResult;
// }
// const myPoints = total(2,3, 4)
// console.log(myPoints)

//football points
function footballPoints(wins, draws, losses){
    const winResult = wins*3;
    const drawsResult = draws*1;
    const lossesResult = losses*0;
    const totalPoints = winResult+drawsResult+lossesResult;
    return totalPoints;
}
const brasil = footballPoints(3, 4, 6);
console.log(brasil)
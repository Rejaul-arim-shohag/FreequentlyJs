
function explain_Callback(name, age, task){
    console.log(`Hello ${name}`)
    console.log(`your ${age}`);
    task()
   
};

function washHand(){
    console.log("Wash your hand")
};

function takeShower(){
    console.log("Take shower")
}
const karim = explain_Callback("karim", 12, washHand);
const shohag = explain_Callback("shohag", 13, takeShower);



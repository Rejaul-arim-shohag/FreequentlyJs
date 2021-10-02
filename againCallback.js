function callback(name, age, work, vaccine){
    console.log(`Mohammad ${name} how are you???`);
    console.log(`you are ${age} years old`);
    work();
    vaccine();
};
//vaccine parameter
function wishVaccine1(){
    console.log("I will not push vaccine in my body:::")
};
function wishVaccine2(){
    console.log("All ready I have pushed vaccine in my body ")
}



//work parameter
function work1(){
    console.log("Must be push vaccine no 1")
};

function work2(){
    console.log("Must be push vaccine no 2")
};

callback("Mohammad Rejaul karim", 21, work1, wishVaccine1);
callback("Mahabub Alam babul", 50, work2, wishVaccine2)
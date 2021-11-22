

const input = document.getElementById("input");
console.log(input);
const submit = document.getElementById("submit");
const result = document.getElementById("result");
const gpa = document.getElementById("GPA");

const mathExamNumber = input;

if(mathExamNumber>79 ){
    console.log('A+')
}
else if(mathExamNumber<80, mathExamNumber>69 ){
    console.log('A')
}
else if(mathExamNumber<70, mathExamNumber>59){
    console.log('A-')
}
else if(mathExamNumber<60, mathExamNumber>49){
    console.log('B')
}
else if(mathExamNumber<50, mathExamNumber>39){
    console.log('C')
}
else if(mathExamNumber<40, mathExamNumber>33){
    console.log('D')
}
else{
    console.log('Fail')
}
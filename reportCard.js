var letterGrade;
var class1 = prompt("What is your first class?");
var class1Avg = testAverage();

classGrade(class1Avg);
document.write(class1Avg);
GPACalculator(class1Avg);

var class2 = prompt("What is your second class?");
var class2Avg = testAverage();

classGrade(class2Avg);
document.write(class2Avg);
GPACalculator(class2Avg);

var class3 = prompt("What is your third class?");
var class3Avg = testAverage();

classGrade(class3Avg);
document.write(class3Avg);
GPACalculator(class3Avg);

var class4 = prompt("What is your fourth class?");
var class4Avg = testAverage();

classGrade(class4Avg);
document.write(class4Avg);
GPACalculator(class4Avg);

//Define functions below here
function GPACalculator(grade){
  var GPA;
  if (grade >= 93) {
    GPA = "4.0";
  }
  else if(grade >= 85){
    GPA = "3.0";
  }
  else if(grade >= 75){
    GPA = "2.0";
  }
  else if(grade >= 67){
    GPA = "1.0";
  }
  else if(grade <= 66){
    GPA = "0.0";
  }
  document.write(GPA);
  return GPA;
}
function testAverage(){
  var test1 = Number(prompt("What is your first test score percentage?"));
  var test2 = Number(prompt("What is your second test score percentage?"));
  var test3 = Number(prompt("What is your third test score percentage?"));
  var test4 = Number(prompt("What is your fourth test score percentage?"));
  var testCombined = ((test1 + test2 + test3 + test4) /4);
  return testCombined;
}
function classGrade(grade){
  
  var letterGrade;
  if (grade >= 93) {
    letterGrade = "A";
  }
  else if(grade >= 85){
    letterGrade = "B";
  }
  else if(grade >= 75){
    letterGrade = "C";
  }
  else if(grade >= 67){
    letterGrade = "D";
  }
  else if(grade <= 66){
    letterGrade = "F";
  }
  
  document.write(letterGrade);
  return letterGrade;
}

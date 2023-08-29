function getReport()
{

    var grade = "";  //declare a variable for grade
    var  result="";  //declare a variable for result

    var maths_m = document.getElementById('maths').value;
    var cnn_m = document.getElementById('cnn').value;
    var os_m = document.getElementById('os').value;
    var at_m = document.getElementById('at').value;
    var coa_m = document.getElementById('coa').value;
    
    var totalMarks = maths_m - (- cnn_m) - (- os_m) - (- at_m) - (- coa_m);
    
    var averageMarks = totalMarks / 5;  
    
    var cgpa = "";

    if (averageMarks >= 90) {
        cgpa = 9.0;
    } else if (averageMarks >= 80) {
        cgpa = 8.5;
    } else if (averageMarks >= 70) {
        cgpa = 7.0;
    } else if (averageMarks >= 60) {
        cgpa = 6.5;
    } else if (averageMarks >= 50) {
        cgpa = 6.0;
    } else if (averageMarks >= 40) {
        cgpa = 5.0;
    } else {
        cgpa = 0.0;
    }
    switch(
            (averageMarks > 60 && averageMarks <= 100) ? 1 : 
            (averageMarks > 50 && averageMarks < 60) ? 2 : 
            (averageMarks > 40 && averageMarks < 50) ? 3 : 0 
          )
            {
                case 1 :grade = "A";result="First Class";break;
                case 2 :grade = "B"; result="Second Class";break;
                case 3 :grade = "C"; result="Third Class";break;
                case 0 :grade = "D"; result="Fail";break;
            }
            
    document.getElementById('txtTotalMarks').value = totalMarks;
    document.getElementById('txtAvgMarks').value = averageMarks;
    document.getElementById('txtGrade').value = grade;
    document.getElementById('txtResult').value = result;
    document.getElementById('txtCGPA').value = cgpa;
}
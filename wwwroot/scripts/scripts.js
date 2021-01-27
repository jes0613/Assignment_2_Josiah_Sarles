$(document).ready(function () {
$("#btn1").click(function () {
    //Declares all variables
    let afVals = [];
    let fTotalGPA;
    let sletGrade;


    // Gets all the user input from the input boxes, checks if the value is null
    // if the vallue is null, tell the user they need to input a percentage in all of the boxes.
  
    afVals.push(parseInt($("#assignment").val()));
    afVals.push(parseInt($("#group").val()));
    afVals.push(parseInt($("#quiz").val()));
    afVals.push(parseInt($("#exam").val()));
    afVals.push(parseInt($("#intex").val()));


    // if getting input from the user worked runs the rest of the program
        fTotalGPA = totalPerct(afVals);
        fTotalGPA = round(fTotalGPA, 2);
        sletGrade = convertToletter(fTotalGPA)

        // prints a color coded svg circle corresponding to the grade received
        printCircle(fTotalGPA);

        //outputs the final precentage and letter grade for the user to view
        document.getElementById("results").innerHTML = "Your final percentage is " + fTotalGPA.toFixed(2) + " and your letter grade is " + sletGrade;
        alert("Your final percentage is " + fTotalGPA.toFixed(2) + " and your letter grade is " + sletGrade);
});


//Sums the values from the afVals array and returns the total back to the calcGPA function
function totalPerct(afVals) {
    let ftotalGPA = 0;

    for (let i = 0; i < afVals.length; i++) {
        ftotalGPA += afVals[i];
    }

    return ftotalGPA;
}

/*
Function that takes the final gpa and rounds it to 2 decimals, returns that
value to the calcGPA function
*/
function round(value, decimals) {
    return Number(Math.round(value + 'e' + decimals) + 'e-' + decimals);
}



/*
Function that takes the grade input and converts it to a letter grade equivalent
then returns the value as the variable sletGrade back to the calcGPA function
*/
function convertToletter(fGrade) {
    let sletGrade;

    if (fGrade >= 93) {
        sletGrade = "A";
    }
    else if (fGrade >= 90 && fGrade < 93) {
        sletGrade = "A-";
    }
    else if (fGrade >= 87 && fGrade < 90) {
        sletGrade = "B+";
    }
    else if (fGrade >= 83 && fGrade < 87) {
        sletGrade = "B";
    }
    else if (fGrade >= 80 && fGrade < 83) {
        sletGrade = "B-";
    }
    else if (fGrade >= 77 && fGrade < 80) {
        sletGrade = "C+";
    }
    else if (fGrade >= 73 && fGrade < 77) {
        sletGrade = "C";
    }
    else if (fGrade >= 70 && fGrade < 73) {
        sletGrade = "C-";
    }
    else if (fGrade >= 67 && fGrade < 70) {
        sletGrade = "D+";
    }
    else if (fGrade >= 63 && fGrade < 67) {
        sletGrade = "D";
    }
    else if (fGrade >= 60 && fGrade < 63) {
        sletGrade = "D-";
    }
    else if (fGrade >= 0 && fGrade < 60) {
        sletGrade = "E";
    }
    return sletGrade;
}

/*
Function that takes the final GPA value and displays a 100 height cicle. A circle of green if
the percentage is equal to or higer than 83% or a "B", yellow if the gpa is between 70 (C-) and 83 (B-),
or a red circle if the gpa is below 70 (D+)
*/
function printCircle(fTotalGPA) {

    document.getElementById("svg").style.height = "100px";

    if (fTotalGPA >= 83) {
        document.getElementById("myCircle").style.display = "block";
        document.getElementById("myCircle").style.fill = "green";
    }
    else if (fTotalGPA >= 70 && fTotalGPA < 83) {
        document.getElementById("myCircle").style.display = "block";
        document.getElementById("myCircle").style.fill = "yellow";
    }
    else {
        document.getElementById("myCircle").style.display = "block";
        document.getElementById("myCircle").style.fill = "red";
    }
}

/*
Function that clears all things that the user inputted, clears the circle
and percentage display, sets the dropboxes to empty, and sets the focus as the assignment input box
*/
$("#resetbtn").click(function () {
    let asCats = ["assignment", "group", "quiz", "exam", "intex"]

    document.getElementById("myCircle").style.display = "none";
    document.getElementById("myCircle").style.fill = "none";
    document.getElementById("svg").style.height = "0px";
    document.getElementById("results").innerHTML = ("Input your grade percentages into the calculator and " +
        "then click the \"Calculate\" button to display your final percentage and letter grade results here");

    for (let i = 0; i < asCats.length; i++) {
        document.getElementById(asCats[i]).value = "";
    }
    $("assignment").focus();
});

/*
Function that sets the focus as the assignment input box when the body of
the webpage loads and sets the style height of the svg circle to 0px
and shows some info about the webage to the user
*/


});
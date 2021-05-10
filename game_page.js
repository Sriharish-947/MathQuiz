function send()
{
    number1 = document.getElementById("num1").value;
    number2 = document.getElementById("num2").value;
    actualAns = parseInt(number1) * parseInt(number2);
    console.log(actualAns);
    questionNum = '<h4>' + number1 + " X " + number2 + '</h4>';
    inputBox= '<br> Answer : <input type="text id="inputBox"';
    checkButton = '<br><br><button class="btn btn-info" onclick="check()"> Check </button> ';
    rowArea = questionNum + inputBox + checkButton;
    document.getElementById("output").innerHTML = rowArea;
    document.getElementById("num1").value = "";
    document.getElementById("num2").value = "";
}
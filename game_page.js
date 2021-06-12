function send()
{
    number1 = document.getElementById("num1").value;
    number2 = document.getElementById("num2").value;
    actualAns = parseInt(number1) * parseInt(number2);
    console.log(actualAns);
    questionNum = '<h4>' + number1 + " X " + number2 + '</h4>';
    inputBox= '<br> Answer : <input type="text" id="inputBox_Value">';
    checkButton = '<br><br><button class="btn btn-info" onclick="check()"> Check </button> ';
    rowArea = questionNum + inputBox + checkButton;
    document.getElementById("output").innerHTML = rowArea;
    document.getElementById("num1").value = "";
    document.getElementById("num2").value = "";

}
questionTurn = "player1"
answerTurn = "player2"
player1Score = 0;
player2Score = 0;

var player1Name = localStorage.getItem("player1");
var player2Name = localStorage.getItem("player2");

function check()
{
    getAnswer = document.getElementById("inputBox_Value").value;
    console.log(getAnswer);
    if (getAnswer == actualAns)
    {
        if(answerTurn == player1Name)
        {
            player1Score = player1Score + 1;
            document.getElementById("player1Score").innerHTML = player1Score;
        }
        else
        {
            answerTurn = player2Name 
            player2Score = player2Score + 1;
            document.getElementById("player2Score").innerHTML = player2Score;
        }
        // switching question turn
        if(questionTurn == player1Name)
        {
            questionTurn = player2Name
            document.getElementById("playerQuestion").innerHTML = "Question Turn -" + player2Name;
        }
        else
        {
            questionTurn = player1Name
            document.getElementById("playerQuestion").innerHTML = "Question Turn -" + player1Name;
        }
        
    document.getElementById("output").innerHTML = "";
    }    
} 
player1_name = localStorage.getItem("player1_name");
player2_name = localStorage.getItem("player2_name");

player1_score = 0;
player2_score = 0;

document.getElementById("player1_name").innerHTML = player1_name + ":";
document.getElementById("player2_name").innerHTML = player2_name + ":";

document.getElementById("player1_score").innerHTML = player1_score + ":";
document.getElementById("player2_score").innerHTML = player2_score + ":";

document.getElementById("player_question").innerHTML = "Question Turn-" + player1_name;
document.getElementById("player_answer").innerHTML = "Answer Turn-" + player2_name;

function sendNumbers(){

    number1 = document.getElementById("number1").value;
    number2 = document.getElementById("number2").value;
    actual_answer = parseInt(number1) * parseInt(number2);

    question = "<h4 style='color: white;'>" + number1 + "x" + number2 + "</h4>";
    input_box = "<br> Answer : <input type = 'text' id='answer'>";
    check_button = "<br><br> <button class ='btn btn-info' onclick = 'check()' style='border: none; outline: none; height: 40px;width: 100px;background: linear-gradient(45deg, #8174f2, #4937e6, #130491);outline:black;color: #fff;-size: 18px;border-radius: 20px;'>Check</button>";

    row = question + input_box + check_button;

    document.getElementById("output").innerHTML = row;

    document.getElementById("number1").value = "";
    document.getElementById("number2").value = "";

}

question_turn = "player1";
answer_turn = "player2";

function check(){

    get_answer = document.getElementById("answer").value;
    if(get_answer == actual_answer){

        update_player1_score = player1_score + 1;
        document.getElementById("player1_score").innerHTML = update_player1_score;

    }
    else{

        update_player2_score = player2_score + 1;
        document.getElementById("player2_score").innerHTML = update_player2_score;

    }

    if(question_turn == "player1"){

        question_turn = "player2";
        document.getElementById("player_question").innerHTML = question_turn;

    }
    else{

        question_turn = "player1";
        document.getElementById("player_question").innerHTML = question_turn;

    }

    if(answer_turn == "player1"){

        answer_turn = "player2";
        document.getElementById("player_answer").innerHTML = answer_turn;

    }
    else{

        answer_turn = "player1";
        document.getElementById("player_answer").innerHTML = answer_turn;
        
    }

}
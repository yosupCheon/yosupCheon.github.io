let userVal;
let randVal;
document.getElementById("button-submit").addEventListener("click", compare);

const getRandomNum=()=>{
    return Math.floor(Math.random()*11);
}

function compare () {
    userVal = document.getElementById("user-input").value;
    randVal = getRandomNum();
    document.getElementById("correct-result").innerHTML = randVal;

    if (isNaN(userVal-1)){
        userVal=12;
    }

    document.getElementById("result").innerHTML = matchDetermine(userVal, randVal);
}

function matchDetermine (num, guess) {
    if (parseInt(num)===(guess)){return 'Guessed Correctly!';}
    else if (isNaN(parseInt(num)) || parseInt(num) < 0 || 10 < parseInt(num) ){
        return 'please enter a valid integer';}
    else {return' Wrong Guess...';}
}
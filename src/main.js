let userVal;
let randVal;
document.getElementById("button-submit").addEventListener("click", compare);

function compare () {
    userVal = document.getElementById("user-input").value;
    randVal = getRandomNum();
    document.getElementById("computer-result").innerHTML = randVal;
    document.getElementById("result").innerHTML = matchDetermine(userVal, randVal);
}

const getRandomNum=()=>{
    return Math.floor(Math.random()*11);
}

function matchDetermine (num, guess) {
    if (parseInt(num)===guess){return 'Guessed Correctly!';}
    else if (isNaN(parseInt(num)) || parseInt(num) < 0 || 10 < parseInt(num) ){
        return 'please enter a valid integer';}
    else {return' Wrong Guess...';}
}
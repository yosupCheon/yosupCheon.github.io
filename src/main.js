let temp;
let temp2;
document.getElementById("button-submit").addEventListener("click", compare);

function compare () {
    temp = document.getElementById("user-input").value;
    temp2 = getRandomNum();
    document.getElementById("computer-result").innerHTML = temp2;
    document.getElementById("result").innerHTML = matchDetermine(temp, temp2);
}

const getRandomNum=()=>{
    return Math.floor(Math.random()*11);
}

function matchDetermine (num, guess) {
    if (parseInt(num)===guess){return 'Guessed Correctly!';}
    
    else if (isNaN(parseInt(num)) || parseInt(num) < 0 || 10 < parseInt(num) ){
        return 'please enter a valid integer';
    }
    
    else {return' Wrong Guess...';}
}
const magicNumber = Math.floor(Math.random() *100 + 1);
let guesses= 0;
document.getElementById("submitButton").onclick = () => {
    let guess = document.getElementById("guessed").value;
    guesses += 1;
        if (guess == magicNumber){
            window.alert("COngratulations, You've got the Magic Number");
        }else if( guess > magicNumber){
            window.alert("Too high");
        }else if(guess < magicNumber){
            window.alert("Too low");
        }
}

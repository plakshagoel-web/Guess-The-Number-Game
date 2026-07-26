// Random number between 1 and 100
let randomNumber = Math.floor(Math.random() * 100) + 1;

// HTML elements
let guessInput = document.getElementById("guess");
let message = document.getElementById("message");
let button = document.getElementById("guessBtn");
let theme=document.getElementById("theme");
let star=document.getElementById("star");
star.addEventListener("click",createstar)

theme.addEventListener("click",modechange)

function modechange(){
    document.body.classList.toggle("magic")
}
// Button click
function createstar(){
    let star=document.createElement("div")
    star.textContent="✨"
    star.className="star"
    document.body.appendChild(star)
    star.style.left="100px"
    star.style.top="50px"

}

button.addEventListener("click", checkGuess);

// Function
function checkGuess() {
    console.log("Button Clicked");


    let guess = Number(guessInput.value);

    if (guessInput.value === "") {
        message.textContent = "⚠ Please enter a number!";
    }

    else if (guess === randomNumber) {
        message.textContent = "🎉 Congratulations! You guessed it!";
    }

    else if (guess < randomNumber) {
        message.textContent = "Number Too Low!";
    }

    else {
        message.textContent = "Number Too High!";
    }

}



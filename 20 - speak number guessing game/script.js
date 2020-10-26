const msgEl = document.getElementById('msg');

window.SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
let recognition = new window.SpeechRecognition();

// Generate random number
const getRandomNumber = () => Math.floor(Math.random() * 100) + 1;
const randomNum = getRandomNumber();
console.log('Number: ', randomNum);

const onSpeak = e => {
    const msg = e.results[0][0].transcript;
    writeMessage(msg);
    checkNumber(msg);
};

// Write was the user speaks
const writeMessage = msg => {
    msgEl.innerHTML = `
    <div>You said: </div>
    <span class="box">${msg}</span>
    `;
};

// Check msg agaisnt number
const checkNumber = msg => {
    const num = +msg;

    // Check if its a valid number
    if(Number.isNaN(num)){
        msgEl.innerHTML += '<div>That is not a valid number </div>';
        return;
    };

    if (num > 100 || num < 1) {
        msgEl.innerHTML = '<div>Number must be between 1 and 100</div>';
        return;
    }

    // Check number
    if(num === randomNum){
        document.body.innerHTML = `
        <h2>Congrats' You have guessed the number!<br><br>
        It was ${num}</h2>
        <button class="play-again" id="play-again">Play again</button>
        `;
    } else if (num > randomNum){
        msgEl.innerHTML += '<div>GO LOWER! 👎🏻</div>'
    } else {
        msgEl.innerHTML += '<div>GO HIGHER! 👍🏻</div>'
    }
}


// Start recognition and game to ask for micro permission
recognition.start();

// Speak result
recognition.addEventListener('result', onSpeak);

// Allows us to use the microphone nonstop (without needing to reload)
recognition.addEventListener('end', () => recognition.start());

document.body.addEventListener('click', (e) => {
    if(e.target.id == 'play-again'){
        window.location.reload();
    }
})
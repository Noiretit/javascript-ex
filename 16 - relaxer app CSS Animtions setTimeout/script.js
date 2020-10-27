const container = document.getElementById('container');
const text = document.getElementById('text');

const totalTime = 7500;
const breatheTime = (totalTime / 5) * 2;
const holdTime = totalTime / 5;

const breathAnimation = () => {
    // console.log('Breathe in');
    text.innerText = 'Breathe in...';
    container.className = 'container grow';

    setTimeout(() => {
        // console.log('hold');
        text.innerText = '... hold...'

        setTimeout(() => {
            // console.log('Breath out')
            text.innerText = '... breathe out.';
            container.className = 'container shrink';
        }, holdTime)
    }, breatheTime)
};

breathAnimation();
setInterval(breathAnimation, totalTime)
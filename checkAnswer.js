const random = Math.floor(Math.random() * 101);
console.log(`Random number: ${random}`);

const form = document.getElementById('form');
const answer = document.getElementById('answer');

form.addEventListener('submit', (evnet) => {
    evnet.preventDefault();
    const checked = checkAnswer(random, Number(answer.value));
    if (checked) {
        alert("정답!")
    } else {
        alert("오답!")
    }
})

function checkAnswer(random, answer) {
    if (random === answer) {
        return true;
    } else {
        return false;
    }
}

module.exports = checkAnswer;
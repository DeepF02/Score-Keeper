const form = document.querySelector('#form');
const mainBody = document.querySelector('#mainBody');

const p = document.createElement('p');

const p1 = {
    score: 0,
    button: document.querySelector('#btn-1'),
    display: document.querySelector('#p1Score'),
    name: form.elements.p1Name
}

const p2 = {
    score: 0,
    button: document.querySelector('#btn-2'),
    display: document.querySelector('#p2Score'),
    name: form.elements.p2Name
}
// p1.name='player 1';
// p2.name='player 2';

const resetBtn = document.querySelector('#reset');
const winningScoreSelect = document.querySelector('#playto');
let winningScore = 3;
let isGameOver = false;

form.addEventListener('submit', e => {
    e.preventDefault();
    addMessage(p1.name.value, p2.name.value);
    // p1.name.value = '';
    // p2.name.value = '';
});
function addMessage(p1Name, p2Name) {
    p.innerHTML = `<em>${p1Name} vs ${p2Name}</em>`.toUpperCase();
    p.classList.add('has-text-info','title','card-footer-item');
    form.prepend(p);
}

function updateScores(player, opponent) {
    if (!isGameOver) {
        player.score++;
        if (player.score === winningScore) {
            player.display.classList.add('has-text-success');
            opponent.display.classList.add('has-text-danger');
            player.button.disabled = true;
            opponent.button.disabled = true;
            // let winnerName=`  ${player.name.value}!! `;
            p.innerHTML=`Congratulation ${player.name.value}!! you won`.toUpperCase();
            p.classList.add('has-text-danger');

            isGameOver = true;
        }
        player.display.innerText = player.score;
    }
}
winningScoreSelect.addEventListener('change', function () {
    winningScore = parseInt(this.value);
    reset();//here rest is executed
});

p1.button.addEventListener('click', () => updateScores(p1, p2));
p2.button.addEventListener('click', () => updateScores(p2, p1));

resetBtn.addEventListener('click', reset);//rest isn't being executed here its just passed
function reset() {
    isGameOver = false;
    p.remove();
    p.classList.remove('has-text-danger');
    for (let p of [p1, p2]) {
        p.score = 0;
        p.display.innerText = 0;
        p.display.classList.remove('has-text-success', 'has-text-danger');
        p.button.disabled = false;
        p.name.value = '';
    }
}
const newScore=document.querySelector('#newGame');
newScore.addEventListener('click', cleanScore);
function cleanScore(){
    p1.score=0;
    p2.score=0;
    p1.display.innerText=0;
    p2.display.innerText=0;
}




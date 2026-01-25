// CONSTANT VALUES WITH GAME SETTINGS
const arena = document.querySelector('.playground-section');
const maxWidth = arena.clientWidth;
const maxHeight = arena.clientHeight;
const target = document.getElementById('target');
var arenaWidth = arena.offsetWidth - target.offsetWidth;
var arenaHeight = arena.offsetHeight - target.offsetHeight;

// GAME STATE VARIABLES
let score = 0;
let gameStarted = false;
let intervalId = null;
let timerId = null;
let canScore = true;
let currentLevel = 0;
let timeLeft = 30;
let lives = 3;
let restart = document.querySelector('.restart');

// LEVELS DEFINITION
let levels = [
    { reqScore: 12, time: 30, speed: 1000 }, // Level 1
    { reqScore: 18, time: 30, speed: 900 },  // Level 2
    { reqScore: 20, time: 25, speed: 800 },  // Level 3
    { reqScore: 20, time: 22, speed: 700 },  // Level 4
    { reqScore: 24, time: 20, speed: 600 }   // Level 5
];

class HighscoreManager {
  static KEY = 'buttonClickerHS';
  static getScores() {
    try { return JSON.parse(localStorage.getItem(this.KEY)) || []; }
    catch { return []; }
  }
  static saveScore(name, score) {
    const scores = this.getScores();
    scores.push({name, score, date: new Date().toLocaleDateString('pl-PL')});
    scores.sort((a,b) => b.score - a.score);
    scores.length = 10;
    localStorage.setItem(this.KEY, JSON.stringify(scores));
  }
  static render() {
    const list = document.getElementById('highscore-list');
    const scores = this.getScores();
    list.innerHTML = scores.length ? 
      scores.map((s,i) => 
        `<li class="highscore-item">
          <span>#${i+1}</span>
          <span>${s.name}: ${s.score} pkt</span>
        </li>`
      ).join('') :
      '<li class="highscore-item empty">🔥 Be first! 🔥</li>';
  }
}

// RANDOM POSITION GENERATOR FOR THE BUTTON
const moveTarget = () => {
    console.log("DEBUG:", arenaWidth, arenaHeight, target.offsetWidth);  
    if (arenaWidth <= 0 || arenaHeight <= 0) {  
        console.error("ARENA TOO SMALL!");  
        return;  
    }  

    const randomX = Math.random() * arenaWidth;
    const randomY = Math.random() * arenaHeight;
    target.style.left = randomX + 'px';
    target.style.top = randomY + 'px';
    console.log("Button moved to: (" + randomX + ", " + randomY + ")");
};

// GAME FUNCTIONS
const gameOver = () => {
  clearInterval(timerId);
  clearInterval(intervalId);
  const finalScore = score;
  const scores = HighscoreManager.getScores();
  if (!scores.length || finalScore >= scores[9]?.score || scores.length < 10) {
    const name = prompt(`🏆 Wynik: ${finalScore}\nImię:`) || 'Guest';
    HighscoreManager.saveScore(name, finalScore);
  }
  alert(`Game Over! Your score: ${finalScore} pkt`);
};


const handleLevelUp = () => {
    if (score >= levels[currentLevel].reqScore && currentLevel < levels.length - 1) {
        console.log("LEVEL UP!");
        clearInterval(intervalId);
        clearInterval(timerId);
        
        currentLevel++;
        score = 0;  // GLOBAL RESET
        timeLeft = levels[currentLevel].time;
        
        // UI UPDATE
        document.getElementById('score').textContent = `Score: 0`;
        document.querySelector('#level').textContent = `Level: ${currentLevel + 1}`;
        document.querySelector('#timer').textContent = `Time: ${timeLeft}`;
        
        // RESTART INTERVALS
        intervalId = setInterval(moveTarget, levels[currentLevel].speed);
        timerId = setInterval(updateTimer, 1000);
        
        alert(`Level Up! Welcome on level ${currentLevel + 1}!`);
    }
};

const updateTimer = () => {
    timeLeft--;
    document.querySelector('#timer').textContent = `Time: ${timeLeft}`;
    if (timeLeft <= 0) {
        clearInterval(timerId);
        gameOver();
    }
};

// START GAME LOGIC - ONLY ON FIRST CLICK
const startGame = () => {
    console.log("🚀 Game Started");
    if (gameStarted) return;
    
    gameStarted = true;
    currentLevel = 0;
    score = 0;
    timeLeft = levels[0].time;
    
    // UI Reset
    document.getElementById('score').textContent = `Score: ${score}`;
    document.querySelector('#level').textContent = `Level: 1`;
    document.querySelector('#timer').textContent = `Time: ${timeLeft}`;
    
    // START MOVEMENT + TIMER
    moveTarget(); // Pierwsze położenie
    console.log("Level 1 speed:", levels[0].speed);
    intervalId = setInterval(moveTarget, levels[0].speed);
    timerId = setInterval(updateTimer, 1000);
    console.log("Interval IDs:", intervalId, timerId);
};

// EVENT LISTENER FOR BUTTON CLICK
target.addEventListener('click', () => {
    if (!gameStarted) {
        startGame();
        return;
    }
    
    if (canScore) {
        canScore = false;
        score++;
        document.getElementById('score').textContent = `Score: ${score}`;
        handleLevelUp(); // Check level up
        setTimeout(() => {
            canScore = true;
        }, 900);
    }
});


// HIGHSCORE MODAL LOGIC
document.addEventListener('DOMContentLoaded', () => {
    //HIGHSCORE RENDER FOR THE FIRST TIME
    HighscoreManager.render()
  const modal = document.getElementById('highscore-modal');
  const btn = document.getElementById('highscore-btn');
  const closeBtn = document.getElementById('close-highscore');


  // Open on click
  btn.addEventListener('click', (e) => {
    e.stopPropagation();
    HighscoreManager.render();
    modal.style.display = 'block';
    document.body.style.overflow = 'hidden';
    console.log('Highscore opened'); // DEBUG
  });

  // Close button
   closeBtn.onclick = () => { modal.style.display = 'none'; document.body.style.overflow = ''; };
  modal.onclick = (e) => { if (e.target === modal) { modal.style.display = 'none'; document.body.style.overflow = ''; } };
  document.onkeydown = (e) => { if (e.key === 'Escape') { modal.style.display = 'none'; document.body.style.overflow = ''; } };
});
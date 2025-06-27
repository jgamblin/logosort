// --- Team Data ---
const teams = [
  // NFL Teams
  { name: '49Ers', league: 'NFL', logo: 'Logos/NFL/49ers.png' },
  { name: 'Bears', league: 'NFL', logo: 'Logos/NFL/bears.png' },
  { name: 'Bengals', league: 'NFL', logo: 'Logos/NFL/bengals.png' },
  { name: 'Bills', league: 'NFL', logo: 'Logos/NFL/bills.png' },
  { name: 'Broncos', league: 'NFL', logo: 'Logos/NFL/broncos.png' },
  { name: 'Browns', league: 'NFL', logo: 'Logos/NFL/browns.png' },
  { name: 'Buccaneers', league: 'NFL', logo: 'Logos/NFL/buccaneers.png' },
  { name: 'Cardinals', league: 'NFL', logo: 'Logos/NFL/cardinals.png' },
  { name: 'Chargers', league: 'NFL', logo: 'Logos/NFL/chargers.png' },
  { name: 'Chiefs', league: 'NFL', logo: 'Logos/NFL/chiefs.png' },
  { name: 'Colts', league: 'NFL', logo: 'Logos/NFL/colts.png' },
  { name: 'Cowboys', league: 'NFL', logo: 'Logos/NFL/cowboys.png' },
  { name: 'Dolphins', league: 'NFL', logo: 'Logos/NFL/dolphins.png' },
  { name: 'Eagles', league: 'NFL', logo: 'Logos/NFL/eagles.png' },
  { name: 'Falcons', league: 'NFL', logo: 'Logos/NFL/falcons.png' },
  { name: 'Giants', league: 'NFL', logo: 'Logos/NFL/giants.png' },
  { name: 'Jaguars', league: 'NFL', logo: 'Logos/NFL/jaguars.png' },
  { name: 'Jets', league: 'NFL', logo: 'Logos/NFL/jets.png' },
  { name: 'Lions', league: 'NFL', logo: 'Logos/NFL/lions.png' },
  { name: 'Packers', league: 'NFL', logo: 'Logos/NFL/packers.png' },
  { name: 'Panthers', league: 'NFL', logo: 'Logos/NFL/panthers.png' },
  { name: 'Patriots', league: 'NFL', logo: 'Logos/NFL/patriots.png' },
  { name: 'Raiders', league: 'NFL', logo: 'Logos/NFL/raiders.png' },
  { name: 'Rams', league: 'NFL', logo: 'Logos/NFL/rams.png' },
  { name: 'Ravens', league: 'NFL', logo: 'Logos/NFL/ravens.png' },
  { name: 'Redskins', league: 'NFL', logo: 'Logos/NFL/redskins.png' },
  { name: 'Saints', league: 'NFL', logo: 'Logos/NFL/saints.png' },
  { name: 'Seahawks', league: 'NFL', logo: 'Logos/NFL/seahawks.png' },
  { name: 'Steelers', league: 'NFL', logo: 'Logos/NFL/steelers.png' },
  { name: 'Texans', league: 'NFL', logo: 'Logos/NFL/texans.png' },
  { name: 'Titans', league: 'NFL', logo: 'Logos/NFL/titans.png' },
  { name: 'Vikings', league: 'NFL', logo: 'Logos/NFL/vikings.png' },

  // NBA Teams
  { name: '76Ers', league: 'NBA', logo: 'Logos/NBA/76ers.png' },
  { name: 'Bucks', league: 'NBA', logo: 'Logos/NBA/bucks.png' },
  { name: 'Bulls', league: 'NBA', logo: 'Logos/NBA/bulls.png' },
  { name: 'Cavaliers', league: 'NBA', logo: 'Logos/NBA/cavaliers.png' },
  { name: 'Celtics', league: 'NBA', logo: 'Logos/NBA/celtics.png' },
  { name: 'Clippers', league: 'NBA', logo: 'Logos/NBA/clippers.png' },
  { name: 'Grizzlies', league: 'NBA', logo: 'Logos/NBA/grizzlies.png' },
  { name: 'Hawks', league: 'NBA', logo: 'Logos/NBA/hawks.png' },
  { name: 'Heat', league: 'NBA', logo: 'Logos/NBA/heat.png' },
  { name: 'Hornets', league: 'NBA', logo: 'Logos/NBA/hornets.png' },
  { name: 'Jazz', league: 'NBA', logo: 'Logos/NBA/jazz.png' },
  { name: 'Kings', league: 'NBA', logo: 'Logos/NBA/kings.png' },
  { name: 'Knicks', league: 'NBA', logo: 'Logos/NBA/knicks.png' },
  { name: 'Lakers', league: 'NBA', logo: 'Logos/NBA/lakers.png' },
  { name: 'Magic', league: 'NBA', logo: 'Logos/NBA/magic.png' },
  { name: 'Mavericks', league: 'NBA', logo: 'Logos/NBA/mavericks.png' },
  { name: 'Nets', league: 'NBA', logo: 'Logos/NBA/nets.png' },
  { name: 'Nuggets', league: 'NBA', logo: 'Logos/NBA/nuggets.png' },
  { name: 'Pacers', league: 'NBA', logo: 'Logos/NBA/pacers.png' },
  { name: 'Pelicans', league: 'NBA', logo: 'Logos/NBA/pelicans.png' },
  { name: 'Pistons', league: 'NBA', logo: 'Logos/NBA/pistons.png' },
  { name: 'Raptors', league: 'NBA', logo: 'Logos/NBA/raptors.png' },
  { name: 'Rockets', league: 'NBA', logo: 'Logos/NBA/rockets.png' },
  { name: 'Spurs', league: 'NBA', logo: 'Logos/NBA/spurs.png' },
  { name: 'Suns', league: 'NBA', logo: 'Logos/NBA/suns.png' },
  { name: 'Thunder', league: 'NBA', logo: 'Logos/NBA/thunder.png' },
  { name: 'Timberwolves', league: 'NBA', logo: 'Logos/NBA/timberwolves.png' },
  { name: 'Trailblazers', league: 'NBA', logo: 'Logos/NBA/trailblazers.png' },
  { name: 'Warriors', league: 'NBA', logo: 'Logos/NBA/warriors.png' },
  { name: 'Wizards', league: 'NBA', logo: 'Logos/NBA/wizards.png' },

  // MLB Teams
  { name: 'Angels', league: 'MLB', logo: 'Logos/MLB/angels.png' },
  { name: 'Astros', league: 'MLB', logo: 'Logos/MLB/astros.png' },
  { name: 'Athletics', league: 'MLB', logo: 'Logos/MLB/athletics.png' },
  { name: 'Bluejays', league: 'MLB', logo: 'Logos/MLB/bluejays.png' },
  { name: 'Braves', league: 'MLB', logo: 'Logos/MLB/braves.png' },
  { name: 'Brewers', league: 'MLB', logo: 'Logos/MLB/brewers.png' },
  { name: 'Cardinals', league: 'MLB', logo: 'Logos/MLB/cardinals.png' },
  { name: 'Cubs', league: 'MLB', logo: 'Logos/MLB/cubs.png' },
  { name: 'Diamondbacks', league: 'MLB', logo: 'Logos/MLB/diamondbacks.png' },
  { name: 'Dodgers', league: 'MLB', logo: 'Logos/MLB/dodgers.png' },
  { name: 'Giants', league: 'MLB', logo: 'Logos/MLB/giants.png' },
  { name: 'Indians', league: 'MLB', logo: 'Logos/MLB/indians.png' },
  { name: 'Mariners', league: 'MLB', logo: 'Logos/MLB/mariners.png' },
  { name: 'Marlins', league: 'MLB', logo: 'Logos/MLB/marlins.png' },
  { name: 'Mets', league: 'MLB', logo: 'Logos/MLB/mets.png' },
  { name: 'Nationals', league: 'MLB', logo: 'Logos/MLB/nationals.png' },
  { name: 'Orioles', league: 'MLB', logo: 'Logos/MLB/orioles.png' },
  { name: 'Padres', league: 'MLB', logo: 'Logos/MLB/padres.png' },
  { name: 'Phillies', league: 'MLB', logo: 'Logos/MLB/phillies.png' },
  { name: 'Pirates', league: 'MLB', logo: 'Logos/MLB/pirates.png' },
  { name: 'Rangers', league: 'MLB', logo: 'Logos/MLB/rangers.png' },
  { name: 'Rays', league: 'MLB', logo: 'Logos/MLB/rays.png' },
  { name: 'Reds', league: 'MLB', logo: 'Logos/MLB/reds.png' },
  { name: 'Redsox', league: 'MLB', logo: 'Logos/MLB/redsox.png' },
  { name: 'Rockies', league: 'MLB', logo: 'Logos/MLB/rockies.png' },
  { name: 'Royals', league: 'MLB', logo: 'Logos/MLB/royals.png' },
  { name: 'Tigers', league: 'MLB', logo: 'Logos/MLB/tigers.png' },
  { name: 'Twins', league: 'MLB', logo: 'Logos/MLB/twins.png' },
  { name: 'Whitesox', league: 'MLB', logo: 'Logos/MLB/whitesox.png' },
  { name: 'Yankees', league: 'MLB', logo: 'Logos/MLB/yankees.png' },

  // NCAA Teams (selection of major schools)
  { name: 'Alabama', league: 'NCAA', logo: 'Logos/NCAA/alabama.png' },
  { name: 'Auburn', league: 'NCAA', logo: 'Logos/NCAA/auburn.png' },
  { name: 'Clemson', league: 'NCAA', logo: 'Logos/NCAA/clemson.png' },
  { name: 'Duke', league: 'NCAA', logo: 'Logos/NCAA/duke.png' },
  { name: 'Florida', league: 'NCAA', logo: 'Logos/NCAA/florida.png' },
  { name: 'Georgia', league: 'NCAA', logo: 'Logos/NCAA/georgia.png' },
  { name: 'Kentucky', league: 'NCAA', logo: 'Logos/NCAA/kentucky.png' },
  { name: 'Lsu', league: 'NCAA', logo: 'Logos/NCAA/lsu.png' },
  { name: 'Michigan', league: 'NCAA', logo: 'Logos/NCAA/michigan.png' },
  { name: 'Northcarolina', league: 'NCAA', logo: 'Logos/NCAA/northcarolina.png' },
  { name: 'Ohiostate', league: 'NCAA', logo: 'Logos/NCAA/ohiostate.png' },
  { name: 'Tennessee', league: 'NCAA', logo: 'Logos/NCAA/tennessee.png' },
  { name: 'Texas', league: 'NCAA', logo: 'Logos/NCAA/texas.png' },
  { name: 'Ucla', league: 'NCAA', logo: 'Logos/NCAA/ucla.png' },
  { name: 'Usc', league: 'NCAA', logo: 'Logos/NCAA/usc.png' },
  { name: 'Stanford', league: 'NCAA', logo: 'Logos/NCAA/stanford.png' },
  { name: 'Notredame', league: 'NCAA', logo: 'Logos/NCAA/notredame.png' },
  { name: 'Oklahoma', league: 'NCAA', logo: 'Logos/NCAA/oklahoma.png' },
  { name: 'Nebraska', league: 'NCAA', logo: 'Logos/NCAA/nebraska.png' },
  { name: 'Wisconsin', league: 'NCAA', logo: 'Logos/NCAA/wisconsin.png' }
];

// --- Game State ---
let gameRunning = false;
let score = 0;
let correctAnswers = 0;
let totalAnswers = 0;
let timeElapsed = 0;
let currentTeam = null;
let gameTimer = null;
let usedTeams = [];
let activeLogos = [];
const STACK_SIZE = 100; // Increased to 100 for full screen coverage
const TARGET_SCORE = 100;

// --- High Score Management ---
function initializeHighScores() {
  // Ensure high scores are initialized and cookie exists
  const existingScores = getHighScores();
  if (existingScores.length === 0) {
    // Create initial empty high scores cookie
    saveHighScores([]);
    console.log('Initialized empty high scores cookie');
  }
}

function getHighScores() {
  try {
    const cookies = document.cookie.split(';');
    const highScoreCookie = cookies.find(cookie => cookie.trim().startsWith('logoSortHighScores='));
    
    if (highScoreCookie) {
      const scoreData = decodeURIComponent(highScoreCookie.split('=')[1]);
      const scores = JSON.parse(scoreData);
      console.log('Retrieved high scores:', scores);
      return Array.isArray(scores) ? scores : [];
    }
  } catch (e) {
    console.error('Error retrieving high scores:', e);
  }
  return [];
}

function saveHighScores(scores) {
  try {
    const scoreData = JSON.stringify(scores);
    const expires = new Date();
    expires.setFullYear(expires.getFullYear() + 1); // Expire in 1 year
    
    // Clear any existing cookie first
    document.cookie = 'logoSortHighScores=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;';
    
    // Set new cookie with proper formatting
    const cookieString = `logoSortHighScores=${encodeURIComponent(scoreData)}; expires=${expires.toUTCString()}; path=/; SameSite=Lax`;
    document.cookie = cookieString;
    
    console.log('Saved high scores:', scores);
    console.log('Cookie string:', cookieString);
    
    // Verify the cookie was saved immediately
    setTimeout(() => {
      const verification = getHighScores();
      console.log('Verification - retrieved after save:', verification);
    }, 100);
  } catch (e) {
    console.error('Error saving high scores:', e);
  }
}

function calculateFinalScore(correctAnswers, totalAnswers, timeInSeconds) {
  // Base score: 10 points per correct answer
  const baseScore = correctAnswers * 10;
  
  // Accuracy bonus: up to 50 bonus points for high accuracy
  const accuracy = totalAnswers > 0 ? correctAnswers / totalAnswers : 0;
  const accuracyBonus = Math.floor(accuracy * 50);
  
  // Time bonus: 1 point per second survived, capped at 100 points
  const timeBonus = Math.min(timeInSeconds, 100);
  
  return baseScore + accuracyBonus + timeBonus;
}

function addHighScore(correctAnswers, totalAnswers, timeInSeconds) {
  const finalScore = calculateFinalScore(correctAnswers, totalAnswers, timeInSeconds);
  const highScores = getHighScores();
  
  const newScore = {
    score: finalScore,
    correct: correctAnswers,
    total: totalAnswers,
    time: timeInSeconds,
    date: new Date().toLocaleDateString()
  };
  
  console.log('Adding new score:', newScore);
  console.log('Current high scores before adding:', highScores);
  
  highScores.push(newScore);
  highScores.sort((a, b) => b.score - a.score);
  
  // Keep only top 10
  const top10 = highScores.slice(0, 10);
  console.log('Top 10 scores after adding:', top10);
  
  saveHighScores(top10);
  
  // Force a re-read to verify the save worked
  const verifyScores = getHighScores();
  console.log('Verified scores after save:', verifyScores);
  
  const rank = top10.findIndex(s => s.score === newScore.score && s.time === newScore.time) + 1;
  return { finalScore, rank };
}

function formatTime(seconds) {
  const minutes = Math.floor(seconds / 60);
  const secs = seconds % 60;
  return `${minutes}:${secs.toString().padStart(2, '0')}`;
}

function displayLeaderboard() {
  const highScores = getHighScores();
  console.log('Displaying leaderboard with scores:', highScores);
  
  if (highScores.length === 0) {
    return '<div style="margin-top: 20px; text-align: center; color: #666;">No high scores yet!</div>';
  }
  
  let leaderboardHTML = '<div style="margin-top: 20px; text-align: left; width: 100%; max-width: 500px;">';
  leaderboardHTML += '<h3 style="text-align: center; margin-bottom: 15px; color: #2d3a4b;">🏆 Top 10 High Scores</h3>';
  
  highScores.forEach((score, index) => {
    const accuracy = score.total > 0 ? Math.round((score.correct / score.total) * 100) : 0;
    leaderboardHTML += `
      <div style="display: flex; justify-content: space-between; align-items: center; padding: 8px 15px; background: ${index % 2 === 0 ? 'rgba(59, 130, 246, 0.08)' : 'rgba(245, 245, 245, 0.5)'}; border-radius: 6px; font-size: 0.85rem; margin-bottom: 3px; border: 1px solid rgba(0,0,0,0.05);">
        <span style="font-weight: bold; color: #2d3a4b; min-width: 30px;">#${index + 1}</span>
        <span style="font-weight: bold; color: #3b82f6; min-width: 70px;">${score.score.toLocaleString()}</span>
        <span style="color: #666; min-width: 80px;">${score.correct} correct</span>
        <span style="color: #666; min-width: 50px;">${formatTime(score.time)}</span>
        <span style="color: #888; font-size: 0.8rem; min-width: 70px;">${score.date}</span>
      </div>
    `;
  });
  
  leaderboardHTML += '</div>';
  return leaderboardHTML;
}

// --- DOM Elements ---
let logoArea, timerElement, scoreElement, gameOverElement;
let gameOverMessage, finalScoreElement, playAgainBtn, buckets;

// --- Game Functions ---
function startGame() {
  gameRunning = true;
  score = 0;
  correctAnswers = 0;
  totalAnswers = 0;
  timeElapsed = 0;
  usedTeams = [];
  activeLogos = [];
  gameOverElement.style.display = 'none';
  updateDisplay();
  populateLogoStack();
  
  gameTimer = setInterval(() => {
    timeElapsed++;
    updateDisplay();
  }, 1000);
}

function endGame() {
  gameRunning = false;
  clearInterval(gameTimer);
  
  if (activeLogos.length === 0) {
    gameOverMessage.textContent = 'Congratulations! You sorted all 100 logos!';
  } else {
    gameOverMessage.textContent = 'Game Over!';
  }
  
  // High score handling
  const highScoreData = addHighScore(correctAnswers, totalAnswers, timeElapsed);
  const finalScore = highScoreData.finalScore;
  
  let scoreText = `Final Score: ${finalScore.toLocaleString()} points<br>`;
  scoreText += `Correct: ${correctAnswers}/${totalAnswers} in ${formatTime(timeElapsed)}`;
  
  if (highScoreData.rank <= 10) {
    scoreText += `<br>🎉 New High Score! Rank #${highScoreData.rank}`;
  }
  
  finalScoreElement.innerHTML = scoreText + displayLeaderboard();
  gameOverElement.style.display = 'flex';
  logoArea.innerHTML = '';
}

function updateDisplay() {
  const minutes = Math.floor(timeElapsed / 60);
  const seconds = timeElapsed % 60;
  timerElement.textContent = `Time: ${minutes}:${seconds.toString().padStart(2, '0')}`;
  scoreElement.textContent = `Score: ${score}`;
}

function getRandomTeam(index) {
  // For exactly 100 logos, cycle through teams multiple times
  return teams[index % teams.length];
}

function populateLogoStack() {
  logoArea.innerHTML = '';
  activeLogos = [];
  
  for (let i = 0; i < STACK_SIZE; i++) {
    createLogo(i);
  }
}

function createLogo(index) {
  const team = getRandomTeam(index);
  
  // Get center position and create exclusion zone around buckets
  const centerX = window.innerWidth / 2;
  const centerY = window.innerHeight / 2;
  const exclusionZone = 300; // Radius around center to avoid
  
  let x, y;
  let attempts = 0;
  do {
    x = Math.random() * (window.innerWidth - 80);
    y = Math.random() * (window.innerHeight - 80);
    attempts++;
  } while (
    Math.sqrt((x - centerX) ** 2 + (y - centerY) ** 2) < exclusionZone && 
    attempts < 50
  );
  
  // If we couldn't find a spot outside exclusion zone, place it at screen edges
  if (attempts >= 50) {
    const edge = Math.floor(Math.random() * 4);
    switch (edge) {
      case 0: // top
        x = Math.random() * window.innerWidth;
        y = Math.random() * 100;
        break;
      case 1: // right
        x = window.innerWidth - 100 - Math.random() * 100;
        y = Math.random() * window.innerHeight;
        break;
      case 2: // bottom
        x = Math.random() * window.innerWidth;
        y = window.innerHeight - 100 - Math.random() * 100;
        break;
      case 3: // left
        x = Math.random() * 100;
        y = Math.random() * window.innerHeight;
        break;
    }
  }
  
  const logoData = {
    team: team,
    x: x,
    y: y,
    element: null,
    isDragging: false,
    dragOffsetX: 0,
    dragOffsetY: 0
  };
  
  const logoImg = document.createElement('img');
  logoImg.src = team.logo;
  logoImg.alt = team.name;
  logoImg.className = 'logo-img';
  logoImg.draggable = true;
  logoImg.style.left = logoData.x + 'px';
  logoImg.style.top = logoData.y + 'px';
  logoImg.style.position = 'absolute';
  logoImg.dataset.logoIndex = activeLogos.length;
  
  logoImg.addEventListener('dragstart', handleDragStart);
  logoImg.addEventListener('dragend', handleDragEnd);
  logoImg.addEventListener('drag', handleDrag);
  
  logoData.element = logoImg;
  activeLogos.push(logoData);
  logoArea.appendChild(logoImg);
}

function removeLogo(logoIndex) {
  const logoData = activeLogos[logoIndex];
  if (logoData && logoData.element) {
    logoData.element.remove();
    activeLogos.splice(logoIndex, 1);
    
    // Update indices for remaining logos
    activeLogos.forEach((logo, index) => {
      logo.element.dataset.logoIndex = index;
    });
    
    // Check if all logos have been sorted
    if (activeLogos.length === 0 && gameRunning) {
      // All logos cleared - player wins!
      endGame();
    }
  }
}

function showNextLogo() {
  // This function is no longer needed but kept for compatibility
}

function handleDragStart(e) {
  const logoIndex = parseInt(e.target.dataset.logoIndex);
  const logoData = activeLogos[logoIndex];
  
  if (logoData) {
    const rect = e.target.getBoundingClientRect();
    const logoAreaRect = logoArea.getBoundingClientRect();
    logoData.dragOffsetX = e.clientX - rect.left;
    logoData.dragOffsetY = e.clientY - rect.top;
    logoData.isDragging = true;
  }
  
  e.dataTransfer.setData('text/plain', '');
  e.dataTransfer.setData('logoIndex', e.target.dataset.logoIndex);
  e.target.style.opacity = '0.5';
}

function handleDragEnd(e) {
  const logoIndex = parseInt(e.target.dataset.logoIndex);
  const logoData = activeLogos[logoIndex];
  
  if (logoData && logoData.isDragging) {
    logoData.isDragging = false;
    
    // Update position based on drop location
    const logoAreaRect = logoArea.getBoundingClientRect();
    const newX = e.clientX - logoAreaRect.left - logoData.dragOffsetX;
    const newY = e.clientY - logoAreaRect.top - logoData.dragOffsetY;
    
    // Keep logo within bounds
    const maxX = logoArea.offsetWidth - 80;
    const maxY = logoArea.offsetHeight - 80;
    logoData.x = Math.max(0, Math.min(newX, maxX));
    logoData.y = Math.max(0, Math.min(newY, maxY));
    
    // Update element position
    e.target.style.left = logoData.x + 'px';
    e.target.style.top = logoData.y + 'px';
  }
  
  e.target.style.opacity = '1';
}

function handleDrag(e) {
  // This function can be used for real-time position updates if needed
}

function handleCorrectAnswer() {
  score++;
  updateDisplay();
  // No longer need to show next logo since all are placed at start
}

function handleWrongAnswer() {
  // Could add visual feedback here
}

// --- Initialization ---
function initializeGame() {
  // Get DOM elements
  logoArea = document.getElementById('logo-area');
  timerElement = document.getElementById('timer');
  scoreElement = document.getElementById('score');
  gameOverElement = document.getElementById('game-over');
  gameOverMessage = document.getElementById('game-over-message');
  finalScoreElement = document.getElementById('final-score');
  playAgainBtn = document.getElementById('play-again-btn');
  buckets = document.querySelectorAll('.bucket');

  // Ensure all elements are found
  if (!logoArea || !timerElement || !scoreElement || !gameOverElement || 
      !gameOverMessage || !finalScoreElement || !playAgainBtn) {
    console.error('Could not find required DOM elements');
    return;
  }

  // Set up event listeners
  buckets.forEach(bucket => {
    bucket.addEventListener('dragover', (e) => {
      e.preventDefault();
      bucket.classList.add('drag-over');
    });

    bucket.addEventListener('dragleave', () => {
      bucket.classList.remove('drag-over');
    });

    bucket.addEventListener('drop', (e) => {
      e.preventDefault();
      bucket.classList.remove('drag-over');
      
      if (!gameRunning) return;
      
      const logoIndex = parseInt(e.dataTransfer.getData('logoIndex'));
      const logoData = activeLogos[logoIndex];
      
      if (!logoData) return;
      
      const bucketLeague = bucket.dataset.league;
      if (bucketLeague === logoData.team.league) {
        score++;
        correctAnswers++;
        totalAnswers++;
        updateDisplay();
        removeLogo(logoIndex);
        
        // Check if all logos have been sorted (win condition)
        if (activeLogos.length === 0 && gameRunning) {
          endGame();
        }
      } else {
        // Wrong answer - end the game immediately
        totalAnswers++;
        endGame();
      }
    });

    bucket.addEventListener('click', () => {
      if (!gameRunning || !currentTeam) return;
      
      const bucketLeague = bucket.dataset.league;
      if (bucketLeague === currentTeam.league) {
        handleCorrectAnswer();
      } else {
        // Wrong answer - end the game immediately
        totalAnswers++;
        endGame();
      }
    });
  });

  // Set up play again button event listener
  playAgainBtn.addEventListener('click', (e) => {
    e.preventDefault();
    startGame();
  });

  // Start the game
  startGame();
}

// Initialize when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
  initializeHighScores();
  initializeGame();
});
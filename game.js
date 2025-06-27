// --- Team Data ---
const teams = [
  // NFL Teams
  { name: '49ers', league: 'NFL', logo: 'Logos/nfl/san-francisco-49ers.svg' },
  { name: 'Bears', league: 'NFL', logo: 'Logos/nfl/chicago-bears.svg' },
  { name: 'Bengals', league: 'NFL', logo: 'Logos/nfl/cincinnati-bengals.svg' },
  { name: 'Bills', league: 'NFL', logo: 'Logos/nfl/buffalo-bills.svg' },
  { name: 'Broncos', league: 'NFL', logo: 'Logos/nfl/denver-broncos.svg' },
  { name: 'Browns', league: 'NFL', logo: 'Logos/nfl/cleveland-browns.svg' },
  { name: 'Buccaneers', league: 'NFL', logo: 'Logos/nfl/tampa-bay-buccaneers.svg' },
  { name: 'Cardinals', league: 'NFL', logo: 'Logos/nfl/arizona-cardinals.svg' },
  { name: 'Chargers', league: 'NFL', logo: 'Logos/nfl/los-angeles-chargers.svg' },
  { name: 'Chiefs', league: 'NFL', logo: 'Logos/nfl/kansas-city-chiefs.svg' },
  { name: 'Colts', league: 'NFL', logo: 'Logos/nfl/indianapolis-colts.svg' },
  { name: 'Cowboys', league: 'NFL', logo: 'Logos/nfl/dallas-cowboys.svg' },
  { name: 'Dolphins', league: 'NFL', logo: 'Logos/nfl/miami-dolphins.svg' },
  { name: 'Eagles', league: 'NFL', logo: 'Logos/nfl/philadelphia-eagles.svg' },
  { name: 'Falcons', league: 'NFL', logo: 'Logos/nfl/atlanta-falcons.svg' },
  { name: 'Giants', league: 'NFL', logo: 'Logos/nfl/new-york-giants.svg' },
  { name: 'Jaguars', league: 'NFL', logo: 'Logos/nfl/jacksonville-jaguars.svg' },
  { name: 'Jets', league: 'NFL', logo: 'Logos/nfl/new-york-jets.svg' },
  { name: 'Lions', league: 'NFL', logo: 'Logos/nfl/detroit-lions.svg' },
  { name: 'Packers', league: 'NFL', logo: 'Logos/nfl/green-bay-packers.svg' },
  { name: 'Panthers', league: 'NFL', logo: 'Logos/nfl/carolina-panthers.svg' },
  { name: 'Patriots', league: 'NFL', logo: 'Logos/nfl/new-england-patriots.svg' },
  { name: 'Raiders', league: 'NFL', logo: 'Logos/nfl/oakland-raiders.svg' },
  { name: 'Rams', league: 'NFL', logo: 'Logos/nfl/los-angeles-rams.svg' },
  { name: 'Ravens', league: 'NFL', logo: 'Logos/nfl/baltimore-ravens.svg' },
  { name: 'Commanders', league: 'NFL', logo: 'Logos/nfl/washington-commanders.svg' },
  { name: 'Saints', league: 'NFL', logo: 'Logos/nfl/new-orleans-saints.svg' },
  { name: 'Seahawks', league: 'NFL', logo: 'Logos/nfl/seattle-seahawks.svg' },
  { name: 'Steelers', league: 'NFL', logo: 'Logos/nfl/pittsburgh-steelers.svg' },
  { name: 'Texans', league: 'NFL', logo: 'Logos/nfl/houston-texans.svg' },
  { name: 'Titans', league: 'NFL', logo: 'Logos/nfl/tennessee-titans.svg' },
  { name: 'Vikings', league: 'NFL', logo: 'Logos/nfl/minnesota-vikings.svg' },

  // NBA Teams
  { name: '76ers', league: 'NBA', logo: 'Logos/nba/philadelphia-76ers.svg' },
  { name: 'Bucks', league: 'NBA', logo: 'Logos/nba/milwaukee-bucks.svg' },
  { name: 'Bulls', league: 'NBA', logo: 'Logos/nba/chicago-bulls.svg' },
  { name: 'Cavaliers', league: 'NBA', logo: 'Logos/nba/cleveland-cavaliers.svg' },
  { name: 'Celtics', league: 'NBA', logo: 'Logos/nba/boston-celtics.svg' },
  { name: 'Clippers', league: 'NBA', logo: 'Logos/nba/los-angeles-clippers.svg' },
  { name: 'Grizzlies', league: 'NBA', logo: 'Logos/nba/memphis-grizzlies.svg' },
  { name: 'Hawks', league: 'NBA', logo: 'Logos/nba/atlanta-hawks.svg' },
  { name: 'Heat', league: 'NBA', logo: 'Logos/nba/miami-heat.svg' },
  { name: 'Hornets', league: 'NBA', logo: 'Logos/nba/charlotte-hornets.svg' },
  { name: 'Jazz', league: 'NBA', logo: 'Logos/nba/utah-jazz.svg' },
  { name: 'Kings', league: 'NBA', logo: 'Logos/nba/sacramento-kings.svg' },
  { name: 'Knicks', league: 'NBA', logo: 'Logos/nba/new-york-knicks.svg' },
  { name: 'Lakers', league: 'NBA', logo: 'Logos/nba/los-angeles-lakers.svg' },
  { name: 'Magic', league: 'NBA', logo: 'Logos/nba/orlando-magic.svg' },
  { name: 'Mavericks', league: 'NBA', logo: 'Logos/nba/dallas-mavericks.svg' },
  { name: 'Nets', league: 'NBA', logo: 'Logos/nba/brooklyn-nets.svg' },
  { name: 'Nuggets', league: 'NBA', logo: 'Logos/nba/denver-nuggets.svg' },
  { name: 'Pacers', league: 'NBA', logo: 'Logos/nba/indiana-pacers.svg' },
  { name: 'Pelicans', league: 'NBA', logo: 'Logos/nba/new-orleans-pelicans.svg' },
  { name: 'Pistons', league: 'NBA', logo: 'Logos/nba/detroit-pistons.svg' },
  { name: 'Raptors', league: 'NBA', logo: 'Logos/nba/toronto-raptors.svg' },
  { name: 'Rockets', league: 'NBA', logo: 'Logos/nba/houston-rockets.svg' },
  { name: 'Spurs', league: 'NBA', logo: 'Logos/nba/san-antonio-spurs.svg' },
  { name: 'Suns', league: 'NBA', logo: 'Logos/nba/phoenix-suns.svg' },
  { name: 'Thunder', league: 'NBA', logo: 'Logos/nba/oklahoma-city-thunder.svg' },
  { name: 'Timberwolves', league: 'NBA', logo: 'Logos/nba/minnesota-timberwolves.svg' },
  { name: 'Trail Blazers', league: 'NBA', logo: 'Logos/nba/portland-trail-blazers.svg' },
  { name: 'Warriors', league: 'NBA', logo: 'Logos/nba/golden-state-warriors.svg' },
  { name: 'Wizards', league: 'NBA', logo: 'Logos/nba/washington-wizards.svg' },

  // MLB Teams
  { name: 'Angels', league: 'MLB', logo: 'Logos/mlb/los-angeles-angels-of-anaheim.svg' },
  { name: 'Astros', league: 'MLB', logo: 'Logos/mlb/houston-astros.svg' },
  { name: 'Athletics', league: 'MLB', logo: 'Logos/mlb/oakland-athletics.svg' },
  { name: 'Blue Jays', league: 'MLB', logo: 'Logos/mlb/toronto-blue-jays.svg' },
  { name: 'Braves', league: 'MLB', logo: 'Logos/mlb/atlanta-braves.svg' },
  { name: 'Brewers', league: 'MLB', logo: 'Logos/mlb/milwaukee-brewers.svg' },
  { name: 'Cardinals', league: 'MLB', logo: 'Logos/mlb/st-louis-cardinals.svg' },
  { name: 'Cubs', league: 'MLB', logo: 'Logos/mlb/chicago-cubs.svg' },
  { name: 'Diamondbacks', league: 'MLB', logo: 'Logos/mlb/arizona-diamondbacks.svg' },
  { name: 'Dodgers', league: 'MLB', logo: 'Logos/mlb/los-angeles-dodgers.svg' },
  { name: 'Giants', league: 'MLB', logo: 'Logos/mlb/san-francisco-giants.svg' },
  { name: 'Guardians', league: 'MLB', logo: 'Logos/mlb/cleveland-indians.svg' },
  { name: 'Mariners', league: 'MLB', logo: 'Logos/mlb/seattle-mariners.svg' },
  { name: 'Marlins', league: 'MLB', logo: 'Logos/mlb/miami-marlins.svg' },
  { name: 'Mets', league: 'MLB', logo: 'Logos/mlb/new-york-mets.svg' },
  { name: 'Nationals', league: 'MLB', logo: 'Logos/mlb/washington-nationals.svg' },
  { name: 'Orioles', league: 'MLB', logo: 'Logos/mlb/baltimore-orioles.svg' },
  { name: 'Padres', league: 'MLB', logo: 'Logos/mlb/san-diego-padres.svg' },
  { name: 'Phillies', league: 'MLB', logo: 'Logos/mlb/philadelphia-phillies.svg' },
  { name: 'Pirates', league: 'MLB', logo: 'Logos/mlb/pittsburgh-pirates.svg' },
  { name: 'Rangers', league: 'MLB', logo: 'Logos/mlb/texas-rangers.svg' },
  { name: 'Rays', league: 'MLB', logo: 'Logos/mlb/tampa-bay-rays.svg' },
  { name: 'Reds', league: 'MLB', logo: 'Logos/mlb/cincinnati-reds.svg' },
  { name: 'Red Sox', league: 'MLB', logo: 'Logos/mlb/boston-red-sox.svg' },
  { name: 'Rockies', league: 'MLB', logo: 'Logos/mlb/colorado-rockies.svg' },
  { name: 'Royals', league: 'MLB', logo: 'Logos/mlb/kansas-city-royals.svg' },
  { name: 'Tigers', league: 'MLB', logo: 'Logos/mlb/detroit-tigers.svg' },
  { name: 'Twins', league: 'MLB', logo: 'Logos/mlb/minnesota-twins.svg' },
  { name: 'White Sox', league: 'MLB', logo: 'Logos/mlb/chicago-white-sox.svg' },
  { name: 'Yankees', league: 'MLB', logo: 'Logos/mlb/new-york-yankees.svg' },

  // MLS Teams
  { name: 'Atlanta United', league: 'MLS', logo: 'Logos/mls/atlanta-united-fc.svg' },
  { name: 'Chicago Fire', league: 'MLS', logo: 'Logos/mls/chicago-fire.svg' },
  { name: 'Colorado Rapids', league: 'MLS', logo: 'Logos/mls/colorado-rapids.svg' },
  { name: 'Columbus Crew', league: 'MLS', logo: 'Logos/mls/columbus-crew.svg' },
  { name: 'FC Dallas', league: 'MLS', logo: 'Logos/mls/fc-dallas.svg' },
  { name: 'D.C. United', league: 'MLS', logo: 'Logos/mls/dc-united.svg' },
  { name: 'Houston Dynamo', league: 'MLS', logo: 'Logos/mls/houston-dynamo.svg' },
  { name: 'LA Galaxy', league: 'MLS', logo: 'Logos/mls/la-galaxy.svg' },
  { name: 'Minnesota United', league: 'MLS', logo: 'Logos/mls/minnesota-united-fc.svg' },
  { name: 'CF Montreal', league: 'MLS', logo: 'Logos/mls/montreal-impact.svg' },
  { name: 'New England Revolution', league: 'MLS', logo: 'Logos/mls/new-england-revolution.svg' },
  { name: 'New York City FC', league: 'MLS', logo: 'Logos/mls/new-york-city-fc.svg' },
  { name: 'New York Red Bulls', league: 'MLS', logo: 'Logos/mls/new-york-red-bulls.svg' },
  { name: 'Orlando City', league: 'MLS', logo: 'Logos/mls/orlando-city-sc.svg' },
  { name: 'Philadelphia Union', league: 'MLS', logo: 'Logos/mls/philadelphia-union.svg' },
  { name: 'Portland Timbers', league: 'MLS', logo: 'Logos/mls/portland-timbers.svg' },
  { name: 'Real Salt Lake', league: 'MLS', logo: 'Logos/mls/real-salt-lake.svg' },
  { name: 'San Jose Earthquakes', league: 'MLS', logo: 'Logos/mls/san-jose-earthquakes.svg' },
  { name: 'Seattle Sounders', league: 'MLS', logo: 'Logos/mls/seattle-sounders-fc.svg' },
  { name: 'Sporting Kansas City', league: 'MLS', logo: 'Logos/mls/sporting-kansas-city.svg' },
  { name: 'Toronto FC', league: 'MLS', logo: 'Logos/mls/toronto-fc.svg' },
  { name: 'Vancouver Whitecaps', league: 'MLS', logo: 'Logos/mls/vancouver-whitecaps-fc.svg' },

  // NHL Teams
  { name: 'Bruins', league: 'NHL', logo: 'Logos/nhl/boston-bruins.svg' },
  { name: 'Sabres', league: 'NHL', logo: 'Logos/nhl/buffalo-sabres.svg' },
  { name: 'Red Wings', league: 'NHL', logo: 'Logos/nhl/detroit-red-wings.svg' },
  { name: 'Panthers', league: 'NHL', logo: 'Logos/nhl/florida-panthers.svg' },
  { name: 'Canadiens', league: 'NHL', logo: 'Logos/nhl/montreal-canadiens.svg' },
  { name: 'Senators', league: 'NHL', logo: 'Logos/nhl/ottawa-senators.svg' },
  { name: 'Lightning', league: 'NHL', logo: 'Logos/nhl/tampa-bay-lightning.svg' },
  { name: 'Maple Leafs', league: 'NHL', logo: 'Logos/nhl/toronto-maple-leafs.svg' },
  { name: 'Hurricanes', league: 'NHL', logo: 'Logos/nhl/carolina-hurricanes.svg' },
  { name: 'Blue Jackets', league: 'NHL', logo: 'Logos/nhl/columbus-blue-jackets.svg' },
  { name: 'Devils', league: 'NHL', logo: 'Logos/nhl/new-jersey-devils.svg' },
  { name: 'Islanders', league: 'NHL', logo: 'Logos/nhl/new-york-islanders.svg' },
  { name: 'Rangers', league: 'NHL', logo: 'Logos/nhl/new-york-rangers.svg' },
  { name: 'Flyers', league: 'NHL', logo: 'Logos/nhl/philadelphia-flyers.svg' },
  { name: 'Penguins', league: 'NHL', logo: 'Logos/nhl/pittsburgh-penguins.svg' },
  { name: 'Capitals', league: 'NHL', logo: 'Logos/nhl/washington-capitals.svg' },
  { name: 'Blackhawks', league: 'NHL', logo: 'Logos/nhl/chicago-blackhawks.svg' },
  { name: 'Avalanche', league: 'NHL', logo: 'Logos/nhl/colorado-avalanche.svg' },
  { name: 'Stars', league: 'NHL', logo: 'Logos/nhl/dallas-stars.svg' },
  { name: 'Wild', league: 'NHL', logo: 'Logos/nhl/minnesota-wild.svg' },
  { name: 'Predators', league: 'NHL', logo: 'Logos/nhl/nashville-predators.svg' },
  { name: 'Blues', league: 'NHL', logo: 'Logos/nhl/st-louis-blues.svg' },
  { name: 'Jets', league: 'NHL', logo: 'Logos/nhl/winnipeg-jets.svg' },
  { name: 'Flames', league: 'NHL', logo: 'Logos/nhl/calgary-flames.svg' },
  { name: 'Oilers', league: 'NHL', logo: 'Logos/nhl/edmonton-oilers.svg' },
  { name: 'Canucks', league: 'NHL', logo: 'Logos/nhl/vancouver-canucks.svg' },
  { name: 'Ducks', league: 'NHL', logo: 'Logos/nhl/anaheim-ducks.svg' },
  { name: 'Kings', league: 'NHL', logo: 'Logos/nhl/los-angeles-kings.svg' },
  { name: 'Sharks', league: 'NHL', logo: 'Logos/nhl/san-jose-sharks.svg' },
  { name: 'Golden Knights', league: 'NHL', logo: 'Logos/nhl/vegas-golden-knights.svg' },
  { name: 'Coyotes', league: 'NHL', logo: 'Logos/nhl/arizona-coyotes.svg' },

  // EPL Teams
  { name: 'Arsenal', league: 'EPL', logo: 'Logos/epl/arsenal.svg' },
  { name: 'Aston Villa', league: 'EPL', logo: 'Logos/epl/aston-villa.svg' },
  { name: 'Brighton', league: 'EPL', logo: 'Logos/epl/brighton-&-hove-albion.svg' },
  { name: 'Bournemouth', league: 'EPL', logo: 'Logos/epl/afc-bournemouth.svg' },
  { name: 'Burnley', league: 'EPL', logo: 'Logos/epl/burnley.svg' },
  { name: 'Chelsea', league: 'EPL', logo: 'Logos/epl/chelsea.svg' },
  { name: 'Crystal Palace', league: 'EPL', logo: 'Logos/epl/crystal-palace.svg' },
  { name: 'Everton', league: 'EPL', logo: 'Logos/epl/everton.svg' },
  { name: 'Huddersfield Town', league: 'EPL', logo: 'Logos/epl/huddersfield-town.svg' },
  { name: 'Hull City', league: 'EPL', logo: 'Logos/epl/hull-city.svg' },
  { name: 'Leicester City', league: 'EPL', logo: 'Logos/epl/leicester-city.svg' },
  { name: 'Liverpool', league: 'EPL', logo: 'Logos/epl/liverpool.svg' },
  { name: 'Manchester City', league: 'EPL', logo: 'Logos/epl/manchester-city.svg' },
  { name: 'Manchester United', league: 'EPL', logo: 'Logos/epl/manchester-united.svg' },
  { name: 'Middlesbrough', league: 'EPL', logo: 'Logos/epl/middlesbrough.svg' },
  { name: 'Newcastle United', league: 'EPL', logo: 'Logos/epl/newcastle-united.svg' },
  { name: 'Queens Park Rangers', league: 'EPL', logo: 'Logos/epl/queens-park-rangers.svg' },
  { name: 'Southampton', league: 'EPL', logo: 'Logos/epl/southampton.svg' },
  { name: 'Stoke City', league: 'EPL', logo: 'Logos/epl/stoke-city.svg' },
  { name: 'Sunderland', league: 'EPL', logo: 'Logos/epl/sunderland.svg' },
  { name: 'Swansea City', league: 'EPL', logo: 'Logos/epl/swansea-city.svg' },
  { name: 'Tottenham', league: 'EPL', logo: 'Logos/epl/tottenham-hotspur.svg' },
  { name: 'Watford', league: 'EPL', logo: 'Logos/epl/watford.svg' },
  { name: 'West Bromwich Albion', league: 'EPL', logo: 'Logos/epl/west-bromwich-albion.svg' },
  { name: 'West Ham United', league: 'EPL', logo: 'Logos/epl/west-ham-united.svg' }
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
let isMobile = false;
let currentLogoIndex = 0;
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
let mobileCurrentLogo, mobileLogoDisplay, mobileTeamName, mobileBuckets;

// --- Game Functions ---
function startGame() {
  gameRunning = true;
  score = 0;
  correctAnswers = 0;
  totalAnswers = 0;
  timeElapsed = 0;
  usedTeams = [];
  activeLogos = [];
  currentLogoIndex = 0;
  gameOverElement.style.display = 'none';
  updateDisplay();
  
  // Check if mobile
  isMobile = window.innerWidth <= 700;
  
  if (isMobile) {
    startMobileGame();
  } else {
    populateLogoStack();
  }
  
  gameTimer = setInterval(() => {
    timeElapsed++;
    updateDisplay();
  }, 1000);
}

function endGame() {
  gameRunning = false;
  clearInterval(gameTimer);
  
  if (activeLogos.length === 0) {
    gameOverMessage.textContent = 'Congratulations! You sorted all logos!';
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
  
  // Remove the 100 logo limit - load all logos
  const shuffledLogos = shuffleArray([...teams]);
  
  shuffledLogos.forEach((team, index) => {
    createLogo(index);
  });
}

function createLogo(index) {
  const team = getRandomTeam(index);
  
  // Get center position and create exclusion zone around buckets
  const centerX = window.innerWidth / 2;
  const centerY = window.innerHeight / 2;
  const exclusionZone = 300; // Radius around center to avoid
  
  // Define no-go zones for UI elements
  const bottomUIZone = {
    x: 0,
    y: window.innerHeight - 120, // Bottom 120px for timer/score bar
    width: window.innerWidth,
    height: 120
  };
  
  let x, y;
  let attempts = 0;
  do {
    x = Math.random() * (window.innerWidth - 80);
    y = Math.random() * (window.innerHeight - 80);
    attempts++;
  } while (
    (Math.sqrt((x - centerX) ** 2 + (y - centerY) ** 2) < exclusionZone || 
     (x >= bottomUIZone.x && x <= bottomUIZone.x + bottomUIZone.width &&
      y >= bottomUIZone.y && y <= bottomUIZone.y + bottomUIZone.height)) && 
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

// --- Mobile Game Functions ---
function startMobileGame() {
  // Shuffle all teams for mobile
  activeLogos = shuffleArray([...teams]);
  currentLogoIndex = 0;
  showNextMobileLogo();
}

function showNextMobileLogo() {
  if (currentLogoIndex >= activeLogos.length) {
    // All logos completed - player wins!
    endGame();
    return;
  }
  
  currentTeam = activeLogos[currentLogoIndex];
  mobileLogoDisplay.src = currentTeam.logo;
  mobileLogoDisplay.alt = currentTeam.name;
  mobileTeamName.textContent = currentTeam.name;
  mobileCurrentLogo.style.display = 'block';
}

function handleMobileBucketClick(bucketLeague) {
  if (!gameRunning || !currentTeam) return;
  
  totalAnswers++;
  
  if (bucketLeague === currentTeam.league) {
    // Correct answer
    score++;
    correctAnswers++;
    updateDisplay();
    currentLogoIndex++;
    showNextMobileLogo();
  } else {
    // Wrong answer - end the game immediately
    endGame();
  }
}

// Mobile game functionality
let mobileLogos = [];
let currentMobileLogoIndex = 0;

// Check if mobile device
function checkMobileDevice() {
  return window.innerWidth <= 700;
}

// Update instructions based on device
function updateInstructions() {
  const instructionsText = document.getElementById('instructions-text');
  if (checkMobileDevice()) {
    instructionsText.innerHTML = `
      • Tap the correct league bucket for each team logo<br>
      • 6 leagues: NFL, NBA, MLB, MLS, NHL, and EPL<br>
      • One logo at a time will be shown<br>
      • Get points for correct placements<br>
      • Race against the clock!
    `;
  } else {
    instructionsText.innerHTML = `
      • Drag and drop team logos into their correct league buckets<br>
      • 6 leagues: NFL, NBA, MLB, MLS, NHL, and EPL<br>
      • All 176 logos will appear on screen at once<br>
      • Get points for correct placements<br>
      • Race against the clock!
    `;
  }
}

// Load mobile game
function loadMobileGame() {
  const mobileCurrentLogo = document.getElementById('mobile-current-logo');
  const mobileBuckets = document.querySelectorAll('.mobile-bucket');
  
  mobileLogos = shuffleArray([...logos]);
  currentMobileLogoIndex = 0;
  
  // Show first logo
  showCurrentMobileLogo();
  
  // Add click handlers to mobile buckets
  mobileBuckets.forEach(bucket => {
    bucket.addEventListener('click', handleMobileBucketClick);
  });
}

// Show current mobile logo
function showCurrentMobileLogo() {
  if (currentMobileLogoIndex >= mobileLogos.length) {
    endGame();
    return;
  }
  
  const currentLogo = mobileLogos[currentMobileLogoIndex];
  const mobileCurrentLogo = document.getElementById('mobile-current-logo');
  const mobileLogoDisplay = document.getElementById('mobile-logo-display');
  const mobileTeamName = document.getElementById('mobile-team-name');
  
  mobileLogoDisplay.src = currentLogo.src;
  mobileLogoDisplay.alt = currentLogo.name;
  mobileTeamName.textContent = currentLogo.name;
  mobileCurrentLogo.style.display = 'block';
}

// Handle mobile bucket click
function handleMobileBucketClick(event) {
  const bucket = event.currentTarget;
  const selectedLeague = bucket.dataset.league;
  const currentLogo = mobileLogos[currentMobileLogoIndex];
  
  if (selectedLeague === currentLogo.league) {
    // Correct answer
    score += 10;
    updateScore();
    
    // Visual feedback
    bucket.style.backgroundColor = 'rgba(34, 197, 94, 0.2)';
    bucket.style.borderColor = '#22c55e';
    
    setTimeout(() => {
      bucket.style.backgroundColor = 'rgba(255, 255, 255, 0.8)';
      bucket.style.borderColor = 'transparent';
    }, 500);
  } else {
    // Wrong answer
    score = Math.max(0, score - 5);
    updateScore();
    
    // Visual feedback
    bucket.style.backgroundColor = 'rgba(239, 68, 68, 0.2)';
    bucket.style.borderColor = '#ef4444';
    
    setTimeout(() => {
      bucket.style.backgroundColor = 'rgba(255, 255, 255, 0.8)';
      bucket.style.borderColor = 'transparent';
    }, 500);
  }
  
  // Move to next logo
  currentMobileLogoIndex++;
  setTimeout(() => {
    showCurrentMobileLogo();
  }, 300);
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

  // Mobile elements
  mobileCurrentLogo = document.getElementById('mobile-current-logo');
  mobileLogoDisplay = document.getElementById('mobile-logo-display');
  mobileTeamName = document.getElementById('mobile-team-name');
  mobileBuckets = document.querySelectorAll('.mobile-bucket');

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
      if (!gameRunning || !currentTeam || isMobile) return;
      
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

  // Set up mobile bucket event listeners
  mobileBuckets.forEach(bucket => {
    bucket.addEventListener('click', () => {
      if (!gameRunning) return;
      const bucketLeague = bucket.dataset.league;
      handleMobileBucketClick(bucketLeague);
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

// Instructions overlay functionality
document.addEventListener('DOMContentLoaded', function() {
  const instructionsOverlay = document.getElementById('instructions-overlay');
  const startGameBtn = document.getElementById('start-game-btn');
  
  // Update instructions based on device
  updateInstructions();
  
  // Show instructions overlay on page load
  instructionsOverlay.style.display = 'flex';
  
  // Start game when button is clicked
  startGameBtn.addEventListener('click', function() {
    instructionsOverlay.style.display = 'none';
    
    if (checkMobileDevice()) {
      loadMobileGame();
    } else {
      loadGame();
    }
    
    startTimer();
  });

  // Update instructions on window resize
  window.addEventListener('resize', updateInstructions);
});

// Initialize when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
  initializeHighScores();
  // Don't auto-start the game - wait for instructions overlay
});

// --- Utility Functions ---
function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}
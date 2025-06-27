# LogoSort 🏆

A fast-paced web game where you drag and drop sports team logos into their correct league buckets. Test your sports knowledge and reflexes as you sort through 176+ team logos from NFL, NBA, MLB, MLS, NHL, and EPL!

## 🎮 How to Play

1. **Objective**: Drag team logos from around the screen into the correct league bucket in the center
2. **Leagues**: Sort logos into NFL, NBA, MLB, MLS, NHL, or EPL buckets
3. **Scoring**: Earn points for each correct placement
4. **Challenge**: One wrong answer ends the game!
5. **Goal**: Sort all logos to achieve the ultimate victory

## 🚀 Features

- **176+ Team Logos**: Includes teams from all major sports leagues (NFL, NBA, MLB, MLS, NHL, EPL)
- **Drag & Drop Interface**: Intuitive gameplay mechanics on desktop
- **Mobile Optimized**: Touch-friendly interface with 4 random leagues per game
- **Real-time Scoring**: Track your progress and time
- **High Score System**: Compete against your best scores with persistent leaderboard
- **Responsive Design**: Automatically adapts interface for mobile and desktop
- **No Dependencies**: Pure HTML, CSS, and JavaScript

## 🏃‍♂️ Quick Start

1. Clone or download this repository
2. Open `index.html` in your web browser
3. Start dragging logos into the correct buckets!

No build process or installation required - just open and play!

## 📁 Project Structure

```
logosort/
├── index.html          # Main game interface
├── game.js            # Game logic and functionality
├── README.md          # This file
├── LICENSE            # MIT License
└── Logos/            # Team logo images (organized by league)
    ├── NFL/
    ├── NBA/
    ├── MLB/
    ├── MLS/
    ├── NHL/
    └── EPL/
```

## 🎯 Game Rules

- **Desktop Mode**: All logos appear on screen simultaneously - drag and drop into correct buckets
- **Mobile Mode**: One logo at a time with 4 randomly selected leagues to choose from
- **Correct Sort**: +1 point, logo disappears
- **Wrong Sort**: Game over immediately
- **Time Tracking**: Game tracks survival time for scoring
- **Perfect Game**: Sort all logos for maximum points

## 🏆 Scoring System

- **Base Score**: 10 points per correct answer
- **Accuracy Bonus**: Up to 50 bonus points for high accuracy
- **Time Bonus**: 1 point per second survived (capped at 100)
- **High Scores**: Top 10 scores saved locally in browser

## 🛠️ Technical Details

- **Frontend**: Pure HTML5, CSS3, JavaScript (ES6+)
- **Storage**: Browser cookies for high score persistence
- **Compatibility**: Modern browsers with drag-and-drop support
- **Performance**: Optimized for smooth gameplay with 176+ simultaneous elements

## 🎨 Features

- **Visual Feedback**: Hover effects and drag animations
- **Responsive Layout**: Adapts to different screen sizes
- **League Buckets**: Clear visual indicators for each sports league
- **Game Over Screen**: Detailed score breakdown and leaderboard
- **Backdrop Blur**: Modern UI with glassmorphism effects

## 📊 Teams Included

- **NFL**: All 32 teams
- **NBA**: All 30 teams  
- **MLB**: All 30 teams
- **MLS**: 22 major teams
- **NHL**: 31 teams
- **EPL**: 25 Premier League teams

## 🔧 Customization

Want to modify the game? Key areas to customize:

- **Add Teams**: Modify the `teams` array in `game.js`
- **Adjust Difficulty**: Change scoring constants or game modes
- **Scoring**: Modify `calculateFinalScore()` function
- **Styling**: Update CSS in `index.html`

## 🤝 Contributing

Contributions welcome! Feel free to:
- Add more team logos
- Improve the UI/UX
- Add new game modes
- Fix bugs or optimize performance

## 📄 License

MIT License - see [LICENSE](LICENSE) file for details.

## 🎮 Play Now

Simply open `index.html` in your browser and start sorting! Can you achieve the perfect game?

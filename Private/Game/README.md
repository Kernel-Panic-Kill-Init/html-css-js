# 🎯 Target Clicker Game

**Timed reaction game** - click the red target before time runs out!  
Vanilla JS portfolio project showcasing DOM manipulation, game loops & progressive difficulty.

## 🎮 How to Play
- Click **red target** (900ms cooldown between clicks)  
- Collect **points** to level up  
- **5 difficulty levels** - faster target movement + shorter time limits  
- **Game Over** when timer reaches 0

## 📊 Level Specifications
| Level | Points Required | Time Limit | Target Speed |
|-------|-----------------|------------|--------------|
| 1     | 12              | 30s        | 1000ms       |
| 2     | 18              | 30s        | 900ms        |
| 3     | 20              | 25s        | 800ms        |
| 4     | 20              | 22s        | 700ms        |
| 5     | 24              | 20s        | 600ms        |

## 🛠 Tech Stack
- **Vanilla JavaScript** (ES6+ arrow functions, `setInterval`, event listeners)
- **HTML5** DOM manipulation (`querySelector`, `textContent`, `addEventListener`)
- **CSS3** absolute positioning, gradients, responsive design
- **Game State** management (global variables, level progression)

## 🚀 Quick Start
```bash
git clone [https://github.com/Kernel-Panic-Kill-Init/html-css-js/tree/main/Private/Game]
cd target-clicker-game
open index.html
# or use Live Server extension
📱 Live Demo


🎯 Planned Features
Phase 1 - Core Polish
 Highscore system (localStorage + dedicated UI button)

 Sound effects (click feedback + level up celebration)

 Restart button functionality

 Mobile touch optimization

Phase 2 - Backend Integration
 User authentication (Python Flask/Django + PostgreSQL)

 Global leaderboards (REST API + real-time updates)

 Persistent progress (save best scores per user)

 Multiplayer mode (real-time competition)

Phase 3 - Pro Features
 Progressive Web App (PWA - offline play)

 Particle effects on target hits

 Daily challenges & achievements

 React/Vue.js rewrite for component architecture

🐛 Debug Lessons Learned
querySelector('timer') vs querySelector('#timer') - always verify selectors

CSS position: absolute !important vs inline style.left priority

offsetWidth returns NaN on null DOM elements - add null checks

Global vs local variables in game state management

DOMContentLoaded timing for DOM-ready guarantees

📈 Portfolio Value
Perfect Junior Frontend project demonstrating:

Clean, readable vanilla JS code

Event-driven programming & game loops

DOM manipulation mastery

Progressive difficulty design

Responsive UI/UX

Debug/problem-solving skills

Built during 3AM coding session with insomnia and caffeine 😎

Author: Filip Łuka / Kernel-Panic-Kill-Init
GitHub: https://github.com/Kernel-Panic-Kill-Init

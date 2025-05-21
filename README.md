# Memory Card Game

Memory Card Game is an interactive browser game where players need to find pairs of matching cards.

## Project Description

This classic memory game is implemented using React and Redux. Players are challenged to open cards, remember their positions, and find matching pairs. When all pairs are found, a congratulatory message appears with fireworks animation.

## Technologies

- React 18
- Redux (Redux Toolkit)
- Vite
- React Card Flip
- React Canvas Confetti
- SweetAlert2
- React Icons

## Features

- Customizable game board size
- Card flip animations
- Matching pair verification
- Victory celebration with fireworks animation
- Responsive design

## Project Structure

```
memory-card-game/
├── public/             # Static assets
├── src/                # Source files
│   ├── assets/         # Images and other assets
│   │   └── confetti.png
│   ├── components/     # React components
│   │   ├── Card.jsx           # Single card component
│   │   ├── Card.css
│   │   ├── Cards.jsx          # Game board component
│   │   ├── Cards.css
│   │   ├── FinishModal.jsx    # Victory modal window
│   │   ├── Modal.jsx          # Generic modal component
│   │   ├── RadioInput.jsx     # Game size selection component
│   │   └── RadioInput.css
│   ├── data/           # Game data
│   │   └── cardsData.js       # Card generation and game logic
│   ├── hooks/          # Custom React hooks
│   │   └── useModal.jsx       # Modal handling hook
│   ├── store/          # Redux store
│   │   ├── cardsSlice.js      # Game state management
│   │   └── store.js           # Redux store configuration
│   ├── App.jsx         # Main application component
│   ├── App.css
│   ├── main.jsx        # Application entry point
│   └── index.css       # Global styles
├── index.html          # HTML entry point
├── package.json        # Dependencies and scripts
├── vite.config.js      # Vite configuration
└── README.md           # Project documentation
```

## Installation and Running

### Prerequisites

- Node.js (version 14 or higher)
- npm or yarn

### Installation Steps

1. Clone the repository:

```bash
git clone https://github.com/your-username/memory-card-game.git
cd memory-card-game
```

2. Install dependencies:

```bash
npm install
# or
yarn install
```

3. Run the project in development mode:

```bash
npm run dev
# or
yarn dev
```

Open http://localhost:5173 in your browser.

## Production Build

```bash
npm run build
# or
yarn build
```

The production build will be located in the `dist` directory.

## How to Play

1. Select the size of the game board
2. Open cards by clicking on them
3. Try to remember card positions
4. Find all pairs to win

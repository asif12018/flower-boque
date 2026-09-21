# A Virtual Bouquet 🌸

A beautiful, premium, romantic virtual bouquet website crafted with HTML, CSS, and vanilla JavaScript. Designed to be a personal digital gift.

## Features
- **Mobile-first Design**: Optimized for smooth viewing on any mobile device (tested for 360px+ widths).
- **Smooth Animations**: Elegant fades, gentle sways, and falling petals using GPU-accelerated CSS animations.
- **Interactive Experience**: Interactive buttons reveal hidden messages and warm ambient lighting.
- **Audio Integration**: Clean UI for playing background music.
- **No Dependencies**: Pure HTML, CSS, and JavaScript. No React, Vue, Tailwind, or Bootstrap required.

## How to Customize

This project is built to be easily personalized.

### 1. Edit the Messages
Open `script.js` and edit the variables at the very top:
```js
const firstMessageTitle = "Just a little something for you. 🌸";
const firstMessageSubtitle = "Because some days deserve a little more beauty.";
const finalMessage = "Maybe I can't hand you flowers today,<br>so I made you a little bouquet instead. 🤍";
```

### 2. Add Your Own Music
1. Obtain an `.mp3` file of the music you want to play.
2. Rename it to `music.mp3`.
3. Place it inside the `assets/` folder.
4. Ensure the `<audio>` tag in `index.html` correctly points to `assets/music.mp3` (which it does by default).

### 3. Replace the Bouquet Image
By default, the project uses a high-quality placeholder image of a bouquet from Unsplash. A CSS mask is applied in `style.css` to blend its dark background elegantly into the website's background.

**If you have your own beautiful transparent PNG of a bouquet:**
1. Place your transparent PNG image in the `assets/` folder (e.g., `assets/bouquet.png`).
2. Open `index.html`.
3. Change the `<img src="...">` inside `<div class="bouquet-container">` to `<img src="assets/bouquet.png" ...>`.
4. Open `style.css` and find `.bouquet-image`.
5. Remove or comment out the `mask-image` and `-webkit-mask-image` lines so your transparent PNG displays normally without soft edges.

## File Structure
```text
virtual-bouquet/
│
├── index.html       # The main structure
├── style.css        # The styling and animations
├── script.js        # The logic, particles, and interaction
├── README.md        # Documentation
│
└── assets/          # Directory for your images and music
    └── petals/      # Optional directory if you decide to use image assets for petals later
```

## Running the Website
Simply double-click `index.html` to open it in any modern web browser (Chrome, Safari, Firefox). 
No build tools or servers are required! For the best experience testing music autoplay policies, running a simple local server (like VSCode Live Server) is recommended.

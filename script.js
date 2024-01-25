let playerState = 'idle'; /* to control sprite name set below */
const dropdown = document.getElementById('animations') /* link to button */
dropdown.addEventListener('change', function(e){
    playerState = e.target.value; /* whenever a selection is clicked, state is set to value assigned */
})



const canvas = document.getElementById('canvas1');
const ctx = canvas.getContext('2d'); /* The getContext() method returns an object with tools (methods) for drawing. */

/* https://www.w3schools.com/tags/ref_canvas.asp */

/* set canvas scaling width and height to avoid distortion*/

const CANVAS_WIDTH = canvas.width = 600;
const CANVAS_HEIGHT = canvas.height = 600;

const playerImage = new Image(); /* creates html image element */
playerImage.src = 'shadow_dog.png' /* SOURCE OF THE SPRITE SHEET */
const spriteWidth = 575; /* width of image in pixels divided by 12 columns */
const spriteHeight = 523;


/* Instead of manually changing numbers below to cycle the sprites, creating variables  */


let gameFrame = 0;
const staggerFrames = 8; /* to slow down frames by this amount */
/* creating sprite arrays */
const spriteAnimations = [];
const animationStates = [
    {
        name: 'idle',
        frames: 7,
    },
    {
        name: 'jump',
        frames: 7,
    },
    {
        name: 'fall',
        frames: 7,
    },
    {
        name: 'run',
        frames: 9,
    },
    {
        name: 'dizzy',
        frames: 11,
    },
    {
        name: 'sit',
        frames: 5,
    },
    {
        name: 'roll',
        frames: 7,
    },
    {
        name: 'bite',
        frames: 7,
    },
    {
        name: 'ko',
        frames: 12,
    },
    {
        name: 'gethit',
        frames: 4,
    }
]; /* function to run forEach through states (names) and index */
animationStates.forEach((state, index) => {
    let frames = {
        loc: [],
    } /* this for loop cycles through each sprite and gets its position on the sheet. returns its position to the array I made */
    for (let j = 0; j <  state.frames; j++){
        let positionX = j * spriteWidth;
        let positionY = index * spriteHeight;
        frames.loc.push({x: positionX, y: positionY})
    }
    spriteAnimations[state.name] = frames;
})
console.log(spriteAnimations);

/* making custom function animation loop. Have to clear old paint between animation frames. clear requires 4 variables for location */
function animate(){
    ctx.clearRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
    let position = Math.floor(gameFrame/staggerFrames) % spriteAnimations[playerState].loc.length; /* math.floor removes decimal points. only want whole numbers */
    let frameX = spriteWidth * position;
    let frameY = spriteAnimations[playerState].loc[position].y; /* playerState adjusts sprite animation in variable above */
    ctx.drawImage(playerImage, frameX, frameY, spriteWidth, spriteHeight, 0, 0, spriteWidth, spriteHeight); 
    gameFrame++;
    requestAnimationFrame(animate); 
};
animate();
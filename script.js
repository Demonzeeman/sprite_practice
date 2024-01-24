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

let frameX = 0;
let frameY = 3;
let gameFrame = 0;
const staggerFrames = 5; /* to slow down frames by this amount */
 

/* making custom function animation loop. Have to clear old paint between animation frames. clear requires 4 variables for location */
function animate(){
    ctx.clearRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
    let position = Math.floor(gameFrame/staggerFrames)
    ctx.drawImage(playerImage, frameX * spriteWidth, frameY * spriteHeight, spriteWidth, spriteHeight, 0, 0, spriteWidth, spriteHeight); 
    gameFrame++;
    requestAnimationFrame(animate); 
};
animate();
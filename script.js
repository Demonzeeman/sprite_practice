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


/* making custom function animation loop. Have to clear old paint between animation frames. clear requires 4 variables for location */
function animate(){
    ctx.clearRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
    /* ctx.fillRect(50 ,50,100,100) */ /* location of rec tangle, and width and height*/
    /* 
    ctx.drawImage(image, sx, sy, sw, sh, dx, dy, dw, dh);  this has the most utility, 9 variable. image, then source then destination */
    ctx.drawImage(playerImage, 2 * spriteWidth, 0, spriteWidth, spriteHeight, 0, 0, spriteWidth, spriteHeight); /* include x and y coords, using spriteWidth and Height draws at original size */
    requestAnimationFrame(animate); /* runs the function */
};
animate();
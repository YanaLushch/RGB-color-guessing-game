var numSquares = 6;
var colors = generateRandomColors(numSquares);
var result = document.querySelector('.result');
var playAgain = document.querySelector('.reset');
var pickedColor = pickColor();
var rgbDisplay = document.querySelector('h1');
var squares = document.querySelectorAll('.square');
var header = document.querySelector('header');
var easyLevel = document.querySelector('.easy');
var hardLevel = document.querySelector('.hard');
var invisibleSquares = document.querySelectorAll('.invisibleSquare')

rgbDisplay.textContent = pickedColor;

easyLevel.addEventListener('click', function(){
this.classList.add('hover-over');
hardLevel.classList.remove('hover-over');
numSquares = 3;
colors = generateRandomColors(numSquares);
pickedColor = pickColor();
//display new picked color
rgbDisplay.textContent = pickedColor;
//change background-colors of header and squares
header.style.background = 'rgb(68, 130, 182)';
for (let i = 0; i < squares.length; i++) {
// added initial random colors to the squares
if (colors[i]) {
    squares[i].style.backgroundColor = colors[i];
} else{
    squares[i].style.display = 'none';
}
};
});
hardLevel.addEventListener('click', function(){
this.classList.add('hover-over');  
easyLevel.classList.remove('hover-over');
numSquares = 6;
colors = generateRandomColors(numSquares);
pickedColor = pickColor();
//display new picked color
rgbDisplay.textContent = pickedColor;
//change background-colors of header and squares
header.style.background = 'rgb(68, 130, 182)';
for (let i = 0; i < squares.length; i++) {
// added initial random colors to the squares
    squares[i].style.backgroundColor = colors[i];
    squares[i].style.display = 'block';
};
});


for (let i = 0; i < squares.length; i++) {
    // added initial random colors to the squares
    squares[i].style.backgroundColor = colors[i];   
    //if we click on the square
    squares[i].addEventListener('click', function(){
        var clickedColor = this.style.backgroundColor;
        if (clickedColor === pickedColor) {
            result.textContent = "Correct!";
            ChangeToCorrectColor(clickedColor);
            header.style.background = clickedColor;
            playAgain.textContent = 'Play Again';
        } else {
            this.style.backgroundColor = 'black';
            result.textContent = 'Try Again?';
            playAgain.textContent = 'New game';
        }
    })
}
playAgain.addEventListener('click', function(){
    result.textContent = '';
    //generate all new colors
    colors = generateRandomColors(numSquares);
    //pick a new random color from array
    pickedColor = pickColor();
    //display new picked color
    rgbDisplay.textContent = pickedColor;
    //change background-colors of header and squares
    header.style.background = 'rgb(68, 130, 182)';
    for (let i = 0; i < squares.length; i++) {
    // added initial random colors to the squares
    squares[i].style.backgroundColor = colors[i];
    };
})







function ChangeToCorrectColor (color) {
    for (let i = 0; i < squares.length; i++) {
        squares[i].style.backgroundColor = color;   
    }
}
function pickColor(){
    var random = Math.floor(Math.random()*colors.length);
    return colors[random];
}
function generateRandomColors(num){
    var arr = [];
    for (let i = 0; i < num; i++) {   
        arr.push(randomColor());
    }    
    return arr;
}
function randomColor(){
    const getN = () => Math.floor(Math.random()*256);
    return 'rgb('+ getN() +', ' + getN() +', '+ getN() +')'
}


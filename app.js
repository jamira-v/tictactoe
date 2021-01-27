
//used the selector from css that selects all of the cells, instead of just one
let cells = document.querySelectorAll('.row > div');


//running the variable cell previously stated
console.log(cells);
//used from github example
let activePlayer = "X";
let turnCounter = 0;
let winningMsg = document.getElementById('data-winning-message-text')
let restart = document.getElementById('restartButton')
let nonActivePlayer = "O";


//i=0 as long as i is less than the length of the cell and increments by 1
for (let i = 0; i < cells.length; i++) {
    cells[i].addEventListener('click', cellClicked);

}
//restart.addEventListener('click', cellClicked)
function cellClicked() {
    if (event.target.textContent === "") {
      turnCounter++; //goes up by one every time a turn is taken
      event.target.textContent = activePlayer;
      togglePlayer();
      checkWin();
    }
}
//creates a function that toggles between the two players when clicking
//differentiates between the active player and the nonanctive player 
function togglePlayer() {
    if (activePlayer === "X") {
      activePlayer = "O";
      nonActivePlayer ="X";
    } else {
      activePlayer = "X";
      nonActivePlayer = "O";
    } //if active player is x then it changegs to O & vice versa
  }
  
  //function placeMark(cells, activePlayer){
     // cells.activePlayer.(activePlayer, activePlayer2)
  //}
  function togglePlayer() {
    if (activePlayer === "X") {
      activePlayer = "O";
      nonActivePlayer ="X";
    } else {
      activePlayer = "X";
      nonActivePlayer = "O";
    } //if active player is x then it changegs to O & vice versa
  }
  
  
//used from github to test to see if it works
  function checkWin() {
    if (
      cells[0].textContent === cells[1].textContent &&
      cells[1].textContent === cells[2].textContent &&
      cells[0].textContent === cells[2].textContent &&
      cells[0].textContent !== ""
    ) {
        console.log('You Won!');
      //return winningMsg.innerText = nonActivePlayer + " won!";  
  } else if (turnCounter === 9) {
    console.log("It's a draw");
      //return winningMsg.innerText = "It's a draw"; 
    
    } else if (
      cells[3].textContent === cells[4].textContent &&
      cells[4].textContent === cells[5].textContent &&
      cells[3].textContent === cells[5].textContent &&
      cells[3].textContent !== ""
    ) {
        console.log('You Won!');
      //return winningMsg.innerText = nonActivePlayer + " won!"; 
      } else if (turnCounter === 9) {
        console.log("It's a draw");
      //return winningMsg.innerText = "It's a draw";
    }
    // all other win combos
    else if (
      cells[6].textContent === cells[7].textContent &&
      cells[7].textContent === cells[8].textContent &&
      cells[6].textContent === cells[8].textContent &&
      cells[6].textContent !== ""
    ) {
        console.log('You Won!');
      //return winningMsg.innerText = nonActivePlayer + " won!";  
     } else if (turnCounter === 9) {
        console.log("It's a draw");
      //return winningMsg.innerText = "It's a draw";
    } else if (
      cells[0].textContent === cells[3].textContent &&
      cells[3].textContent === cells[6].textContent &&
      cells[0].textContent === cells[6].textContent &&
      cells[0].textContent !== ""
    ) {
        console.log('You Won!');
      //return winningMsg.innerText = nonActivePlayer + " won!";  
    } else if (turnCounter === 9) {
        console.log("It's a draw");
     //return winningMsg.innerText = "It's a draw";
    } else if (
      cells[1].textContent === cells[4].textContent &&
      cells[4].textContent === cells[7].textContent &&
      cells[1].textContent === cells[7].textContent &&
      cells[1].textContent !== ""
    ) {
        console.log('You Won!');
      //return winningMsg.innerText = nonActivePlayer + " won!";  
    } else if (turnCounter === 9) {
     return winningMsg.innerText = "It's a draw";
    } else if (
      cells[2].textContent === cells[5].textContent &&
      cells[5].textContent === cells[8].textContent &&
      cells[2].textContent === cells[8].textContent &&
      cells[2].textContent !== ""
    ) {
        console.log('You Won!'); 
      //return winningMsg.innerText = nonActivePlayer + " won!";  
    } else if (turnCounter === 9) {
        console.log("It's a draw");
     //return winningMsg.innerText = "It's a draw";
    } else if (
      cells[0].textContent === cells[4].textContent &&
      cells[4].textContent === cells[8].textContent &&
      cells[4].textContent === cells[8].textContent &&
      cells[0].textContent !== ""
    ) {
      //return winningMsg.innerText = nonActivePlayer + " won!";
      console.log('You Won!');  
    } else if (turnCounter === 9) {
        console.log("It's a draw");
    } else if (
      cells[2].textContent === cells[4].textContent &&
      cells[4].textContent === cells[6].textContent &&
      cells[2].textContent === cells[6].textContent &&
      cells[2].textContent !== ""
    ) {
        console.log('You Won!');
      //return winningMsg.innerText = nonActivePlayer + " won!";  
    } else if (turnCounter === 9) {
     console.log("It's a draw");
    }
  }

//function cellClicked() {
  //  event.target.textContent = 'X'
    //event.target.textContent = 'O'
//}
//let counter = 0;
//trumps previous function

//function cellClicked(event) {
  //  event.target.textContent = 'X' 
    
    //}
    //console.log(counter);
    //counter++;


//pulled from github


//want to display next move
//need an if/else statement that tells the computer to put an O after X is clicked


//event.target represents the cell that is clicked on 
//event.target is the div that is clicked on
//cell[0].textContent will tell the top left cells content, put after opening variable cells
//use to find the winner of the game
//use if/else statements, use it in combination of cell[0].textContent
//can use a boolean i toggle between true and false 

//var str = 'geLength';

//if (str % 2 == 0) {
  //  console.log('The world is nice and even');
//} else {
  //  console.log('The world is an odd place');
//};
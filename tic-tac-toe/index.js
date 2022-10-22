let turn = "x";
let symbols = [["", "", ""], ["", "", ""], ["", "", ""]];



const board = document.querySelector(".board");
var tiles = Array.from(document.querySelectorAll(".tile")); //stworzenie tablicy z tile

board.addEventListener("click", ({ target }) => { //jeśli kliknięto to wykonaj funkcje
  const classes = Array.from(target.classList); //tworzy tablice ze zwróconego DOMTokenList
  if (classes.includes("tile") && classes.length !== 1) return; //to zapobiega zmodyfikowaniu już określonego pola

  const idx = tiles.indexOf(target); //indeks wciśniętego pola (tilea)
  
  target.classList.add(`tile-${turn}`); //dodanie w div opisu tile x lub tile o
  symbols[idx % 3][Math.floor(idx / 3)] = turn; //wypełnia tablice dwówymiarową xem lub kółkiem
  turn = turn === "x" ? "o" : "x"; 
  // In an if statement it would look like: 
// if (turn === 'X') {
// turn = 'O' 
// } else {
// turn = 'X' 
// }; 

  displayTurn(turn);

  checkWin();
  
  reset();
});




function displayTurn(turn) 
{
  var result = document.getElementById("turn");
  result.textContent = `Turn ${turn}`;
}

function checkWin() {
  for (var i=0; i < 3; i++)
  {
    if(symbols[i][0]==symbols[i][1]&&symbols[i][1]==symbols[i][2]) {winnerAlert(symbols[i][0]);}
    
    if(symbols[0][i]==symbols[1][i]&&symbols[1][i]==symbols[2][i]) {winnerAlert(symbols[0][i]);}
  }

  if(symbols[0][0]==symbols[1][1]&&symbols[1][1]==symbols[2][2]) {winnerAlert(symbols[0][0]);}
    
  if(symbols[2][0]==symbols[1][1]&&symbols[1][1]==symbols[0][2]) {winnerAlert(symbols[2][0]);}
    
  function winnerAlert(xOrY)
  {
    if(xOrY!=="") 
    {
      alert("WINNER IS " + xOrY);
    }
  }
  
}

function reset() {
  
  const resetButton = document.querySelector(".reset");
  resetButton.addEventListener("click", function(){
  

  for(var i=0; i<9; i++)
  { 
    var oldChild = document.getElementById("tile");
  var newChild = document.createElement("div");
  newChild.setAttribute("class", "tile");
  newChild.setAttribute("id","tile");
    oldChild.remove();
    board.append(newChild);
  }


   symbols = [["", "", ""], ["", "", ""], ["", "", ""]];
   turn = "x";
   tiles = Array.from(document.querySelectorAll(".tile"));
  });
  
}

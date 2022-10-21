let turn = "x";
let symbols = [["", "", ""], ["", "", ""], ["", "", ""]];

const board = document.querySelector(".board");
const tiles = Array.from(document.querySelectorAll(".tile")); //stworzenie tablicy z tile

board.addEventListener("click", ({ target }) => { //jeśli kliknięto to wykonaj funkcje
  const classes = Array.from(target.classList); //tworzy tablice ze zwróconego DOMTokenList
  if (classes.includes("tile") && classes.length !== 1) return; //to zapobiega obsłurzeniu już określonego pola

  const idx = tiles.indexOf(target); //indeks wciśniętego pola (tilea)
  
  console.log(Array.from(target.classList));
  
  target.classList.add(`tile-${turn}`); //dodanie w div opisu tile x lub tile o
  symbols[idx % 3][Math.floor(idx / 3)] = turn; //wypełnia tablice dwówymiarową xami i kółkami
  turn = turn === "x" ? "o" : "x"; 
  // In an if statement it would look like: 
// if (turn === 'X') {
// turn = 'O' 
// } else {
// turn = 'X' 
// }; 

  displayTurn(turn);

  checkWin();
});



function displayTurn(turn) 
{
  var result = document.getElementById("turn");
  result.textContent = `Tile ${turn}`;
 

}

function checkWin() {
  if(symbols[0][0]==symbols[0][1]&&symbols[0][1]==symbols[0][2])
  alert("x or o is winner");
  // 2. sprawdź czy któryś z graczy wygrał pojedynek - jeśli tak wyświetla komunikat (możesz użyć np. funkcji "alert(...)")
}

// 3. dodaj listener pod przycisk z napisaem "reset" tak, aby po jego kliknięciu wywołać funkcję reset
reset();
function reset() {
  
  const restetButton = document.querySelector(".reset");
  restetButton.addEventListener("click", function(){
    board.innerHTML = dupa;
     
    turn = "x";
    symbols = [["", "", ""], ["", "", ""], ["", "", ""]];
  });
  
}

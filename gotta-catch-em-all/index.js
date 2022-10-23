/*
  1. W pliku data.js pod zmienna "pokemons" znajduje się tablica zawierająca dane wielu pokemonów, masz do niej dostęp również w tym pliku. 
  Chciałbym, abyś użył jej do wyświetlenia wszystkich pokemonów w naszym Pokedexie. 
  W tym celu dla każdego z nich możesz stworzyć nowy element drzeewa DOM i umieścić w nim informacje o Pokemonie (możesz zawrzeć tam jego nazwę, zdjęcie, a na kontener w którym się znajduje nadać specjalną klasę zależnie od typu)
*/

// tutaj złapiemy sekcję, do której będziemy dodawać pokemony
var pokemonsContainer = document.querySelector(".pokemons");

function renderPokemons(pokemons) {
  pokemonsContainer.remove();
  for(var i = 0; i < pokemons.length; i++)
  {
    var newPokemon = document.createElement("div");
    newPokemon.setAttribute("class",pokemons[i].types);
    newPokemon.setAttribute("id",pokemons[i].id)
    newPokemon.innerHTML = pokemons[i].name;
    pokemonsContainer.append(newPokemon);
  }
}

// następnie wykonaj uzupełnioną metodę z tablicą pokemons, aby sprawdzić czy wszystko działa
renderPokemons(pokemons);

/*
  2. Przeglądanie całej listy pokemonów może okazać się trochę uciążliwe. Fajnie byłoby skorzystać z filtrów, które już znajdują sie w pliku html. 
  Napisz ciało funkcji które pozwoli nam na:
  - filtrowanie po typie
  - filtrowanie po nazwie (wpisany fragment zawiera się w nazwie pokemona)
*/



function filterPokemons(pokemons) {
  var filters = Array.from(document.querySelectorAll("input"));
  //console.log(filters);

  var returnArray = [];

  for(var x = 0; x < pokemons.length; x++)
  {
    for(var i = 0 ; i <16; i++)
    {
      if(filters[i].checked==true)
      {
        if(pokemons[x].types==filters[i].id)
        {
          returnArray.push(pokemons[x]);
          break;
        }
      }
      //console.log(filters[i].checked + filters[i].id);
    }
  }
  console.log(returnArray);
  return returnArray;





  // uzupełnij tutaj
  // zwróć odfiltrowaną tablicę pokemonów
}





const form = document.querySelector("form");

function submitForm(event) {
  event.preventDefault();
  // następnie wykonaj uzupełnioną metodę z tablicą pokemons, aby sprawdzić czy wszystko działa
  renderPokemons(filterPokemons(pokemons));
}

form.addEventListener("submit", submitForm);

/*
  3. Pokedex powinien wyglądać trochę lepiej, niż ten tutaj. W folderze znajdziesz plik style.css, w którym możesz ulepszyć wygląd naszego pokedexa
  Liczymy na Twoją kreatywność 😉
*/

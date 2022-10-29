var pokemonsContainer = document.querySelector(".pokemons");

function renderPokemons(pokemons) {
  
  var div = pokemonsContainer.querySelectorAll("div");
  for (const el of div)
  {
    el.remove();
  }
  
  for(var i = 0; i < pokemons.length; i++)
  {
    var newPokemon = document.createElement("div");
    var imagePokemon = document.createElement("img");

    newPokemon.setAttribute("id",pokemons[i].id);
    newPokemon.innerHTML = pokemons[i].name;
    newPokemon.append(imagePokemon);
    imagePokemon.setAttribute("src", pokemons[i].image);

    pokemonsContainer.append(newPokemon);
    
  }
}

function filterPokemons(pokemons) {
  var filters = Array.from(document.querySelectorAll("input")); 
  
  var returningArray = new Array;

  var counter = 0;
  
  while(counter<pokemons.length)
  {
    for(var i = 0 ; i <16; i++)
    {
     if(filters[i].checked==true)
      {
        if(pokemons[counter].types[0]==filters[i].id||pokemons[counter].types[1]==filters[i].id)
        {
          if(filters[17].value=="")
          {
            returningArray.push(pokemons[counter]);
            break;
          }else{
            if(pokemons[counter].name.includes(filters[17].value))
            {
              returningArray.push(pokemons[counter]);
              break;
            }
          }
        }
      }
    }
    
    counter++;
  }
  return returningArray;
}


const form = document.querySelector("form");

function submitForm(event) {
  event.preventDefault();
  renderPokemons(filterPokemons(pokemons));
}

form.addEventListener("submit", submitForm);


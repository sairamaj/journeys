<details>
    <summary>checking multiple bools</summary>

```js
    let b1 = true
    let b2 = true
    let b3 = true

    if(b1 && b2 && b3){
        console.log("all are true")
    }

    if( [b1,b2,b3].every(Boolean)){
        console.log("all are true-2")
    }
```
</details>

___

<details>
  <summary>short circuting</summary>

When we evaluate an expression with &&, if the first operand is false, JavaScript will short-circuit and ignore the second operand. 

```js
  const starterPokemon = ['Squirtle', 'Charmander', 'Bulbasur'];

  function choosePokemon(pokemon) {
    return pokemon[Math.floor(Math.random() * pokemon.length)];
  }
  //Checks if the starterPokemon array has any elements and runs the choosePokemon function
  console.log(starterPokemon.length > 0 && choosePokemon(starterPokemon));

  //It's equivalent to doing this:
  if (starterPokemon.length > 0) {
    choosePokemon(starterPokemon);
  }
```
</details>
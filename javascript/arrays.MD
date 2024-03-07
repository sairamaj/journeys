<details>
  <summary>create</summary>

```js
let x = [1,2,3,4]
console.log(x)

let y = new Array(1,2,3,4)
console.log(y)    
```
</details>

___

<details>
 <summary>sort</summary>

The sort() function allows you to sort an array object by either the default sorting order, or by a custom sorting function.

By default, it sorts the elements in the array in ascending order based on their string Unicode values. The function takes the inputs, converts them to strings, and then sorts them using Unicode values

<details>
   <summary>numbers sorting</summary>

* One has to use custom sort function ( as default uses UNICODE and hence 11 comes before 3)
* custom sort function
  * return -1 if the element should move to left (less)
  * return 0 element remains same position
  * return 1 moves to right (more)
```js
const numberSortFn = (a, b) => {
  if (a < b) {
    return -1;
  } else if (a === b) {
    return 0;
  } else {
    return 1;
  }
};

let x = [1, 13, 2, 5, 99, 5]
console.log(x)

// sort
let y = x.sort(numberSortFn)
console.log(y)

x = [1, 13, 2, 5, 99, 5]
// sort (using arrow function)
y = x.sort( (a,b) => a-b)
console.log(y)

x = [1, 13, 2, 5, 99, 5]
// reverse
y = x.sort( (a,b) => b-a)
console.log(y)

```   

</details>

<details>
  <summary>sorting objects</summary>

```js
    // array of persons
    let persons = [{ name: 'test1', age: 10 }, { name: 'test2', age: 15 }, { name: 'test3', age: 16 }]

    // sort by property age
    console.log(persons.sort( (p1,p2) => p1.age - p2.age));

    persons = [{ name: 'test1', age: 10 }, { name: 'test2', age: 15 }, { name: 'test3', age: 16 }]

    // sort by property name
    console.log(persons.sort( (p1,p2) => p1.name.localeCompare(p2)))

```

</details>

[more](https://www.freecodecamp.org/news/how-does-the-javascript-sort-function-work/)

</details>

___

<details>
  <summary>slice</summary>

The slice() function creates a duplicate of a specified section of an array in a new array object.  The original array is not modified

* array.slice(begin, end)

```js
// array of persons
let persons = [{ name: 'test1', age: 10 }, { name: 'test2', age: 15 }, { name: 'test3', age: 16 }]

console.log('all')
console.log(persons)
console.log('---------------')

console.log('first')
let first = persons.slice(0,1)
console.log(first)
console.log('---------------')

console.log('last two')
let lastTwo = persons.slice(1)
console.log(lastTwo)
console.log('---------------')

console.log('original persons')
console.log(persons)```

```cmd
all
[
  { name: 'test1', age: 10 },
  { name: 'test2', age: 15 },
  { name: 'test3', age: 16 }
]
---------------
first
[ { name: 'test1', age: 10 } ]
---------------
last two
[ { name: 'test2', age: 15 }, { name: 'test3', age: 16 } ]
---------------
original persons
[
  { name: 'test1', age: 10 },
  { name: 'test2', age: 15 },
  { name: 'test3', age: 16 }
]
```

* from last (specifying begin as -1)
```js
// array of persons
let persons = [{ name: 'test1', age: 10 }, { name: 'test2', age: 15 }, { name: 'test3', age: 16 }]

console.log('all')
console.log(persons)
console.log('---------------')

console.log('first')
let first = persons.slice(-1)
console.log(first)
console.log('---------------')

console.log('last two')
let lastTwo = persons.slice(-2)
console.log(lastTwo)
console.log('---------------')

```
```cmd
all
[
  { name: 'test1', age: 10 },
  { name: 'test2', age: 15 },
  { name: 'test3', age: 16 }
]
---------------
first
[ { name: 'test3', age: 16 } ]
---------------
last two
[ { name: 'test2', age: 15 }, { name: 'test3', age: 16 } ]
```
* common use cases
 * Create a sub-array or copy of a portion of an existing array
 * Duplicate entire array to operate on without changing original
 * Split array into multiple smaller chunk arrays for processing
 * Extract copy of array passed into functions without altering it

</details>

___

<details>
  <summary>splice</summary>

The splice() function modifies an array by deleting, replacing, or inserting entries at a specified index.

* array.splice(start, deleteCount, item1, item2, ...)

* removed from original array
```js
all
[
  { name: 'test1', age: 10 },
  { name: 'test2', age: 15 },
  { name: 'test3', age: 16 }
]
---------------
get first (removes from original array
[ { name: 'test1', age: 10 } ]
--------------
original persons
[ { name: 'test2', age: 15 }, { name: 'test3', age: 16 } ]
```
```cmd
all
[
  { name: 'test1', age: 10 },
  { name: 'test2', age: 15 },
  { name: 'test3', age: 16 }
]
---------------
get first (removes from original array
[ { name: 'test1', age: 10 } ]
--------------
original persons
[ { name: 'test2', age: 15 }, { name: 'test3', age: 16 } ]
```
* common uses cases
  * Insert elements at any index
  * Remove elements by index or value
  * Replace elements by combining remove and insert
  * Clear out array elements
  * Rearrange array elements by moves

</details>

___

<details>
  <summary>spread</summary>

[must read to understand basics](https://dev.to/nyagarcia/understanding-the-javascript-spread-operator-from-beginner-to-expert-5bdb)

spread operator '…' __spreads__ the items that are contained in an __iterable__ (an iterable is anything that can be looped over, like Strings, Arrays, Sets…) inside a __receiver__ (A receiver is something that receives the spread values).

* using spread to create new object
```js
const mySquirtle = {
  name: 'Squirtle',
  type: 'Water',
  hp: 100
};

// creates new instance
// Using spread (...) along with destructring { } syntax
const anotherSquirtle = { ...mySquirtle };
anotherSquirtle.hp = 0;

console.log(anotherSquirtle); //Result: { name: 'Squirtle', type: 'Water', hp: 0 }
console.log(mySquirtle); //Result: { name: 'Squirtle', type: 'Water', hp: 100 }
```

__Note:__ Bear in mind the fact that the spread operator only performs shallow copies. This means that if you have a reference data type stored inside your Array/Object, when you make a copy with the spread operator, the nested Array/Object will contain a reference to the original, and will thus be mutable

* spread operator as argument
```js

const numbers = [1, 4, 5, 6, 9, 2, 3, 4, 5, 6];
const max = Math.max(...numbers);

console.log(max); //Result: 9
```

* adding new properties or modifying existing without knowing the object properties
```js
let obj = {
  name: 'test1',
  age: 10
}

// add geneder property and get new object (original is not modified)
let obj2 = {...obj, gender:'M'}

console.log(obj)
console.log(obj2)
```
```cmd
{ name: 'test1', age: 10 }
{ name: 'test1', age: 10, gender: 'M' }
```
</details>

___

<details>
 <summary>spread (advanced)</summary>

[info here](https://dev.to/nyagarcia/understanding-the-javascript-spread-operator-from-beginner-to-expert-part-2-24ff)

* adding conditinally
    ```js
      const pokemon = {
        name: 'Squirtle',
        type: 'Water'
      };

      const abilities = ['Torrent', 'Rain dish'];
      const fullPokemon = {
        ...pokemon,
        ...(abilities && { abilities })
      };

      console.log(fullPokemon);    
    ```

</details>

___

<details>
  <summary>filter</summary>

```js
  const x = [1,2,3,4,5,6]

  // print all even numbers
  console.log( x.filter(n => n%2 ==0))
```
</details>
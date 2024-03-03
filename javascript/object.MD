<details>
  <summary>properties</summary>

<details>
  <summary>accessing property</summary>

* can be accessed by dot notation, array notiation
  ```js
    x = {name:'sai'}
    console.log(x.name)
    console.log(x['name'])
    y = 'name'
    console.log(x[y])
  ```
</details>

___

<details>
  <summary>explicit vs implicit property name</summary>

  ```js
    x = { name:'sai'}
    console.log(x)
    name = 'ram'
    y = {name}      // this is same as {name:'ram'}
    console.log(y)
  ```
</details>

___


<details>
  <summary>dynamically creating property</summary>

```js
const propertyName = 'age';
const person = {
  name: 'Alice',
  [propertyName]: 30,
};

console.log(person.age)
```
</details>

___

<details>
   <summary>listing all properties</summary>

* using enumeration
  ```js
  x = { name: 'sai', age: 16, gender: 'M' }
  // listing all properties and its values.
  for (const property in x) {
      console.log(property, x[property]);
  }
  ```
___

* using keys
  ```js
  x = { name: 'sai', age: 16, gender: 'M' }
  const keys = Object.keys(x);

  for (const key of keys) {
    console.log(key, x[key]); 
  }
  ```

* using getOwnPropertyNames
  ```js
  x = { name: 'sai', age: 16, gender: 'M' }
  const propertyNames = Object.getOwnPropertyNames(x);

  for (const propertyName of propertyNames) {
    console.log(propertyName, x[propertyName]); 
  }
  ```

</details>

<details>
  <summary>define custom behavior when reading or writing a property using getters and setters</summary>

```js
  const person = {
      _age: 25,
      get age() {
        return this._age;
      },
      set age(newAge) {
        if (newAge >= 0) {
          this._age = newAge;
        }
      },
    };

  console.log(person.age)
  person.age = 30
  console.log(person.age)
  person.age = -1
  console.log(person.age)     // still 30

```
</details>


</details>

___

<details>
  <summary>functions</summary>

  <details>
     <summary>declaring and using</summary>
  
```js
x = {
    name: 'sai',
    age: 16,
    gender: 'M',
    // declaring function
    print: function () {
        console.log(`name:${this.name} age:${this.age} gender:${this.gender}`)
    }
    print2 : (msg) {
      console.log(msg)
      console.log(`name:${this.name} age:${this.age} gender:${this.gender}`)
    }
}

// calling function
x.print()

```
  </details>

___


  <details>
    <summary>with arguments</summary>

```js
x = {
    name: 'sai',
    age: 16,
    gender: 'M',
    print2 : function (msg) {
        console.log(msg)
        console.log(`name:${this.name} age:${this.age} gender:${this.gender}`)
      }
}

x.print2("with message")

```
  </details>

___

  <details>
     <summary>arrow functions not suitable in objects</summary>

* __this__ is not avilable in __arrow__ function
```js
  x = {
    name: 'sai',
    age: 16,
    gender: 'M',
    print : () => {
        // note: this is not available in arrow functions.
        console.log(`name:${this.name} age:${this.age} gender:${this.gender}`)
      }
  }

  // this won't work as arrow functions does not have this
  x.print()

```

  </details>

</details>

___

<details>
  <summary>object in object</summary>

```js
var person = {
    name: 's1',
    address: {
        line1: "17",
        line2: "tucston st",
        zip: 97006
    }
}

console.log(person.name)
console.log(person.address)
console.log(person.address.line1)
```

</details>

___

<details>
  <summary>constructor</summary>

```js
function Person(name, age) {
    this.name = name;
    this.age = age;
}

var p1 = new Person('s1', 10);
var p2 = new Person('s2', 20);

console.log(p1, p2);
```

[more](https://www.w3schools.com/js/js_object_constructors.asp)
</details>

___

<details>
  <summary>prototype</summary>

* todo

</details>

___

<details>
  <summary>destructring</summary>

* useful in passing object which has properties without specifying exact properties
    ```js
    var person = { name: 'sai', age: 16, gender: 'M' }

    // extracting just name
    var { name } = person
    console.log(name)

    // function which takes object and destructures the properties
    function print({ name, age }) {
      console.log(`name:${name} age:${age}`)
    }

    print(person)
    ```

* with default value
  ```js
    const pokemon = {
      id: 1,
      name: 'Squirtle'
    };

    //Assigning default value to the type variable
    const { type = 'Water', name } = pokemon;
    console.log(type); //Result: Water  
  ```
</details>
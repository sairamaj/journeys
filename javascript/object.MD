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
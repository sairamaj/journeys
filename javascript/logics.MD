</details>
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
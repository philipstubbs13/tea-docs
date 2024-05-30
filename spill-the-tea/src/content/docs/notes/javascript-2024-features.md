---
title: JavaScript 2024 Features
description: A guide in my new Starlight docs site.
---

## Resources

- YouTube Video from Web Dev Simplified: <https://www.youtube.com/watch?v=duNEnLUxie8&t=2s>

## Features

- Change array by copy
    - .toSorted()
    - .toReversed()
    - .toSpliced()
    - .with()
    - <https://www.youtube.com/watch?v=mSBnJvHtgD0>

- .groupBy()

    ```bash
    const people = [
        { name: "Kyle", age: 28 },
        { name: "Sally", age: 28},
    ]

    Object.groupBy(people, person => (
        return person.age
    ))

    { "28": [ { name: "Kyle", age: 28 }, { name: "Sally", age: 28 }]}
    ```

- Promise.withResolvers

    ```bash
    const { promise, resolve, reject } = Promise.withResolvers()

    resolve()
    ```

- Temporal API
    - <https://blog.webdevsimplified.com/2022-02/temporal-date-api/>
    - <https://www.youtube.com/watch?v=oOK3UzLJ_Cs&t=0s>

- JSON modules and Import Attribues

    ```bash
    import users from "users.json" with { type: "json" }
    ```

- Decorators

- New Set Methods
    - .difference()
    - .intersection()
    - .symmetricDifference()
    - .union()
    - .isDisjointFrom()
    - .isSupersetOf()

    ```bash
    new Set([1, 2, 3])
    ```
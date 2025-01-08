## JavaScript History
- Javascript was designed to run on Browser, JavaScript Engine on browser runs JavaScript code


|JavaScript | Engines|
|-----|----|
|Firefox| SpiderMonkey|
|Chrome| v8|

- In 2009, opensource Javascript Engine in chome and embeded into C/C++  program and called Node.
Node is C/C++ program, includes googles v8 engine
- Javascript can run on Browser or in Node, both provide runtime environment
- ECMAScripts are specification, which Javascript confirms to these specification
- Organization name ECMA, who take care of ECMA Scripts, also called ES6

## Setting up Development
- install VScode
    - live server
- install node

## Script element
- Custom Script element should be at the bottom of body
- Third party Script element should be at the top
- HTML process, top to bottom

## Section 2: Basics
- element
- statement: should end with ;
- comment: // to add description or documentation
- variables: use 'let' to define, by default value is undefined
    - cannot be reserved key word, if, else, var, let
    - need to be meaningful names
    - cannot start with number, space or hyphen
    - camel notation and are case-sensitive
    ```js
    # From CLI run .js files, need node.js installed
    node index.js
    # variable cannot start with number
    # cannot contain a space or hyphen (-)
    # are case-sensitve
    // camel notation
    let firstName;
    // not good practice
    let FirstName;
    ```
- constancts: value of variable can change, but not for contancts
    ```js
    const interestRate = 0.3;
    ```
- types of value assigned to variable:
    - Primitives types / value types
        - string: String Literal
        - Number: Number Literal
        - boolean: true or false, Boolean Literal
        - undefined: 
        - null: explicitly clear the value to null.
        ```js
        let name="Harish";
        typeof name
        ```
    - Reference types
        - Object: Person - name, age are properties of person
            - object Literal: {}
            - accessing these object properties:
                - Dot notation
                - Bracket Notation: we can use this to access value dynamically
            ```js
            // Object Literal
            let person = {
                name: "Harish",
                age: 30
            }
            // Dot Notation
            console.log(person.name)
            // Bracket Notation
            console.log(person['name'])
            ```
        - Array
            ```js
            let selectedColors = ["red", "blue"];
            console.log(selectedColors[0]);
            console.log(selectedColors.length);
            ```
        - Function
            ```js
            // ex: 1-function.js
            function greet(name) {
                //body of function
                //name: is parameters
                console.log('Hello ' + name);
            }
            // Harish: is argument
            greet('Harish');
            ```
## Section 3: Operators
- Operators: Used along with variables and constances to create expression, with expressions we can create algorithems
    - Arithmetic
    - Assignment
    - Comparision
        - Strict Equality
        - Lose Equality
        - Ternary Operators
    - Logical
    - Bitwise
    ```js
    //3-operators/1-arthmetic.js
    //3-operators/1-assignment.js
    ```
## Section 4: Control Flow
- if... else
- Switch... case
- loops
    - for loops
    - while
    - Do...while
    - For...in : Objects
    - For...of : Arrays

    ```js
    //4-control-flow/1-ifelse.js
    //4-control-flow/2-switch.js
    //4-control-flow/3-loops.js
    ```
## Section 5: Objects
- Object-oriented Programming (OOP)
- Javascript reference guide - https://developer.mozilla.org/en-US/docs/Web/JavaScript

## Section 5: Arrays

## Commands
To creat HTML boilerpalte code, create index.hmtl and type '!' and enter
```
# boilerplate HTML code
! <enter>
```
right click and open index.html using live server


## VS code extentions

- live server

## key points

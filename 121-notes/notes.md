# JS Recap

## Data Structures

- Strings -> Datatype -> Store values and can be used in arrays -> Object
- Arrays -> Object has methods -> List in other languages
    - Dynamic -> Grow & Shrink -> A lot of methods to use -> Stack, Que, Array
      - Mix Data-types? -> Not a good idea
    - Classical Array -> Fixed length when you need to add you need to increase the size
       - A new array with +1 , Clone the contents, Add your item
       - You not have any overhead that a dynamic array has
    - O(N) Linear time for lookups 
- Objects ->
    - Hash function -> Great at lookups & updates
        - O(1) Constant time for lookups

### Strings

- Immutable 

- `.toUpperCase()`, `.toLowerCase()` -> Change case of the string -> Returns the changed text
- `.slice()` -> Start, End -> Return the substring
- `.includes()` -> Check if has given string, character, regex expression -> Returns boolean
- `.split()` and `.join()` -> Turn a string into an array, common use is CSV


### Arrays & Array Methods

- Access -> Index and use [] to access
- Items inside are mutable
- Reference type -> pointing to one array

| Method    | Description                                       | Return Type              | Common Uses                     |
| --------- | ------------------------------------------------- | ------------------------ | ------------------------------- |
| push()    | Adds one or more elements to the end of the array | Number (new length)      | Appending items                 |
| pop()     | Removes the last element                          | Any (removed element)    | Stack behavior (LIFO)           |
| shift()   | Removes the first element                         | Any (removed element)    | Queue behavior (FIFO)           |
| unshift() | Adds one or more elements to the start            | Number (new length)      | Prepending items                |
| indexOf() | Returns index of a value                          | Number                   | Simple searches                 |
| slice()   | Returns a shallow copy of part of the array       | Array                    | Copying subsets                 |
| splice()  | Adds/removes elements in place                    | Array (removed elements) | Mutating arrays (insert/delete) |
| join()    | Joins all elements into a string                  | String                   | Converting arrays → strings     |
| concat()  | Combines arrays or values                         | Array                    | Non‑mutating merges             |

#### Array Iterators

- Do not modify return a new value

- Callback function -> Function as a parameter to another function or method
  - Give a function/method a function to use
  - Arrow function can be given
  - Parameters -> 1st param Item in the array, 2nd is the index, 3rd array itself
   - Reduce is different. -> 1st is Accumulator, 2nd is Current, Index & Array

| Method     | Description                                | Return Type | Common Uses                |
| ---------- | ------------------------------------------ | ----------- | -------------------------- |
| map()      | Transforms each element using a callback   | Array       | Data transformation        |
| filter()   | Filters elements based on a condition      | Array       | Extracting subsets         |
| find()     | Returns first element matching a condition | Any         | Searching for one item     |
| forEach()  | Runs a function for each element           | Undefined   | Iteration, side‑effects    |
| reduce()   | Reduces array to a single value            | Any         | Aggregation, sums, objects |
| includes() | Checks if array contains a value           | Boolean     | Membership checks          |

###  Objects & Object Methods

- Creating -> 
- Accessing ->

#### Object.keys(), Object.values(), Object.entries()

## Loops?

- For i

- For in
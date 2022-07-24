console.log('HeLlo,BAby!')
console.log(typeof 'Asabeneh') // string
console.log(typeof 5) // number
console.log(typeof true) // boolean
console.log(typeof null) // object type
console.log(typeof undefined) // undefined
let age = 100 // age in years
const gravity = 9.81 // earth gravity  in m/s2
const boilingPoint = 100 // water boiling point, temperature in °C
const PI = 3.14 // geometrical constant
console.log(gravity,",", boilingPoint,',', PI,",", age)
console.log(typeof age)
console.log(typeof PI)
age = 5
//PI = 6
let word = "ujjwal"
//what about writing let word = "ujjwal"
word[0] = "a"
// let word[0] = "a"
// word = "ultra"
console.log(word[0])
console.log(word[0] = "a")
console.log(word[0] == "a")
console.log(word)
console.log(Math.LN2)
console.log(Math.LN3)
//sin in radians default
let sttring = ''
console.log(sttring.concat("Days", "Of", "JavaScript")) // 30DaysOfJavaScript
let string = 'I love JavaScript. If you do not love JavaScript what else can you love.'
console.log(string.search('love'))          // 2
console.log(string.search(/JAvaScript/gi))  // 7
console.log(string.match(/JAvaScript/gi))  // 7
console.log(string.match('love'))
let pattern = /Love/gi
console.log(string.match(pattern))   // ["love", "love", "love"]
let txt = 'In 2019, I ran 30 Days of Python. Now, in 2020 I am super exited to start this challenge'
let regEx = /\d/g

// d with escape character means d not a normal d instead acts a digit
// + means one or more digit numbers,
// if there is g after that it means global, search everywhere.

console.log(txt.match(/\d/g))  // ["2", "0", "1", "9", "3", "0", "2", "0", "2", "0"]
console.log(txt.match(/\d/))
console.log(txt.match(/\d+/))
console.log(txt.search(/\d/))
console.log(txt.search(/\d+/))
console.log(txt.match(/\d+/g)) // ["2019", "30", "2020"]
console.log(typeof NaN)
console.log(typeof true)
console.log(typeof 0)
console.log(typeof [])
console.log(typeof {})
console.log(typeof [[]])
console.log(typeof [1])
console.log(typeof undefined)
let number = confirm('Enter number', 'number goes here')
console.log(number)
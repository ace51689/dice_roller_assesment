//Universal Declarations
let sidesDie = document.querySelector('#sides')
let userDie = document.querySelector('#numDie')  //Number of dice Text box
let roll = document.querySelector('#roll')  //Roll Button
let total = document.querySelector('#total')  //Sum of rolled Dice
let showAll = document.querySelector('#showAll')  //Show all Button
let allRolls = document.querySelector('#allRolls')  //Ordered list of rolled Dice
let reset = document.querySelector('#reset')  //Reset Button

let dieRolls = []

roll.addEventListener('click', function() {
    let numDie = userDie.value.trim() 
    let numSides = sidesDie.value.trim()
    let count = 1
    while (count <= numDie) {
        let dieRoll = Math.floor( Math.random() * numSides) + 1
        dieRolls.push(dieRoll)
        count++
    }
    
    let sum = dieRolls.reduce(function(a, b){
        return a + b;
    }, 0)

    total.innerText = ('The sum of rolls is ' + sum)
})

showAll.addEventListener('click', function() {
    let numDie = userDie.value.trim() 
    let index = 0
    while (index < numDie) {
        let newItem = '<li>' + dieRolls[index] + '</li>'
        allRolls.innerHTML += newItem
        index++
    }
})  

reset.addEventListener('click', function() {
    userDie.value = ('')
    dieRolls = []
    total.innerText = ('')
    allRolls.innerText = ('')
    sidesDie.value = ('')
})
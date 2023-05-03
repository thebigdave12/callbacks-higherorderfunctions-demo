////////////////////////
////// CALCULATOR //////
////////////////////////


// inner functions

function add(num1, num2){
  return num1 + num2
}

const subtract = function(num1, num2){
  return num1 - num2
}

const multiply = (num1, num2) => {
  return num1 * num2
}

const divide = (num1, num2) => num1 / num2

// inner functions

// outer function -> higher order function

function calculator(num1, num2, cb) {
  if(+num1 && Number(num2)){
    num1 = +num1
    num2 = +num2
    return cb(num1, num2)
  } else {
    return ("Not a Viable Input")
  }
  
  
  return cb(num1, num2)
}

// outer function -> higher order function


// console.log(calculator('three', 15, add))

// console.log(calculator(84, 3, divide))

///////////////////////
////// PET STORE //////
///////////////////////

const dogProducts = [
    {
      name: 'leash',
      colors: ['red', 'blue', 'green'],
      category: 1,
      inventory: 30,
      basePrice: 13.99, 
      displayPrice: 13.99
    }, 
    {
      name: 'chew toy',
      colors: ['brown'],
      category: 2,
      inventory: 120,
      basePrice: 6.00, 
      displayPrice: 6.00
    }, 
    {
      name: 'rope',
      colors: ['blue & green', 'red & yellow'],
      category: 2,
      inventory: 75,
      basePrice: 4.99, 
      displayPrice: 4.99
    }
]

const catProducts = [
  {
    name: 'mouse toy', 
    colors: ['pink', 'grey', 'black'], 
    category: 2, 
    inventory: 125, 
    basePrice: 2.50, 
    displayPrice: 2.50
  },
  {
    name: 'cat sweater',
    colors: ['black'],
    category: 1,
    inventory: 15,
    basePrice: 10.00, 
    displayPrice: 10.00
  }, 
  {
    name: 'straching post',
    colors: ['tan'],
    category: 2,
    inventory: 40,
    basePrice: 22.99, 
    displayPrice: 22.99
  }
]

let percentageDiscount = (product, discountAmount) => {
  product.displayPrice = product.basePrice * (1 - discountAmount)
}

function flatRateDiscount(product, flatRateDiscount) {
  product.displayPrice = product.basePrice - flatRateDiscount
}

// percentageDiscount(catProducts[2], .2)

const applyAllDiscounts = (arr, cb, discount) => {
  for(let i = 0; i < arr.length; i++){
    cb(arr[i], discount)
  }
}

// applyAllDiscounts(catProducts, flatRateDiscount, 1)

// applyAllDiscounts(dogProducts, percentageDiscount, .3)

// console.log(catProducts)
// console.log(dogProducts)

const categoryDiscount = (arr, category, cb, discount) => {
  for(let i = 0; i < arr.length; i++){
    if (arr[i].category === category){
      cb(arr[i], discount)
    }
  }
}

// categoryDiscount(dogProducts, 1, percentageDiscount, .5)

// console.log(dogProducts)

const inventoryDiscount = (arr, amount, cb, discount) => {
  for(let i = 0; i < arr.length; i++){
    if (arr[i].inventory < amount){
      cb(arr[i], discount)
    }
  }
}


inventoryDiscount(dogProducts, 33, flatRateDiscount, 2)

console.log(dogProducts)




////////////////////////
////// SANDWICHES //////
///////////////////////

function makeSandwich(bread){
  return (ingredients) => {
    let order = `You ordered a ${bread} bread sandwich with `

    for(let i = 0; i < ingredients.length; i++){
        if(i === ingredients.length - 1 && i !== 0){
          order += `and ${ingredients[i]}.`
        } else if (ingredients.length === 1){
          order += `${ingredients[i]}.`
        } else {
          order += `${ingredients[i]}, `
        }
    }
    return order
  }
}

let makeBLT = makeSandwich('sourdough')
console.log(makeBLT(['bacon, lettuce, avocado, mayo']))

let makeFrenchDip = makeSandwich('french')
let frenchdip = ['onions', 'pulled beef', 'provolone', 'horseradish sauce']
console.log(makeFrenchDip(frenchdip))

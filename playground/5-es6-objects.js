//object property shorthand
const name = 'Andrew'
const userAge = 27
const user= {
    name,
    age: userAge,
    location:'Philidelphia'
}

//shorthand works when value property value is the same as variable. variable name and property name nmust be the same
console.log(user)

//object destrcuturing
//useful when trying to access property from an object


const product = {
    label:'red notebook',
    price: 3,
    stock:201,
    salePrice: undefined,
    rating: 4.2
}

//destructuring goal = extracts object properties and their values into variables

// const label = product.label
// const stock = product.stock

// const {label:productLabel, stock, rating = 5 } = product
// console.log(productLabel)
// console.log(stock)
// console.log(rating)

const transaction = (type, {label, stock = 0}={})=> {
console.log(type, label, stock)
}

transaction('order',product)
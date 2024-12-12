// setTimeout(()=>{
// console.log('two seconds are up')
// },2000)

// const names = ['andrew','jen','jess'];
// const shortNames = names.filter(()=>{
//     return names.length >= 4
// })

// const geocode = (address,callback) => {
// setTimeout(()=>{
//     const data = {
//         latitude:0,
//         longitude:0
//     }
//   callback(data) //same goal as return statement 
// },2000)
// }

//  geocode('philidelphia',(data)=>{
// console.log(data)
//  })


const add = (a, b, callback)=> {
setTimeout(()=>{
callback(a + b)
},2000)
}
add(1, 4, (sum) => {
    console.log(sum) // Should print: 5
})
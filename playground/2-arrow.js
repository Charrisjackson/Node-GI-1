// const square = function (x){
// return x * x
// }
// const square = (x) => {
//     return x * x
// }
// const square = (x) =>  x * x
// console.log(square(2))
//if a function gives you error messages, use arrow functions
const event = {
    name: 'birthday party',
    guestList:['me','jen','mike'],
    printGuestList (){
       
        console.log('Guest list for ' + this.name)

        this.guestList.forEach((guest) => {
            console.log(guest + ' is attending ' + this.name)
        })
    }
}
event.printGuestList()
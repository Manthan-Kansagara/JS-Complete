// stack - primitive and heap - non primitive


// pass by value
let myYoutubename = "manthan"
let anothername = myYoutubename
anothername = "patelman"
console.log(anothername)
console.log(myYoutubename)


// pass by reference
let userOne = {
    email : "manthan29@gmail.com",
    upi : "bhim@upi"
}

let userTwo = userOne

userTwo.email="patelmanthan@gmail.com"

console.log(userTwo.email)
console.log(userOne.email)
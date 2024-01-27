function displayInfo (name,role) {
    console.log(`${name} is a ${role} in this company.`)
}
displayInfo.call(null,"Rahul Chaudhary","Engineer")
displayInfo.apply(null,["Rahul Chaudhary","Engineer"])
function boundGreet (name){
    console.log(`Good ${this.time}, ${name}`)
}
const greet = {
    time: "Morning",
}
const Greet = boundGreet.bind(greet)
Greet("Rahul Chaudhary")
Greet("Riya Srivastava")



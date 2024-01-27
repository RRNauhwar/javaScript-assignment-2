const ContactMap = new Map ()
ContactMap.set("Rahul",{
    age: 18,
    email: "rahulch19905@gmail.com",
    place: "Chandigarh"
})
ContactMap.set("Dhruv",{
   age: 18,
   email: "dhruvbsdka@gmail.com",
   place: "Chandigarh"
})
function getContact(name) {
    return ContactMap.get(name)
}
console.log(getContact("Rahul"))
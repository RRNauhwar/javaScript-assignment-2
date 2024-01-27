const person1 = {
    name: "Rahul Chaudhary",
    age: 18
}
const person2 = {
    name: "Riya Srivastava",
    age: 18,
    introduce: function introduce() {
        console.log(`Hello, I'm ${this.name}, and I'm ${this.age} years old.`)
    }
}
person2.introduce.call(person1)
person2.introduce.call(person2)
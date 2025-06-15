const User = {
    name: 'Nathan',
    age: 25,
    newage(new_age) {this.age = this.age + new_age},
    email: "nath@gmail.com"
}

User.country = 'Nigeria'
User.newage(2)
console.log(User.age, User.country, User.email, JSON.stringify(User, null, 2));

// Arrow functions do not have their own this, 
// so they are not ideal when the function needs to access other properties in the same object.
const user = {
  name: 'Nathan',
  greet: () => {
    console.log(this.name); // ❌ 'this' does not refer to 'user'
  }
};

user.greet(); // undefined
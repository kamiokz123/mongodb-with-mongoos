const mongoose = require('mongoose');

// execution of main function
main().then(()=>{console.log("connected");
})
.catch(err => console.log(err));

// main function to connect our db
async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/instagram');
}

// creating schema for user collection
const userSchema = new mongoose.Schema({
  name:String,
  email:String,
  age : Number
});

// adding schema to our user collection
const User = mongoose.model("User",userSchema);

// adding single doc to user collection
// const user2 = User({
//   name:"hadya",
//   email:"hadya@gmail.com",
//   age:24
// });
// user2
// .save()
// .then(res=>{console.log(res);
// })
// .catch((err)=>{console.log(err);
// })


// adding more than one doc to user collection
User.insertMany([
  {name:"mehdi",email:"mehdi@gmail.com",age:21},
  {name:"hasso",email:"hasso@gmail.com",age:28},
]).then(data=>{
  console.log(data);
  
})

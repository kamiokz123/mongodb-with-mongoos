const mongoose = require('mongoose');



async function main() {
    await mongoose.connect('mongodb://127.0.0.1:27017/amazon');
}

// execution of main function
main().then(() => {
    console.log("connected");
})
    .catch(err => console.log(err));


const bookSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    author: {
        type: String
    },
    price: {
        type: Number
    }
});

// adding schema to our user collection
const Book = mongoose.model("Book", bookSchema);

// adding single doc to user collection
const book1 = Book({
    name: "abc",
    author: "cbe v",
    price: 590
});
book1
    .save()
    .then(res => {
        console.log(res);
    })
    .catch((err) => {
        console.log(err);
    })

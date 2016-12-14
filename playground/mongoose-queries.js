const {ObjectID} = require('mongodb');

const { mongoose } = require('./../server/db/mongoose');
const { Todo } = require('./../server/models/todo');
const { User } = require('./../server/models/user');

// let id = "585186bcae4a3a736a5a243f11";

let userId = "5851a31e388a637c74375dad";

// if(!ObjectID.isValid(id)){
//     console.log('Id not valid');
// }

// Todo.find({
//     _id: id
// }).then((todos) => {
//     console.log('Todos', todos);
// });

// Todo.findOne({
//     _id: id
// }).then((todo) => {
//     console.log('Todo', todo);
// });

// Todo.findById(id).then((todo) => {
//     if(!todo){
//         return console.log('id NOT found');
//     }
//     console.log('Todo by id', todo);
// }).catch((e) => console.log(e));

User.findById(userId).then((user) => {
    if(!user){
        return console.log('user not found');
    }
    console.log('User person: ', user);
}, (e) => console.log(e));
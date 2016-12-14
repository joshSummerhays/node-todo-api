let mongoose = require('mongoose');

let Todo = mongoose.model('Todo', {
    text: {
        type: String,
        required: true,
        minlength: 1,
        trim: true
    },
    completed: {
        type: Boolean,
        default: false
    },
    completedAt: {
        type: Number,
        default: null
    }
});


// let newTodo = new Todo({
//     text: 'Cook dinner'
// });

// let newTodo2 = new Todo({
//     text: 'Eat food',
//     completed: false,
//     completedAt: 123
// });

// let newTodo2 = new Todo({
//     text: 'Eat food',
//     completed: false,
//     completedAt: 123
//     text: true
// });

// newTodo.save().then((doc) => {
//     console.log('Saved todo', doc);
// }, (e) => {
//     console.log('Unable to save todo', e);
// });

// newTodo2.save().then((doc) => {
//     console.log('Saved todo', doc);
// }, (e) => {
//     console.log('Unable to save todo', e);
// });

module.exports = {
    Todo
}
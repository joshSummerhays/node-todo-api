const express = require('express');
const bodyParser = require('body-parser');
const {ObjectID} = require('mongodb');

let { mongoose } = require('./db/mongoose');
let { Todo } = require('./models/todo');
let { User } = require('./models/user');

let app = express();
const port = process.env.PORT || 3000;

app.use(bodyParser.json());

app.post('/todos', (req, res) => {
    let todo = new Todo({
        text: req.body.text
    });

    todo.save().then((doc) => {
        res.status(201).send(doc);
    }, (e) => {
        res.status(400).send(e);
    });
    // console.log(req.body);
});

app.get('/todos', (req, res) => {
    Todo.find().then((todos) => {
        res.send({todos})
    }, (e) => {
        res.status(400).send(e);
    })
});

app.get('/todos/:id', (req, res) => {
    let id = req.params.id
    // res.send(req.params);
    
    // Todo.findById({
    //     _.id: id
    // })

    if(!ObjectID.isValid(id)){
        return res.status(404).send('not a valid id');
    }

    Todo.findById(id).then((todo) => {
        if(!todo){
            return res.status(404).send('id not found');
        }
        res.send({todo});
    }, (e) => {
        res.status(400).send('ERROR!');
    });
    //.catch below the same thing?
    //.catch((e) => {
    //     res.status(400).send('ERROR!');
    // });
});

app.listen(port, () => {
    console.log(`started on port ${port}`);
});

module.exports = {app};






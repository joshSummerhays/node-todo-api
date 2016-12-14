// const MongoClient = require('mongodb').MongoClient;
const { MongoClient, ObjectID } = require('mongodb');

// let obj = new ObjectID();
// console.log(obj);

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
    if(err) {
        return console.log('Unable to connect to MongoDB server');
    }
    console.log('Connected to MongoDB server');

    // db.collection('Todos').findOneAndUpdate({
    //     _id: new ObjectID("58516dac46427f528e48ebbe")
    // }, {
    //      $set: {
    //         completed: true
    //     }
    // }, {
    //     returnOriginal: false
    // }).then((res) => {
    //      console.log(res);
    // });

    db.collection('Users').findOneAndUpdate({
        _id: new ObjectID("58508369df70f561d6a7dbfa")
    }, {
         $set: {
            name: 'travis'
        },
        $inc: {
            age: 1
        }
    }, {
        returnOriginal: false
    }).then((res) => {
         console.log(res);
    });

    // db.close();
});
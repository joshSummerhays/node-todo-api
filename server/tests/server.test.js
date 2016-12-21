const expect = require('expect');
const request = require('supertest');
const {ObjectID} = require('mongodb');

const {app} = require('./../server');
const {Todo} = require('./../models/todo');
const {User} = require('./../models/user');

const todos = [{
    _id: new ObjectID(),
    text: 'todo 1'
},{
    _id: new ObjectID(),
    text: 'todo 2'
}];

const badID = new ObjectID();

beforeEach((done) => {
    // Todo.remove({}).then(() => done());
    Todo.remove({}).then(() => {
        return Todo.insertMany(todos);
    }).then(() => done());
});

// describe('Post /todos', () => {
//     it('should create a new todo', (done) => {
//         let text = 'test todo';
//         request(app)
//             .post('/todos')
//             .send({text})
//             .expect(201)
//             .expect((res) => {
//                 expect(res.body.text).toBe(text)
//             })

//         .end(done);
//     });
// });

describe('GET /todos/:id', () => {
    it('should return todo doc', (done) => {
        request(app)
            .get(`/todos/${todos[0]._id.toHexString()}`)
            .expect(200)
            .expect((res) => {
                expect(res.body.todo.text).toBe(todos[0].text)
            })
            .end(done);
    });

    it('should return 404 if todo not found', (done) => {
        request(app)
            .get(`/todos/${badID.toHexString()}`)
            .expect(404)
            .end(done);
    });

    it('should return 404 for non-object ids', (done) => {
        request(app)
            .get(`/todos/123`)
            .expect(404)
            .end(done);
    });
});

describe('DELTE /todos/:id', () => {
    it('should remove a todo', (done) => {
        let hexId = todos[1]._id.toHexString();
        request(app)
            .delete(`/todos/${hexId}`)
            .expect(200)
            .expect((res) => {
                expect(res.body.todo._id).toBe(hexId);
            })
            .end((err, res) => {
                if(err){
                    return done(err);
                }

                Todo.findById(hexId).then((todo) => {
                    expect(todo).toNotExist();
                    done();
                }).catch((e) => done(e));
            });
    });

    it('should return 404 if todo not found', (done) => {
        request(app)
            .delete(`/todos/${badID.toHexString()}`)
            .expect(404)
            .end(done);
    });

    it('should return 404 for non-object ids', (done) => {
        request(app)
            .delete(`/todos/123`)
            .expect(404)
            .end(done);
    });
});

// describe('DELETE /users/me/token', () => {
//     it('should remove auth token on logout', (done) => {
//         request(app)
//             .delete('/users/me/token')
//             .set('x-auth', users[0].tokens[0].token)
//             .expect(200)
//             .end((err, res) => {
//                 if(err){
//                     return done(err);
//                 }
//                 User.findById(users[0]._id.then((user) => {
//                     expect(user.tokens.length).toBe(0);
//                     done();
//                     }).catch((e) => done(e));
//                 });
//             });
//     });
// });

const expect = require('expect');
const supertest = require('supertest');

const {app} = require('./../server');
const {Todo} = require('./../models/todo');

beforeEach((done) => {
    Todo.remove({}).then(() => done());
});

describe('Post /todos', () => {
    it('should create a new todo', (done) => {

    });
});
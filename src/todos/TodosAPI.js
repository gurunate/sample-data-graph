const { RESTDataSource } = require('apollo-datasource-rest');

class TodosAPI extends RESTDataSource {
    constructor() {
        super();
        this.baseURL = process.env.JSONPLACEHOLDER_API_HOST;
    }

    async getTodos() {
        const todos = await this.get('todos');

        return todos;
    }

    async getTodo({ id }) {
        const todo = await this.get(`todos/${id}`);

        return todo;
    }
}

module.exports = TodosAPI;

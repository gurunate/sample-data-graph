const { RESTDataSource } = require('apollo-datasource-rest');

class UsersAPI extends RESTDataSource {
    constructor() {
        super();
        this.baseURL = process.env.USERS_API_HOST;
    }

    async getUsers() {
        return await this.get('users');
    }

    async saveUser(data) {
        return await this.post('users', { data });
    }
}

module.exports = UsersAPI;

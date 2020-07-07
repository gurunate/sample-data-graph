const { RESTDataSource } = require('apollo-datasource-rest');

class DataSource extends RESTDataSource {
    constructor() {
        super();
        this.baseURL = process.env.USERS_API_HOST;
    }

    reduceUser(user) {
        return {
            ...user,
            fullName: `${user.firstName} ${user.lastName}`
        };
    }

    async getUsers() {
        const users = await this.get('users');
        return users.map((user) => this.reduceUser(user));
    }

    async getUser({ id }) {
        const user = await this.get(`users/${id}`);

        return this.reduceUser(user);
    }

    async createUser(user) {
        return await this.put('users', user);
    }

    async updateUser(user) {
        return await this.post(`users/${user.id}`, user);
    }

    async deleteUser(user) {
        return await this.delete(`users/${user.id}`);
    }
}

module.exports = DataSource;

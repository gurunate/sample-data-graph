const { RESTDataSource } = require('apollo-datasource-rest');
const format = require('date-fns-tz/format');

const DATE_FORMAT = 'MMM dd, yyyy h:mm aaa'; // Mar 23, 2020 8:29:32 AM CDT

class UsersAPI extends RESTDataSource {
    constructor() {
        super();
        this.baseURL = process.env.USERS_API_HOST;
    }

    reduceUser(user, dateFormat) {
        return {
            ...user,
            fullName: `${user.firstName} ${user.lastName}`,
            createdAtFormatted: format(new Date(user.createdAt), dateFormat),
            updatedAtFormatted: format(new Date(user.updatedAt), dateFormat)
        };
    }

    async getUsers({ dateFormat = DATE_FORMAT }) {
        const users = await this.get('users');
        return users.map(user => this.reduceUser(user, dateFormat));
    }

    async getUser({ id, dateFormat }) {
        const user = await this.get(`users/${id}`);

        return this.reduceUser(user, dateFormat);
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

module.exports = UsersAPI;

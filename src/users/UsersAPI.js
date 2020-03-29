const { RESTDataSource } = require('apollo-datasource-rest');
const format = require('date-fns/format');

const DATE_FORMAT = 'MMM dd, yyyy h:mm aaa'; // Mar 23, 2020 8:29:32 AM CDT

class UsersAPI extends RESTDataSource {
    constructor() {
        super();
        this.baseURL = process.env.USERS_API_HOST;
    }

    reduceUser(user, dateFormat = DATE_FORMAT) {
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

    async createUser({ input }) {
        return await this.put('users', input);
    }

    async updateUser(data) {
        return await this.post('users', { data });
    }
}

module.exports = UsersAPI;

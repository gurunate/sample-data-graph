const { RESTDataSource } = require('apollo-datasource-rest');
const format = require('date-fns-tz/format');

const DATE_FORMAT = 'MMM dd, yyyy h:mm aaa'; // Mar 23, 2020 8:29:32 AM CDT

class AddressesAPI extends RESTDataSource {
    constructor() {
        super();
        this.baseURL = process.env.USERS_API_HOST;
    }

    reduceAddress(address, dateFormat) {
        return {
            ...address,
            createdAtFormatted: format(new Date(address.createdAt), dateFormat),
            updatedAtFormatted: format(new Date(address.updatedAt), dateFormat)
        };
    }

    async getAddresses({ dateFormat = DATE_FORMAT }) {
        const addresses = await this.get('addresses');

        return addresses.map((address) =>
            this.reduceAddress(address, dateFormat)
        );
    }

    async getAddress({ id, dateFormat }) {
        const address = await this.get(`addresses/${id}`);

        return this.reduceAddress(address, dateFormat);
    }

    async createAddress(address) {
        return await this.put('addresses', address);
    }

    async updateAddress(address) {
        return await this.post(`addresses/${address.id}`, address);
    }

    async deleteAddress(address) {
        return await this.delete(`addresses/${address.id}`);
    }
}

module.exports = AddressesAPI;

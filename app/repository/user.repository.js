const { connect } = require('../config/db.config');
const { User } = require('../models/user.model');
const logger = require('../logger/api.logger');

class UserRepository {

    constructor() {
        connect();
    }

    async getUsers() {
        const users = await User.find({});
        console.log('users:::', users);
        return users;
    }

    async createUser(user) {
        let data = {};
        try {
            data = await User.create(user);
        } catch(err) {
            logger.error('Error::' + err);
        }
        return data;
    }

    async updateUser(user) {
        let data = {};
        try {
            data = await User.updateOne(user);
        } catch(err) {
            logger.error('Error::' + err);
        }
        return data;
    }

    async deleteUser(userId) {
        let data = {};
        try {
            data = await User.deleteOne({id : userId});
        } catch(err) {
            logger.error('Error::' + err);
        }
        return {status: `${data.deletedCount > 0 ? true : false}`};
    }

}

module.exports = new UserRepository();
const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({ id: 'string',
                name: 'string', 
                address: 'string', 
                });

const User = mongoose.model('user', userSchema);

module.exports = {
    User
}
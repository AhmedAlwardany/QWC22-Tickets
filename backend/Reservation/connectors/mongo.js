const mongoose = require('mongoose');

const mongoConnection = async () => {
    await mongoose.connect(`${process.env.MONGO_URI}`, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    })
}
module.exports = mongoConnection;
const dotenv = require('dotenv');
const {MongoClient} = require('mongodb');

const client = new MongoClient(`mongodb+srv://anilsorgit:1234567890@cluster0.lndxj.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`);

const start = async () => {
    try {
        await client.connect();
        console.log('Connected to MongoDB');

        await client.db().createCollection('users');

        const users = client.db().collection('users');
        await users.insertOne({
            name: 'John',
            age: 37
        });
    } catch (e) {
        console.log(e);
    } finally {
        client.close();
    }
}

start();
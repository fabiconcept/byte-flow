import { MongoClient } from 'mongodb';

const uri = process.env.MONGO_URI;
const options = {
    useUnifiedTopology: true,
};

const client = new MongoClient(uri, options);

export async function connectToDatabase() {
    if (!client.isConnected()) await client.connect();
    return client.db();
}
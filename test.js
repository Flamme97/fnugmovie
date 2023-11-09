const MongoClient = require('mongodb').MongoClient;

const url = '
const dbName = '0';

MongoClient.connect(url, (error, client) => {
  if (error) throw error;

  const db = client.db(dbName);
  const collection = db.collection('mycollection');

  collection.insertOne({ name: 'John Doe' }, (error, result) => {
    if (error) throw error;

    console.log('Document inserted!');
    client.close();
  });
});

const MongoClient = require('mongodb').MongoClient;

const url = 'mongodb://127.0.0.1:27017';    // connection URL
const options = { useNewUrlParser: true};   // fixed error
const dbName = 'shoesdb';


const addIndexNamePrice = (db, callback) => {
  const collection = db.collection('shoes');
  collection.createIndex( {"name": 1, "price": -1 }, (err, result) => {
  if(err) throw err;
  console.log(result);
  callback(result);
  });
}

const addIndexText = (db, callback) => {
  const collection = db.collection('shoes');
  collection.createIndex( { "category": "text", "name": 1 }, (err, result) => {
  if(err) throw err;
  console.log(result);
  callback(result);
  });
}
const deleteIndex = (db, callback) => {
  const collection = db.collection('shoes');
  collection.dropIndex( "category_text", (err, result) => {
  if(err) throw err;
  console.log(result);
  callback(result);
  });
}

MongoClient.connect(url, options, (err, client) => {
  if(err){
    console.log(err);
    client.close(); // if unable to connect, close connection
    return
  }
  console.log('Connected succsessfully to server');
  const db = client.db(dbName);             // uppkoppling till db

  addIndexText(db, function(){
    client.close();
  })
})

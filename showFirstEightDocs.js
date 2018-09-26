//3. Visar de åtta första elementen i en collection
const MongoClient = require('mongodb').MongoClient;

const url = 'mongodb://127.0.0.1:27017';    // connection URL
const options = { useNewUrlParser: true};   // fixed error, no idea how
const dbName = 'shoesdb';                   // database name

MongoClient.connect(url, options, function(err, client){
  if(err){
    console.log(err);
    client.close(); // if unable to connect, close connection
    return
  }
  console.log('Connected succsessfully to server');
  const db = client.db(dbName);
  findDocuments(db, function(){
    client.close();
  })
})

const findDocuments = function(db, callback) {
  // Get the documents collection
  const collection = db.collection('shoes');
  // Find first 8 documents
  collection.find().limit(8).toArray(function(err, docs) {
    console.log(docs);
    callback(docs);
  });
}

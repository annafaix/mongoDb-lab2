//2. Tar bort alla dokument i en collection
const MongoClient = require('mongodb').MongoClient;

const url = 'mongodb://127.0.0.1:27017';    // connection URL
const options = { useNewUrlParser: true};   // fixed error
const dbName = 'shoesdb';                   // database name

const removeDocument = (db, callback) => {
  const collection = db.collection('shoes');    // Get the documents collection
  // Delete all documents
  collection.deleteMany({}, function(err, result) {
    console.log("Removed documents");
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
  removeDocument(db, function(){
    client.close();
  })
})

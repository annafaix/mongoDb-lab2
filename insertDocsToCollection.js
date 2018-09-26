//1. ... och lägg till dem i en collection

const { generateListWithDocs } = require('./randomDocs.js');
const MongoClient = require('mongodb').MongoClient;

const url = 'mongodb://127.0.0.1:27017';    // connection URL
const options = { useNewUrlParser: true};   // fixed error, no idea how
const dbName = 'shoesdb';                   // database name

const insertDocuments = (db, callback) => {
  const collection = db.collection('shoes');      // get the documents collection
  let numDocs = 1000;
  let data = generateListWithDocs(numDocs);       // generate random documents x numDocs

  // insert documents
  collection.insertMany( data, (err, result) => {
    if(err) throw err;
    console.log(`Inserted ${numDocs} documents into collection`);
    callback(result)
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
  insertDocuments(db, function(){
    client.close();
  })
})

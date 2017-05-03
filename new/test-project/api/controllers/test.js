var MongoClient = require('mongodb').MongoClient;
var url = 'mongodb://localhost/register';

MongoClient.connect(url, function(err, db) {

    var cursor = db.tagdata.find();

    cursor.each(function(err, doc) {

        console.log(doc);

    });
}); 

var MongoClient = require('mongodb').MongoClient;
var url = "mongodb+srv://LilShah:lullimeri@thulladb-w9qjp.gcp.mongodb.net/Thulla?retryWrites=true";

MongoClient.connect(url, function(err, db) {
  if (err) throw err;
  var dbo = db.db("Thulla");
  const { user } = this.props.auth;
  /*Return only the documents with the address "Park Lane 38":*/
  var query = { id: user.id };
  dbo.collection("users").find(query).toArray(function(err, result) {
    if (err) throw err;
    console.log(result);
    db.close();
    return result;
  });
});
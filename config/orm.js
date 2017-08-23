var connection = require("./connection.js");

var orm = {

	printQuestionMarks: function(num){
		var array = [];

		for (var i = 0; i < num; i++) {
			array.push("?");
		}
		return array.toString();
	},

	objToSql: function (obj) {
  var arr = [];

  for (var key in obj) {
    if (Object.hasOwnProperty.call(obj, key)) {
      arr.push(key + "=" + obj[key]);
    }
  }

  return arr.toString();
},

	selectAll: function(table, cb) {
		var queryString = "SELECT * FROM " + table + ";";

		connection.query(queryString, function(err,result){
			if (err) {
				throw err;
			}
			cb(result);
	});
},
	insertOne: function(table,Cols, Vals, cb){
		var queryString = "INSERT INTO " + table;

    queryString += " (";
    queryString += Cols.toString();
    queryString += ") ";
    queryString += "VALUES (";
    queryString += this.printQuestionMarks(Vals.length);
    queryString += ") ";

    console.log(queryString);

    connection.query(queryString, Vals, function(err, result) {
      if (err) {
        throw err;
      }
      cb(result);
      console.log(result);
		});
	},

	updateOne: function(table, objColVals, condition, cb){
  	 var queryString = "UPDATE " + table;

  		queryString += " SET ";
   		queryString += this.objToSql(objColVals);
   		queryString += " WHERE ";
  		queryString += condition;

		console.log(queryString);

		connection.query(queryString, function (err,result){
			if (err) {
				throw err;
			}
			
			cb(result);
		});
		
	}
};

module.exports = orm;
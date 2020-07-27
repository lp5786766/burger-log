
// Import (require) connection.js into orm.js
const connection = require("../config/connection");

function printQuestionMarks(num) {
  var arr = [];

  for (var i = 0; i < num; i++) {
    arr.push("?");
  }

  return arr.toString();
}
// In the orm.js file, create the methods that will execute the necessary MySQL commands in the controllers. These are the methods you will need to use in order to retrieve and store data in your database.
const orm = {
    findAll: function(tableInput, allBurgers) {
        let queryString = `SELECT * FROM ${tableInput}`;
        connection.query(queryString, function (err, result) {
            if (err) {
                console.error(err);
            }
            allBurgers(result);
        });
    },

    insertOne: (table, columns, values, allBurgers) => {
        const queryString = `INSERT INTO ${table} (${columns.toString()}) VALUES (${printQuestionMarks(values.length)}) `

        console.log(queryString);
        connection.query(queryString, values, function(err, result) {
          if (err) {
            throw err;
          }
    
          allBurgers(result);
        });
    },

    updateOne: function(table, eaten, allBurgers) {
        var queryString = `UPDATE ${table} SET true WHERE ${eaten}`;
        console.log(queryString);
        connection.query(queryString, function(err, result) {
          if (err) {
            throw err;
          }
    
          allBurgers(result);
        });
    },

}

// Export the ORM object in module.exports.
module.exports = orm;
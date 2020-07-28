const connection = require('../config/connection');

function printQuestionMarks(num) {
  var arr = [];

  for (var i = 0; i < num; i++) {
    arr.push('?');
  }

  return arr.toString();
}

function objToSql(ob) {
  var arr = [];

  // loop through the keys and push the key/value as a string int arr
  for (var key in ob) {
    var value = ob[key];
    // check to skip hidden properties
    if (Object.hasOwnProperty.call(ob, key)) {
      // if string with spaces, add quotations (Lana Del Grey => 'Lana Del Grey')
      if (typeof value === 'string' && value.indexOf(' ') >= 0) {
        value = "'" + value + "'";
      }
      // e.g. {name: 'Lana Del Grey'} => ["name='Lana Del Grey'"]
      // e.g. {sleepy: true} => ["sleepy=true"]
      arr.push(key + '=' + value);
    }
  }

  // translate array of strings to a single comma-separated string
  return arr.toString();
}
// In the orm.js file, create the methods that will execute the necessary MySQL commands in the controllers. These are the methods you will need to use in order to retrieve and store data in your database.
const orm = {
  findAll: function (tableInput, allBurgers) {
    let queryString = `SELECT * FROM ${tableInput}`;
    connection.query(queryString, function (err, result) {
      if (err) {
        console.error(err);
      }
      allBurgers(result);
    });
  },

  insertOne: (table, columns, values, allBurgers) => {
    let queryString = `INSERT INTO ${table} (${columns.toString()}) VALUES (${printQuestionMarks(
      values.length
    )}) `;
    connection.query(queryString, values, function (err, result) {
      if (err) {
        throw err;
      }
      allBurgers(result);
    });
  },

  // updateOne: (table, eaten, allBurgers) => {
  //   const queryString = `UPDATE ${table} SET true WHERE ${eaten}`;
  //   connection.query(queryString, (err, result) => {
  //     if (err) {
  //       throw err;
  //     }
  //     allBurgers(result);
  //   });
  // },

  updateOne: (table, objColVals, condition, allBurgers) => {
    let queryString = `UPDATE ${table} SET ${objToSql(
      objColVals
    )} WHERE ${condition}`;
    connection.query(queryString, (err, result) => {
      if (err) {
        throw err;
      }
      allBurgers(result);
    });
  },
  // delete: (table, id, allBurgers) => {
  //   const queryString = `DELETE FROM ${table} WHERE ${id}`;
  //   connection.query(queryString, (err, result) => {
  //     if (err) {
  //       throw err;
  //     }
  //     allBurgers(result);
  //   });
  // },
};

module.exports = orm;

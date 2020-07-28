// Inside burger.js, import orm.js into burger.js
const orm = require('../config/orm');

// Also inside burger.js, create the code that will call the ORM functions using burger specific input for the ORM.
const burger = {
  findAll: (allBurgers) => {
    orm.findAll('my_burgers', (res) => {
      allBurgers(res);
    });
  },
  insertOne: (columns, values, allBurgers) => {
    orm.insertOne('my_burgers', columns, values, (res) => {
      allBurgers(res);
    });
  },
  updateOne: (objColVals, condition, allBurgers) => {
    orm.updateOne('my_burgers', objColVals, condition, (res) => {
      allBurgers(res);
    });
  },
//   delete: (id, allBurgers) => {
//     orm.delete('my_burgers', id, (res) => {
//       allBurgers(res);
//     });
//   },
};

// Export at the end of the burger.js file.
module.exports = burger;

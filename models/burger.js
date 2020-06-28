
// Inside burger.js, import orm.js into burger.js
const orm = require("../config/orm");

// Also inside burger.js, create the code that will call the ORM functions using burger specific input for the ORM.
const burger = {
    findAll: (allBurgers) => {
        orm.findAll("my_burgers", (res) => {
            allBurgers(res);
        });
    },
    insertOne: function(columns, values, allBurgers) {
        orm.insertOne("my_burgers", columns, values, function(res) {
            allBurgers(res);
        });
    },
    updateOne: function(objColVals, condition, allBurgers) {
        orm.updateOne("my_burgers", objColVals, condition, function(res) {
            allBurgers(res);
        });
    },
}

// Export at the end of the burger.js file.
module.exports = burger;
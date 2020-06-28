// TODO:

// Inside burger.js, import orm.js into burger.js
const orm = require("../config/orm");

// Also inside burger.js, create the code that will call the ORM functions using burger specific input for the ORM.
const burger = {
    findAll: (allBurgers) => {
        orm.findAll("my_burgers", (res) => {
            allBurgers(res);
        });
    }
}

// Export at the end of the burger.js file.
module.exports = burger;
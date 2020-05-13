const database = require("./database");

async function example(input) {
  return database.query(input);
}

module.exports = {
  example
};

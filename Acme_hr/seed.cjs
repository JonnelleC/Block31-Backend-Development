const client = require("./client.cjs");
const { createEmployee } = require("./employee.cjs");

const syncAndSeed = async () => {
  await client.connect();
  console.log("CONNECTED");
  await dropTables();
  console.log(`TABLES DROPPED!`);

  await createTables();
  console.log(`TABLES CREATED!`);

  await createUser("bill123", "I_am_bill!");
  console.log("USER BILL CREATED!");

  await createUser("amy12", "AWEsome!");
  console.log("USER AMY CREATED!");

  await client.end();
  console.log(`DISCONNECTED`);
};
syncAndSeed();

const createTables = async () => {
  try {
    await client.query(`
            CREATE TABLE users (
            employeeId SERIAL PRIMARY KEY,
            isAdmin BOOLEAN NOT NULL,
            name VARCHAR(30) NOT NULL );`);
  } catch (err) {
    console.log(err);
  }
};

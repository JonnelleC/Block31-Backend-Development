const client = require("./client.cjs");

const createEmployee = async (employeeID, name, isAdmin) => {
  try {
    await client.query(`
          INSERT INTO employees (employeeID, name, isAdmin)  
          VALUES ('${employeeID}', '${name}', '${isAdmin} );
          `);
  } catch (err) {
    console.log(err);
  }
};

const getAllEmployees = async () => {
  try {
    const { rows } = await client.query(`
            Select * From employees;`);
  } catch (err) {
    console.log(err);
  }
};

module.exports = { createEmployee, getAllEmployees };

const { getAllEmployees } = require('./employee.cjs');
const express = require('express');
const app = express();

const client = require('./client.cjs');
client.connect();

app.use(express.static('dist'));

app.get('/api/v1/employees', async(req, res, next) => {
    try {
        const employees = await getAllEmployees();
        res.send(`<h1>Hello</h1>`);

    } catch (err){
        console.log(err);
    }
});



const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log (`listening on port ${PORT}`));

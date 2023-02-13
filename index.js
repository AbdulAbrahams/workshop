const express = require('express');
const app = express();
const route = express.Router();
const port = parseInt(process.env.port) || 4000;

app.use(
    route
)

route.get('/', (req, res) =>{
    res.status(200).send("well done");
})

app.listen(port, () =>{
    console.log(`Server is running at ${port}`);
})
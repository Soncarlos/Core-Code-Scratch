const express = require('express')
const app = express();
const port = 3852;
const del = 10000;

app.get('/', (req, res) => {

    (setTimeout(() => {
        res.send(`Dilate ${del / 1000} segundos en aparecer`);
    }, del))

})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})

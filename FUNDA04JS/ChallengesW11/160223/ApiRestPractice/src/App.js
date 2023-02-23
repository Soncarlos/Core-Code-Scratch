import express from 'express'
const app = express();
const port = 3852;

app.get("/api/delay/:tiempo", (req, res) => {
    const { tiempo } = req.params;
    const mensaje = "Digite un numero mayor a 1000";
    const time = () => {
        (setTimeout(() => {
            res.send(`Dilate ${tiempo / 1000} segundos en aparecer`);
        }, tiempo));
    }
    (tiempo > 0) ? time() : res.send(mensaje);
})
app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})

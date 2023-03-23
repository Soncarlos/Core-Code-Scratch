export function valUpdate(req, res, next) {
    const { title } = req.body;
    if (title == "") {
        return res.status(404).send({ message: "Name can´t be empty" })
    }

    next();
}
export function validator(req, res, next) {
    const { title } = req.body;
    if (!title) {
        return res.status(400).send({ message: "Missing Information" });
    }
    next();
}
import { getDbConnection } from "../db/index.js";

export async function valDelete(req, res, next) {
    const db = await getDbConnection();
    const { id } = req.params.id;
    const exists = await db.run(`SELECT * FROM todos WHERE id = ?`, id);
    if (!exists) {
        return res.status(404).send({ exists, messagge: "To-Do Not Found" })
    }
    next();
};

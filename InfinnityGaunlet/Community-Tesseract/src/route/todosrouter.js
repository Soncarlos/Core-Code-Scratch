import express, { response } from "express";
import { getDbConnection } from "../db/index.js";
//import { valDelete } from "../middlewares/valDelete.js";
import { validator } from "../middlewares/validator.js";
import { valUpdate } from "../middlewares/valUpdate.js";

export const TodosRouter = express.Router();

TodosRouter.get("/to-dos", async function (req, res) {
    try {
        const db = await getDbConnection();
        const todos = await db.all('SELECT * FROM todos');
        await db.close();
        res.send({ todos });
    } catch (error) {
        res.status(500).send({ messagge: "Something went wrong trying, to get to dos", error })
    }
})

TodosRouter.post("/to-do", validator, async function (req, res) {
    try {
        const { title, description } = req.body;
        const db = await getDbConnection();
        const newtodo = await db.run(`INSERT INTO todos (title, description)
        values
        ('${title}', '${description}')`)
        await db.close();
        res.send({ newtodo: { title, description }, queryInfo: newtodo });

    } catch (error) {
        res.status(500).send({ messagge: "Something went wrong, trying to create a to do", error })
    }
})

TodosRouter.delete('/to-do/:id', async function (req, res) {
    try {
        const db = await getDbConnection();
        const id = req.params.id;
        const todoExists = await db.get(`SELECT * FROM todos WHERE id = ?`, id);

        if (!todoExists) {
            return res.status(404).send({ messagge: "To-Do Not Found" });
        }
        const deletioninfo = await db.run(`DELETE FROM todos WHERE id = ?`, id)
        await db.close();
        res.send({ deletioninfo });

    } catch (error) {
        res.status(500).send({ messagge: "Something went wrong trying yo delete a to-do" }, error.messagge);
    }
})

TodosRouter.patch('/to-do/:id', async function (req, res) {
    try {
        const db = await getDbConnection();
        const id = req.params.id;
        const todoExists = await db.get(`SELECT * FROM todos WHERE id = ?`, id);

        if (!todoExists) {
            return res.status(404).send({ message: "To Do Not Found" });
        }

        const { title, description, isDone: is_done } = req.body;

        await db.run(`UPDATE todos SET title = ?, description = ?, is_done = ?  WHERE  id = ?`,
            title || todoExists.title,
            description || todoExists.description,
            is_done !== undefined ? is_done : !todoExists.is_done,
            id);

        res.send({ message: "To do Updated" });
        await db.close();
    } catch (error) {
        res.status(500).send({ messagge: "Something went wrong trying to update  a to do" }, error.message)
    }
});
import { open } from "sqlite";
import driver from "sqlite3";

export async function getDbConnection() {

    try {
        const dbConnection = await open({
            filename: "db.sqlite",
            driver: driver.Database,
        });
        if (!dbConnection) {
            throw new TypeError(`DB Connection expected, got : ${dbConnection}`)
        }
        return dbConnection;

    } catch (error) {
        console.error("There was an error trying to connect to the DBMS");
    }
}
export async function initDB() {
    try {
        const db = await getDbConnection();
        await db.exec(`CREATE TABLE IF NOT EXISTS todos(
            id INTEGER PRIMARY KEY,
            title TEXT,
            description TEXT,
            is_done INTEGER DEFAULT 0)`)

        await db.close();
    } catch (ex) {
        console.error(
            "There was an error, trying to init DB",
            ex.error);
    }
}
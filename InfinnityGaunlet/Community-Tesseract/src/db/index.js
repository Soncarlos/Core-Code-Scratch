import { open } from "sqlite";
import driver from "sqlite3";

export async function getDb() {

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
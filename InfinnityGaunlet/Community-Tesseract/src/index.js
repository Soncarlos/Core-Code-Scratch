import express from 'express'
import cors from 'cors'
import { initDB } from './db/index.js'

const api = express();

const apiPort = process.env["APP_ENV"] || 3000;

api.use(express.json());
api.use(express.urlencoded({ extends: false }))
api.use(cors());


api.listen(apiPort, () => {
    console.log(`API RUNNING IN PORT : ${apiPort}`)
    initDB().then(() => {
        console.log('DB INITIALIZED')
    });
})


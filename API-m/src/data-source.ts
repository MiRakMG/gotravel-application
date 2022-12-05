require('dotenv').config();
import "reflect-metadata"
import { DataSource } from "typeorm"
import { Client } from "./entity/Client";
import { Contenir } from "./entity/Contenir";
import { Date } from "./entity/Date";
import { Faire } from "./entity/Faire";
import { Hotel } from "./entity/Hotel";
import { Prendre } from "./entity/Prendre";
import { Prestation } from "./entity/Prestation";
import { Saison } from "./entity/Saison";
import { Type } from "./entity/Type";

export const AppDataSource = new DataSource({
    type: "mysql",
    host: "localhost",
    port: 3306,
    username: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    synchronize: true,
    logging: false,
    entities: [
        Client, Date, Hotel, Prestation, Saison, Type, Contenir, Faire, Prendre
    ],
    migrations: [],
    subscribers: [],
})

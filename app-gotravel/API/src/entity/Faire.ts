import { Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { Client } from "./Client";
import { Date } from "./Date";
import { Prestation } from "./Prestation";

@Entity()
export class Faire {

    @PrimaryGeneratedColumn()
    id: number

    @ManyToOne(() => Client, (client) => client.faire, {onDelete: "SET NULL"})
    client: Client

    @ManyToOne(() => Date, (date) => date.faire, {createForeignKeyConstraints: false})
    date: Date

    @ManyToOne(() => Prestation, (prest) => prest.faire)
    prestation: Prestation
}
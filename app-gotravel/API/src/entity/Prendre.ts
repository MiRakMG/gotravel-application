import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { Client } from "./Client";
import { Date } from "./Date";
import { Hotel } from "./Hotel";

@Entity()
export class Prendre {

    @PrimaryGeneratedColumn()
    id: number

    @ManyToOne(() => Hotel, (hotel) => hotel)
    hotel: Hotel

    @ManyToOne(() => Client, (client) => client.prendre, {onDelete: "CASCADE"})
    client: Client

    @ManyToOne(() => Date, (date) => date.date, {createForeignKeyConstraints: false})
    date: Date

    @Column({type: "varchar", length: 100})
    journey: string

    @Column({type: "varchar", length: 15})
    date_number: string
}
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { Client } from "./Client";
import { Date } from "./Date";
import { Hotel } from "./Hotel";
import { Saison } from "./Saison";
import { Type } from "./Type";

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

    @ManyToOne(()=> Saison, (saison) => saison)
    saison: Saison

    @ManyToOne(() => Type, (type) => type)
    type : Type

    @Column({type: "varchar", length: 100})
    journey: string

    @Column({type: "varchar", length: 15})
    date_number: string

    @Column({name: "categorie", type: "varchar", length: 50, nullable: false})
    category: string
}
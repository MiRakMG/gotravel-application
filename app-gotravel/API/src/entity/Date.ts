import { Column, Entity, OneToMany, PrimaryColumn, PrimaryGeneratedColumn } from "typeorm";
import { Faire } from "./Faire";
import { Prendre } from "./Prendre";

@Entity()
export class Date {

    @PrimaryColumn({type: "date"})
    date: Date

    @OneToMany(() => Faire, (faire) => faire.date, {eager: true})
    faire: Faire[]

    @OneToMany(() => Prendre, (prendre) => prendre.date, {eager: true})
    prendre: Prendre[]
}
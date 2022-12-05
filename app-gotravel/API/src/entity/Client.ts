import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Faire } from "./Faire";
import { Prendre } from "./Prendre";

@Entity()
export class Client {

    @PrimaryGeneratedColumn()
    code_cli: number

    @Column({name: "nom", type: "varchar", length: 125, nullable: false})
    name: string

    @Column({name: "nombre", type: "tinyint"})
    number: number
    
    @OneToMany(() => Faire, (faire) => faire.client, {eager: true})
    faire: Faire[]

    @OneToMany(() => Prendre, (prendre) => prendre.client, {eager: true})
    prendre: Prendre[]
}
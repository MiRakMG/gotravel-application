import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Contenir } from "./Contenir";
import { Prendre } from "./Prendre";

@Entity()
export class Hotel {

    @PrimaryGeneratedColumn()
    code_hotel: number

    @Column({name: "nom", type: "varchar", length: 50})
    name: string

    @Column({name: "ville", type: "varchar", length: 75})
    city: string

    @OneToMany(() => Contenir, (content) => content.hotel, {eager: true})
    content: Contenir[]

    @OneToMany(() => Prendre, (prendre) => prendre.hotel, {eager: true})
    prendre: Prendre[]
}
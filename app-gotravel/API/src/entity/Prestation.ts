import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Faire } from "./Faire";

@Entity()
export class Prestation {

    @PrimaryGeneratedColumn()
    id: number

    @Column({name: "libellé", type: "varchar", length: 100})
    wording: string

    @Column({name: "prix", type: "integer"})
    price: number

    @Column({type: "varchar", length: 75})
    type: string

    @OneToMany(() => Faire, (faire) => faire.prestation, {eager: true})
    faire: Prestation[]
}
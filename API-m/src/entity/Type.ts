import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm"
import { Contenir } from "./Contenir"

@Entity()
export class Type {

    @PrimaryGeneratedColumn()
    code_type: number

    @Column({name: "libelle_type", type: "varchar", length: 50})
    wording_type: string

    @OneToMany(() => Contenir, (content) => content.type, {eager: true})
    content: Contenir[]
}
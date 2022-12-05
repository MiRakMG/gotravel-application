import { Entity, OneToMany, PrimaryColumn } from "typeorm";
import { Contenir } from "./Contenir";

@Entity()
export class Saison {

    @PrimaryColumn()
    code_saison: string

    @OneToMany(() => Contenir, (content) => content.season, {eager: true})
    content: Contenir[]
}
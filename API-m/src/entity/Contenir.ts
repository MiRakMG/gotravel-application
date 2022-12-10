import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { Hotel } from "./Hotel";
import { Saison } from "./Saison";
import { Type } from "./Type";

@Entity()
export class Contenir {

    @PrimaryGeneratedColumn()
    id: number
    
    @ManyToOne(() => Hotel, (hotel) => hotel.content)
    hotel: Hotel

    @ManyToOne(() => Type, (type) => type.content)
    type: Type

    @ManyToOne(() => Saison, (season) => season.content)
    season: Saison

    @Column({name: "categorie", type: "enum", enum: ['Simple', 'Double', 'Triple', 'Quadruple']})
    category: string

    @Column({name: "tarif", type: "varchar", length: 20, nullable: false})
    price: string
}
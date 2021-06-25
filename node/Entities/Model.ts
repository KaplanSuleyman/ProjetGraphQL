import { BaseEntity, Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { Marque } from "./Marque";

@Entity()
export class Model extends BaseEntity {
    @PrimaryGeneratedColumn()
    id!: number;

    @Column()
    nameModel!: string;

    @Column()
    year!: number;

    @Column()
    powerHorse!: number;

    @Column()
    fuel!: number;

    @Column()
    marqueId!: number;

    @ManyToOne(type => Marque, marque => marque.models)
    @JoinColumn({name: 'marqueId'})
    marque!: Marque[];
}

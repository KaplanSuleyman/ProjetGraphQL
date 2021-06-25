import { BaseEntity, Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Model } from "./Model";


@Entity()
export class Marque extends BaseEntity {
    @PrimaryGeneratedColumn()
    id!: number;

    @Column()
    nameMarque!: string;

    @OneToMany(() => Model, model => model.marque)
    models!: Model[];
}
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Property } from "./properties.entity";

@Entity("category")
export class Category {
    @PrimaryGeneratedColumn("uuid")
    id: string;

    @Column({ length: 50, unique: true, nullable: false })
    name: string;

    @OneToMany(() => Property, property => property.category)
    properties: Property[];
}
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { Owner } from "./owners.entity";


@Entity('pets')
class Pets {
    @PrimaryGeneratedColumn()
    id: string

    @Column()
    name: string

    @Column()
    breed: string

    @Column()
    weight: number

    @ManyToOne(() => Owner, (owner) => owner.pets)
    owner: Owner
}

export { Pets }
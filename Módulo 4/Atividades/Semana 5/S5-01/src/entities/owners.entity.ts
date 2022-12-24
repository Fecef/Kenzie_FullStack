import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Pets } from "./pets.entity";

@Entity('owners')
class Owner{
    @PrimaryGeneratedColumn()
    id: string
    
    @Column()
    name: string

    @Column()
    email: string

    @OneToMany(() => Pets, (pets) => pets.owner)
    pets: Pets[]
}

export { Owner }
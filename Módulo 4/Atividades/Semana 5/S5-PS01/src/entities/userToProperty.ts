import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { User } from "./user.entity";
import { Property } from "./properties.entity";

@Entity('schedules_user_properties')
export class UserToProperty {
    @PrimaryGeneratedColumn("uuid")
    id: string;

    @Column({ type: "date", nullable: false })
    date: string;

    @Column({ type: "time", nullable: false })
    hour: string;

    @ManyToOne(() => User, user => user.userToProperty)
    user: User;

    @ManyToOne(() => Property, property => property.userToProperty)
    property: Property;
}
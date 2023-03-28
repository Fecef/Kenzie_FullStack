import { Column, CreateDateColumn, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";

import { User } from "./user.entity";

@Entity("contact")
export class Contact {
    @PrimaryGeneratedColumn("uuid")
    id: string;

    @Column({ length: 120 })
    name: string;

    @Column({ length: 120, unique: true })
    email: string;

    @Column({ length: 20 })
    phone: string;

    @CreateDateColumn()
    createdAt: Date;

    @ManyToOne(() => User, user => user.contacts)
    user: User;
}
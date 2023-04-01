import { hashSync } from "bcryptjs";
import { BeforeInsert, BeforeUpdate, Column, CreateDateColumn, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";

import { Contact } from "./contact.entity";

@Entity("user")
export class User {
    @PrimaryGeneratedColumn("uuid")
    id: string;

    @Column({ length: 120 })
    name: string;

    @Column({ length: 120, unique: true })
    email: string;

    @Column({ length: 120 })
    password: string;

    @Column({ length: 20 })
    phone: string;

    @Column({ default: true })
    isActive: boolean;

    @CreateDateColumn()
    createdAt: Date;

    @BeforeUpdate()
    @BeforeInsert()
    hashPassword() {
        if (this.password) this.password = hashSync(this.password, 10);
    }

    @OneToMany(() => Contact, contacts => contacts.user)
    contacts: Contact[];
}
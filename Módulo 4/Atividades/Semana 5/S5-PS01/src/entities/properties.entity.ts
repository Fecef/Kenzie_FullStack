import { User } from './user.entity';
import { UserToProperty } from './userToProperty';
import { Column, CreateDateColumn, Entity, JoinColumn, ManyToOne, OneToMany, OneToOne, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
import { Address } from "./addresses.entity";
import { Category } from "./categories.entity";

@Entity("properties")
export class Property {
    @PrimaryGeneratedColumn("uuid")
    id: string;

    @Column({ default: false })
    sold: boolean;

    @Column({ type: "decimal", nullable: false })
    value: number;

    @Column({ nullable: false })
    size: number;

    @CreateDateColumn()
    createdAt: Date;

    @UpdateDateColumn()
    updatedAt: Date;

    @OneToOne(() => Address) @JoinColumn()
    address: Address;

    @ManyToOne(() => Category, category => category.properties)
    category: Category;

    @OneToMany(() => UserToProperty, userToProperty => userToProperty.property)
    userToProperty: UserToProperty[]
}
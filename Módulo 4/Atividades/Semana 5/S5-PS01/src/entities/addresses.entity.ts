import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("address")
export class Address {
    @PrimaryGeneratedColumn("uuid")
    id: string;

    @Column({ length: 80, nullable: false })
    district: string;

    @Column({ length: 8, nullable: false })
    zipCode: string;

    @Column({ length: 5, nullable: true })
    number: string;

    @Column({ length: 40, nullable: false })
    city: string;

    @Column({ length: 40, nullable: false })
    state: string;
}
import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("rating")
export class Rating {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Column()
  recommendation: string;

  @Column()
  note: Number;
}

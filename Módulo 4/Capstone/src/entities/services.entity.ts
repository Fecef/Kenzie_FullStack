import { Column, Entity, ManyToMany, PrimaryGeneratedColumn } from "typeorm";
import { UserHired } from "./userHired.entity";

@Entity("services")
export class Services {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Column()
  name: string;

  @ManyToMany(() => UserHired, (userHired) => userHired.services)
  usersHired: UserHired[];
}

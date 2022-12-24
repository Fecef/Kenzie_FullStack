import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn, OneToMany } from 'typeorm'
import { UsersCommunities } from './usersCommunities.entity'

@Entity('users')
class User {

    @PrimaryGeneratedColumn()
    id: number

    @Column({ length: 40 })
    name: string

    @Column({ length: 120 })
    email: string

    @CreateDateColumn()
    createdAt: Date

    @OneToMany(() => UsersCommunities, usersCommunities => usersCommunities.user)
    usersCommunity: UsersCommunities[]

}

export { User }
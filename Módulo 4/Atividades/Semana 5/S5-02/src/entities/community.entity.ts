import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn, OneToMany } from 'typeorm'
import { UsersCommunities } from './usersCommunities.entity'

@Entity('communities')
class Community {

    @PrimaryGeneratedColumn()
    id: number

    @Column({ length: 40 })
    name: string

    @Column({ length: 120 })
    description: string

    @CreateDateColumn()
    createdAt: Date

    @OneToMany(() => UsersCommunities, usersCommunities => usersCommunities.community)
    usersCommunity: UsersCommunities[]

}

export { Community }
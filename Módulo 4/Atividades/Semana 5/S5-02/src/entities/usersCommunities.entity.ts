import { CreateDateColumn, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm'
import { Community } from './community.entity'
import { User } from './user.entity'

@Entity('users_communities')
class UsersCommunities {

    @PrimaryGeneratedColumn()
    id: number

    @CreateDateColumn()
    memberSince: Date

    @ManyToOne(() => User)
    user: User

    @ManyToOne(() => Community)
    community: Community

}

export { UsersCommunities } 
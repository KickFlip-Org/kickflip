import { randomUUID } from "node:crypto"

import {
    Collection,
    Entity,
    OneToMany,
    OneToOne,
    PrimaryKey,
    Property,
    UuidType,
} from "@mikro-orm/core"
import { RoleEntity } from "../role/role.entity"
import { UserAddressEntity } from "../user-address/user-address.entity"

@Entity()
export class UserEntity {
    @PrimaryKey({
        type: UuidType,
    })
    public id = randomUUID()

    @Property()
    public userName!: string

    @Property()
    public firstName!: string

    @Property()
    public lastName!: string

    @OneToMany(() => UserAddressEntity, (relation) => relation.user)
    public address = new Collection<UserAddressEntity>(this)

    @Property()
    public phone!: string

    @Property()
    public hashedPassword: string

    @Property({
        type: "timestamp with time zone",
    })
    public createdAt!: Date

    @Property()
    public email!: string

    @OneToOne({ entity: () => RoleEntity })
    public role!: RoleEntity

    @Property({ default: 0 })
    public credits!: number

    public constructor(parameters: {
        userName: string
        firstName: string
        lastName: string
        createdAt: Date
        email: string
        hashedPassword: string
        role: RoleEntity
        phone: string
    }) {
        this.userName = parameters.userName
        this.firstName = parameters.firstName
        this.lastName = parameters.lastName
        this.createdAt = parameters.createdAt
        this.email = parameters.email
        this.userName = parameters.userName
        this.hashedPassword = parameters.hashedPassword
        this.role = parameters.role
        this.phone = parameters.phone
    }
}

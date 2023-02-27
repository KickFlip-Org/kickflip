import { randomUUID } from "node:crypto"

import {
    Entity,
    ManyToOne,
    PrimaryKey,
    Property,
    UuidType,
} from "@mikro-orm/core"
import { UserEntity } from "../user/user.entity"

@Entity()
export class UserAddressEntity {
    @PrimaryKey({
        type: UuidType,
    })
    public id = randomUUID()

    @ManyToOne(() => UserEntity)
    public user: UserEntity

    @Property()
    public address: string

    @Property()
    public city: string

    @Property()
    public postalCode: number

    @Property()
    public country: string

    public constructor(parameters: {
        user: UserEntity
        address: string
        city: string
        postalCode: number
        country: string
    }) {
        this.user = parameters.user
        this.address = parameters.address
        this.city = parameters.city
        this.postalCode = parameters.postalCode
        this.country = parameters.country
    }
}

import { randomUUID } from "node:crypto"

import { Entity, PrimaryKey, Property, UuidType } from "@mikro-orm/core"

@Entity()
export class UserEntity {
    @PrimaryKey({
        type: UuidType,
    })
    public id = randomUUID()

    @Property()
    public firstName: string

    @Property()
    public lastName: string

    @Property({
        type: "timestamp with time zone",
    })
    public birthDate: Date

    @Property()
    public email: string

    @Property({
        type: "bytea",
    })
    public picture: Buffer

    public constructor(parameters: {
        firstName: string
        lastName: string
        birthDate: Date
        email: string
        picture: Buffer
    }) {
        this.firstName = parameters.firstName
        this.lastName = parameters.lastName
        this.birthDate = parameters.birthDate
        this.email = parameters.email
        this.picture = parameters.picture
    }
}

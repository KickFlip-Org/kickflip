import { randomUUID } from "node:crypto"

import { Entity, PrimaryKey, Property, UuidType } from "@mikro-orm/core"

@Entity()
export class RoleEntity {
    @PrimaryKey({
        type: UuidType,
    })
    public id = randomUUID()

    @Property()
    public name: string

    @Property()
    public permission: string[]

    public constructor(parameters: { name: string; permission: string[] }) {
        this.name = parameters.name
        this.permission = parameters.permission
    }
}

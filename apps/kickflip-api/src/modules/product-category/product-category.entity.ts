import { randomUUID } from "node:crypto"

import {
    Entity,
    PrimaryKey,
    Property,
    UuidType,
} from "@mikro-orm/core"

@Entity()
export class ProductCategoryEntity {
    @PrimaryKey({
        type: UuidType,
    })
    public id = randomUUID()

    @Property()
    public name: string

    public constructor(parameters: {
        name: string
    }) {
        this.name = parameters.name
    }
}

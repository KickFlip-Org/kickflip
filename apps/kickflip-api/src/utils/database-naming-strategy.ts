import { AbstractNamingStrategy } from "@mikro-orm/core"
import { camelCase, upperFirst } from "lodash"
import { plural, singular } from "pluralize"

export class DatabaseNamingStrategy extends AbstractNamingStrategy {
    public classToTableName(entityName: string): string {
        const entityNameWithoutSuffix = entityName.replace(/Entity$/u, "")
        return this.pascalCase(plural(entityNameWithoutSuffix))
    }

    public joinColumnName(propertyName: string): string {
        return camelCase(propertyName)
    }

    public joinKeyColumnName(
        entityName: string,
        referencedColumnName?: string,
        ignore?: boolean
    ): string {
        const entityNameWithoutSuffix = entityName.replace(/Entity$/u, "")
        const name = camelCase(singular(entityNameWithoutSuffix))

        if (referencedColumnName !== undefined) {
            return `${name}${this.pascalCase(
                this.propertyToColumnName(referencedColumnName)
            )}`
        }

        return name
    }

    public joinTableName(
        sourceEntity: string,
        targetEntity: string,
        propertyName: string
    ): string {
        return `${this.classToTableName(sourceEntity)}${this.pascalCase(
            propertyName
        )}${this.classToTableName(targetEntity)}`
    }

    public propertyToColumnName(propertyName: string): string {
        return camelCase(propertyName)
    }

    public referenceColumnName(): string {
        return "id"
    }

    private pascalCase(value: string): string {
        return upperFirst(camelCase(value))
    }
}

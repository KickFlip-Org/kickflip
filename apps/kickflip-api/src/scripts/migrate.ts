import { MikroORM } from "@mikro-orm/core"
import { Logger } from "@nestjs/common"
import { NestFactory } from "@nestjs/core"

import { AppModule } from "../app.module"

async function main(): Promise<void> {
    const nestInstance = await NestFactory.createApplicationContext(AppModule)
    const logger = await nestInstance.resolve(Logger)
    const orm = await nestInstance.resolve(MikroORM)

    logger.log("Migrations started", "MigrationScript")
    await orm.getSchemaGenerator().updateSchema()
    logger.log("Migrations finished", "MigrationScript")

    await nestInstance.close()
}

void main()

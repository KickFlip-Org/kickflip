import { Module } from "@nestjs/common"
import { ConfigModule } from "./modules/core/config/config.module"
import { DatabaseModule } from "./modules/core/database/database.module"
import { LoggerModule } from "./modules/core/logger/logger.module"
import { UserModule } from "./modules/user/user.module"

@Module({
    imports: [DatabaseModule, ConfigModule, LoggerModule, UserModule],
    controllers: [],
    providers: [],
})
export class AppModule {}

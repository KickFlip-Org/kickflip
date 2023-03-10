import { Module } from "@nestjs/common"
import { AuthModule } from "./modules/auth/auth.module"
import { ConfigModule } from "./modules/core/config/config.module"
import { DatabaseModule } from "./modules/core/database/database.module"
import { LoggerModule } from "./modules/core/logger/logger.module"
import { RoleModule } from "./modules/role/role.module"
import { UserAddressModule } from "./modules/user-address/user-address.module"
import { UserModule } from "./modules/user/user.module"

@Module({
    imports: [
        DatabaseModule,
        ConfigModule,
        LoggerModule,
        UserModule,
        RoleModule,
        UserAddressModule,
        AuthModule,
    ],

    controllers: [],
    providers: [],
})
export class AppModule {}

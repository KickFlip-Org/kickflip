import { Module } from "@nestjs/common"
import { UserModule } from "../user/user.module"
import { UserAddressController } from "./user-address.controller"
import { UserAddressMapper } from "./user-address.mapper"
import { UserAddressService } from "./user-address.service"

@Module({
    imports: [UserModule],
    controllers: [UserAddressController],
    providers: [UserAddressService, UserAddressMapper],
    exports: [UserAddressService, UserAddressMapper],
})
export class UserAddressModule {}

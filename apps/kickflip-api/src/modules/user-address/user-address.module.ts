import { Module } from "@nestjs/common"
import { UserAddressController } from "./user-address.controller"
import { UserAddressMapper } from "./user-address.mapper"
import { UserAddressService } from "./user-address.service"

@Module({
    controllers: [UserAddressController],
    providers: [UserAddressService, UserAddressMapper],
    exports: [UserAddressService, UserAddressMapper]
})
export class UserAddressModule {}

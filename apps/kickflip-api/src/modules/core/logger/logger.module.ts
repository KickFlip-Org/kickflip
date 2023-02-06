import { Logger, Module } from "@nestjs/common"

@Module({
    exports: [Logger],
    providers: [Logger],
})
export class LoggerModule {}

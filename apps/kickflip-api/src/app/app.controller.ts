import { Controller, Get } from "@nestjs/common"

import { AppService } from "./app.service"

@Controller()
export class AppController {
    private readonly appService: AppService

    private constructor(appService: AppService) {
        this.appService = appService
    }

    @Get()
    public getData() {
        return this.appService.getData()
    }
}

import { type INestApplication, Logger, ValidationPipe } from "@nestjs/common"
import { NestFactory } from "@nestjs/core"
import {
    type NestFastifyApplication,
    FastifyAdapter,
} from "@nestjs/platform-fastify"
import { DocumentBuilder, SwaggerModule } from "@nestjs/swagger"

import { AppModule } from "./app.module"
import { ConfigService } from "./modules/core/config/config.service"

function setupSwagger(app: INestApplication): void {
    const config = new DocumentBuilder()
        .setTitle("API")
        .addBearerAuth({
            bearerFormat: "jwt",
            scheme: "bearer",
            type: "http",
        })
        .setVersion("rolling release")
        .build()
    const document = SwaggerModule.createDocument(app, config)

    SwaggerModule.setup("docs", app, document, {})
}

async function main(): Promise<void> {
    const nestInstance = await NestFactory.create<NestFastifyApplication>(
        AppModule,
        new FastifyAdapter({
            bodyLimit: 100_000_000,
        })
    )
    const logger = await nestInstance.resolve(Logger)

    const { server, environment } = await nestInstance.resolve(ConfigService)

    if (environment === "development") {
        setupSwagger(nestInstance)
        logger.log("OpenAPI docs endpoint is on /docs", "OpenApiModule")
    }

    nestInstance.enableCors()
    nestInstance.useGlobalPipes(
        new ValidationPipe({
            transform: true,
        })
    )
    await nestInstance.listen(server.port, "0.0.0.0")
}

void main()

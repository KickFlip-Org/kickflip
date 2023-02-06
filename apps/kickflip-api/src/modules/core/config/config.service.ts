import type { MikroOrmModuleOptions } from "@mikro-orm/nestjs"
import { Injectable } from "@nestjs/common"
import { get } from "env-var"

@Injectable()
export class ConfigService {
    public get environment() {
        return get("ENVIRONMENT")
            .default("production")
            .asEnum(["development", "production"])
    }

    public get server() {
        return {
            port: get("SERVER_PORT").default("8080").asPortNumber(),
        }
    }

    public get logger() {
        return {
            level: get("LOGGER_LEVEL")
                .default("info")
                .asEnum(["info", "fatal", "error", "warn", "debug", "trace"]),
        }
    }

    public get database(): MikroOrmModuleOptions {
        return {
            dbName: get("DB_DATABASE").required().asString(),
            host: get("DB_HOST").required().asString(),
            password: get("DB_PASSWORD").required().asString(),
            type: "postgresql",
            user: get("DB_USER").required().asString(),
        }
    }
}

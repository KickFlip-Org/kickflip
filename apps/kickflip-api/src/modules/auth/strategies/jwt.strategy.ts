import { ExtractJwt, Strategy } from "passport-jwt"
import { PassportStrategy } from "@nestjs/passport"
import { Injectable } from "@nestjs/common"
import { jwtConstants } from "../constant"
import type { Payload } from "../../../dto/payload"

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
    public constructor() {
        super({
            jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
            ignoreExpiration: false,
            secretOrKey: jwtConstants.secret,
        })
    }

    public validate(payload: Payload) {
        return payload
    }
}

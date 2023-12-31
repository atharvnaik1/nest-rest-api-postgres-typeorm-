import { Injectable } from "@nestjs/common";
import { PassportStrategy } from "@nestjs/passport";
import { ExtractJwt, Strategy } from "passport-jwt";

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
  constructor() {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      ignoreExpiration: false,
      secretOrKey: 
      'JKCHASJCHASJCHASCJKHSCJKASCJSACAKNjNjkhjhjhsc654c65a4c5a4c5c2121f2h2gfh2',  // put password for authentication//
      
    });
  }

  async validate(payload: any) {
    return { userId: payload.sub, username: payload.username };
  }
}

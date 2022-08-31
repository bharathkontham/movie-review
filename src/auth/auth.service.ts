import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
  constructor(private jwt: JwtService) {}

  login(payload: any): any {
    return { access_token: this.jwt.sign(payload) };
  }

  verify(jwttoken: string): any {
    const result = this.jwt.verifyAsync(jwttoken);
    return result;
  }
}

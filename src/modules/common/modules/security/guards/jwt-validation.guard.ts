import { CanActivate, ExecutionContext, Injectable } from '@nestjs/common';
import { Observable } from 'rxjs';
import * as jwksClient from 'jwks-rsa';
import { JwtHeader, SigningKeyCallback, verify, VerifyErrors, VerifyOptions } from 'jsonwebtoken';

@Injectable()
export class JwtValidationGuard implements CanActivate {
  canActivate(
    context: ExecutionContext,
  ): boolean | Promise<boolean> | Observable<boolean> {
    try {
      const token = context
        .switchToHttp()
        .getRequest()
        .get('authorization')
        .replace('Bearer ', '');
      console.log('token', token)
      return this.verifyToken(token);
    } catch (err) {
      console.log('err', err)
      return false
    }
  }

  private async verifyToken(token: string): Promise<boolean> {
    const client = jwksClient({
      jwksUri:
        'https://dev-0gvplcuj1gtcwray.us.auth0.com/.well-known/jwks.json',
    });

    const options: VerifyOptions = { algorithms: ['RS256'] };

    const getKey = async (header: JwtHeader, callback: SigningKeyCallback) => {
      client.getSigningKey(header.kid, (err, key) => {
        const signingKey = key?.getPublicKey()
        callback(err, signingKey);
      });
    };

    return new Promise((resolve) => {
      verify(token, getKey, options, (err: VerifyErrors, decoded: any) => {

        console.log('decoded', decoded);
        console.log('err', err);

        if (err) resolve(false);
        resolve(true);
      });
    });
  }
}

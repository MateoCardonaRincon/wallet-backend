import { Injectable, NestMiddleware } from '@nestjs/common';
import { Request } from 'express';
import * as jwksClient from 'jwks-rsa';
import { JwtHeader, SigningKeyCallback, verify, VerifyErrors, VerifyOptions } from 'jsonwebtoken';

@Injectable()
export class OpenJwtMiddleware implements NestMiddleware {
  async use(req: Request, res: any, next: () => void) {

    const header = req.headers

    const rawAuthorization = header.authorization

    const body = req.body


    if (rawAuthorization) {
      const token = rawAuthorization.replace('Bearer ', '')
      const tokenData = await this.verifyToken(token)
      req.body = { ...body, ...tokenData }
    }

    next();
  }

  private async verifyToken(token: string): Promise<any> {
    const client = jwksClient({
      jwksUri:
        'https://dev-r2cf5pxcf4v0ri5t.us.auth0.com/.well-known/jwks.json',
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

        // console.log('decoded', decoded);
        // console.log('err', err);

        if (err) {
          console.log('TOKEN ERROR on middleware')
          resolve({})
        };

        const tokenData = {
          fullName: decoded.name,
          email: decoded.email,
          photo: decoded.picture,
          // phone: '1234567890'
        }
        resolve(tokenData);
      });
    });
  }
}

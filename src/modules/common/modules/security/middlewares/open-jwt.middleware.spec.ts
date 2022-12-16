import { OpenJwtMiddleware } from './open-jwt.middleware';

describe('OpenJwtMiddleware', () => {
  it('should be defined', () => {
    expect(new OpenJwtMiddleware()).toBeDefined();
  });
});

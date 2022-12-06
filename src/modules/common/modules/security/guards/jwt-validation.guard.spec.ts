import { JwtValidationGuard } from './jwt-validation.guard';

describe('JwtValidationGuard', () => {
  it('should be defined', () => {
    expect(new JwtValidationGuard()).toBeDefined();
  });
});

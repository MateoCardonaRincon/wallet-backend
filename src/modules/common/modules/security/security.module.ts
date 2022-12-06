import { Module } from '@nestjs/common';
import { APP_GUARD } from '@nestjs/core';
import { SecurityController } from './controllers/security.controller';
import { JwtValidationGuard } from './guards/jwt-validation.guard';
import { SecurityService } from './services/security.service';

@Module({
  controllers: [SecurityController],
  providers: [
    SecurityService]
})
export class SecurityModule { }

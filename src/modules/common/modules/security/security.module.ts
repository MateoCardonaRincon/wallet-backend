import { MiddlewareConsumer, Module, NestModule, RequestMethod } from '@nestjs/common';
import { APP_GUARD } from '@nestjs/core';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ClientEntity } from 'src/common/databases/postgresql/entities/client.entity';
import { ClientService } from 'src/modules/client/services/client.service';
import { SecurityController } from './controllers/security.controller';
import { JwtValidationGuard } from './guards/jwt-validation.guard';
import { OpenJwtMiddleware } from './middlewares/open-jwt.middleware';
import { SecurityService } from './services/security.service';

@Module({
  imports: [TypeOrmModule.forFeature([ClientEntity])],
  controllers: [SecurityController],
  providers: [
    ClientService,
    SecurityService,
    {
      provide: APP_GUARD,
      useClass: JwtValidationGuard
    }]
})
export class SecurityModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer
      .apply(OpenJwtMiddleware)
      .forRoutes(SecurityController);
  }
}

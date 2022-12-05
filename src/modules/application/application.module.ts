import { AppEntity } from './../../common/databases/postgresql/entities/app.entity';
import { Module } from '@nestjs/common';
import { ApplicationController } from './controllers/application.controller';
import { ApplicationService } from './services/application.service';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([AppEntity])],
  controllers: [ApplicationController],
  providers: [ApplicationService]
})
export class ApplicationModule { }

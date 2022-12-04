import { Module } from '@nestjs/common';
import { MainModule } from './modules/main/main.module';
import { PostgresqlConfig } from './common/databases/postgresql/configs/postgresql.config';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
@Module({
  imports: [
    MainModule,
    ConfigModule.forRoot({ isGlobal: true }),
    TypeOrmModule.forRootAsync({ useClass: PostgresqlConfig })
  ]
})
export class AppModule { }

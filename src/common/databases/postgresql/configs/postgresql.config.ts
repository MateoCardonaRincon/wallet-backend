import { Inject, Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { TypeOrmModuleOptions, TypeOrmOptionsFactory } from '@nestjs/typeorm';
import { AppEntity } from '../entities/app.entity';
import { AccountEntity } from '../entities/account.entity';
import { ClientEntity } from '../entities/client.entity';
import { MovementEntity } from '../entities/movement.entity';

@Injectable()
export class PostgresqlConfig implements TypeOrmOptionsFactory {
    @Inject(ConfigService)
    private readonly configService: ConfigService;

    public createTypeOrmOptions(): TypeOrmModuleOptions {

        const postgresqlTypeOrmOptions: TypeOrmModuleOptions = {
            type: 'postgres',
            name: '',
            host: this.configService.get<string>('DB_HOST'),
            port: this.configService.get<number>('DB_PORT'),
            username: this.configService.get<string>('DB_USER'),
            password: this.configService.get<string>('DB_PASSWORD'),
            database: this.configService.get<string>('DB_NAME'),
            entities: [AccountEntity, AppEntity, ClientEntity, MovementEntity],
            synchronize: false,
        }

        return postgresqlTypeOrmOptions
    }
}

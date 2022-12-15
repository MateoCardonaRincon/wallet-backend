import { HttpStatus, Module, ValidationPipe } from '@nestjs/common';
import { APP_PIPE } from '@nestjs/core';
import { AccountModule } from '../account/account.module';
import { ApplicationModule } from '../application/application.module';
import { ClientModule } from '../client/client.module';
import { CommonModule } from '../common/common.module';
import { MovementModule } from '../movement/movement.module';

@Module({
    imports: [CommonModule, AccountModule, ApplicationModule, ClientModule, MovementModule],
    exports: [CommonModule, AccountModule, ApplicationModule, ClientModule, MovementModule],
    providers: [{
        provide: APP_PIPE,

        useFactory: () => (
            new ValidationPipe({
                transform: true,
                whitelist: true,
                forbidNonWhitelisted: true,
                errorHttpStatusCode: HttpStatus.NOT_ACCEPTABLE,
            })),
    },]
})
export class MainModule { }

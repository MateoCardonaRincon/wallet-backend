import { Module } from '@nestjs/common';
import { AccountModule } from '../account/account.module';
import { ApplicationModule } from '../application/application.module';
import { ClientModule } from '../client/client.module';
import { CommonModule } from '../common/common.module';
import { MovementModule } from '../movement/movement.module';

@Module({
    imports: [CommonModule, AccountModule, ApplicationModule, ClientModule, MovementModule],
    exports: [CommonModule, AccountModule, ApplicationModule, ClientModule, MovementModule]
})
export class MainModule { }

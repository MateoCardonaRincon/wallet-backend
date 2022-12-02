import { Module } from '@nestjs/common';
import { SecurityModule } from './modules/security/security.module';

@Module({
    imports: [SecurityModule],
    exports: [SecurityModule]
})
export class CommonModule { }

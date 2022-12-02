import { Module } from '@nestjs/common';
import { MainModule } from './modules/main/main.module';
@Module({
  imports: [MainModule,],
  controllers: [],
  providers: [],
})
export class AppModule { }

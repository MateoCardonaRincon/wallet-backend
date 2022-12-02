import { Module } from '@nestjs/common';
import { MovementService } from './services/movement.service';
import { MovementController } from './controllers/movement.controller';

@Module({
  providers: [MovementService],
  controllers: [MovementController]
})
export class MovementModule {}

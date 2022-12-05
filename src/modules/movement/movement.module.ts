import { Module } from '@nestjs/common';
import { MovementService } from './services/movement.service';
import { MovementController } from './controllers/movement.controller';
import { MovementEntity } from 'src/common/databases/postgresql/entities/movement.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([MovementEntity])],
  providers: [MovementService],
  controllers: [MovementController]
})
export class MovementModule { }

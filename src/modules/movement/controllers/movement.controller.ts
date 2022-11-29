import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { MovementService } from '../services/movement.service';
import { CreateMovementDto } from '../storage/dto/create-movement.dto';
import { MovementDto } from '../storage/dto/movement.dto';

@Controller('movement')
export class MovementController {

    @Get()
    getAllMovements(): MovementDto[] {
        throw new Error('Method to be implemented')
    }

    @Post()
    createMovement(@Body() newMovement: CreateMovementDto): MovementDto {
        throw new Error('Method to be implemented')
    }
}

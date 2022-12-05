import { Body, Controller, Get, HttpException, HttpStatus, Param, Post } from '@nestjs/common';
import { MovementService } from '../services/movement.service';
import { CreateMovementDto } from '../storage/dto/validations/create-movement.dto';
import { MovementDto } from '../storage/dto/validations/movement.dto';

@Controller('movement')
export class MovementController {

    constructor(private readonly movementService: MovementService) { }

    @Get()
    getAllMovements(): MovementDto[] {
        return this.movementService.getAllMovements();
    }

    @Post()
    createMovement(@Body() newMovement: CreateMovementDto): MovementDto {
        return this.movementService.createMovement(newMovement  );
    }
}

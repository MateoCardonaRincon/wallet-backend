import { Body, Controller, Get, HttpException, HttpStatus, Param, Post } from '@nestjs/common';
import { CreateMovementDto } from '../storage/dto/validations/create-movement.dto';
import { MovementDto } from '../storage/dto/validations/movement.dto';

@Controller('movement')
export class MovementController {

    @Get()
    getAllMovements(): MovementDto[] | HttpException {
        throw new HttpException('Method to be implemented', HttpStatus.NOT_IMPLEMENTED)
    }

    @Post()
    createMovement(@Body() newMovement: CreateMovementDto): MovementDto {
        throw new HttpException('Method to be implemented', HttpStatus.NOT_IMPLEMENTED)
    }
}

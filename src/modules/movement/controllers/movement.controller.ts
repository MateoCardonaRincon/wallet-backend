import { Body, Controller, Get, HttpStatus, Post, UseInterceptors, ValidationPipe } from '@nestjs/common';
import { ReturnMovementTypeInterceptor } from '../interceptors/return-movement-type.interceptor';
import { MovementService } from '../services/movement.service';
import { CreateMovementDto } from '../storage/dto/validations/create-movement.dto';
import { MovementDto } from '../storage/dto/validations/movement.dto';

@Controller('movement')
export class MovementController {

    constructor(private readonly movementService: MovementService) { }

    @Get()
    @UseInterceptors(ReturnMovementTypeInterceptor)
    getAllMovements(): Promise<MovementDto[]> {
        return this.movementService.getAllMovements();
    }

    @Post()
    createMovement(@Body(
        new ValidationPipe({
            transform: true,
            whitelist: true,
            forbidNonWhitelisted: true,
            errorHttpStatusCode: HttpStatus.NOT_ACCEPTABLE,
        }),) newMovement: CreateMovementDto): Promise<MovementDto> {
        return this.movementService.createMovement(newMovement);
    }
}

import { Body, Controller, Get, HttpStatus, Param, ParseUUIDPipe, Post, UseGuards, UseInterceptors, ValidationPipe } from '@nestjs/common';
import { JwtValidationGuard } from 'src/modules/common/modules/security/guards/jwt-validation.guard';
import { ReturnMovementTypeInterceptor } from '../interceptors/return-movement-type.interceptor';
import { MovementService } from '../services/movement.service';
import { CreateMovementDto } from '../storage/dto/validations/create-movement.dto';
import { MovementDto } from '../storage/dto/validations/movement.dto';

@Controller('movement')
export class MovementController {

    constructor(private readonly movementService: MovementService) { }

    @Get(':uuid')
    @UseInterceptors(ReturnMovementTypeInterceptor)
    @UseGuards(JwtValidationGuard)
    async getAllMovementsByRelatedAccountId(@Param('uuid', ParseUUIDPipe) uuid: string): Promise<MovementDto[]> {
        return await this.movementService.getAllMovementsByRelatedAccountId(uuid);
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

import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { CreateMovementDto } from '../storage/dto/validations/create-movement.dto';
import { MovementDto } from '../storage/dto/validations/movement.dto';

@Injectable()
export class MovementService {

    getAllMovements(): MovementDto[] {
        throw new HttpException('Method to be implemented', HttpStatus.NOT_IMPLEMENTED)
    }

    createMovement(newMovement: CreateMovementDto): MovementDto {
        throw new HttpException('Method to be implemented', HttpStatus.NOT_IMPLEMENTED)
    }
}

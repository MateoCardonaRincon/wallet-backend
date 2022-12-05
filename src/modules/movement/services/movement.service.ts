import { Injectable } from '@nestjs/common';
import { CreateMovementDto } from '../storage/dto/validations/create-movement.dto';
import { MovementDto } from '../storage/dto/validations/movement.dto';

@Injectable()
export class MovementService {

    getAllMovements(): MovementDto[] {
        throw new Error('Method to be implemented')
    }

    createMovement(newMovement: CreateMovementDto): MovementDto {
        throw new Error('Method to be implemented')
    }
}

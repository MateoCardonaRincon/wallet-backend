import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { CreateMovementDto } from '../storage/dto/validations/create-movement.dto';
import { MovementDto } from '../storage/dto/validations/movement.dto';
import { MovementEntity } from 'src/common/databases/postgresql/entities/movement.entity';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class MovementService {
    constructor(
        @InjectRepository(MovementEntity)
        private readonly movementRepository: Repository<MovementEntity>
    ) { }

    getAllMovements(): Promise<MovementDto[]> {
        return this.movementRepository.find();
    }

    async createMovement(newMovement: CreateMovementDto): Promise<MovementDto> {
        try {
            const createdMovement = this.movementRepository.create(newMovement)

            return this.movementRepository.save(createdMovement)
        } catch (error) {
            console.log({ errorCode: error.code })
            throw new HttpException('Something went wrong creating a new movement', HttpStatus.BAD_REQUEST)
        }
    }
}

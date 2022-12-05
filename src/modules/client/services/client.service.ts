import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { ClientEntity } from 'src/common/databases/postgresql/entities/client.entity';
import { Repository } from 'typeorm';
import { ClientDto } from '../storage/dto/validations/client.dto';
import { CreateClientDto } from '../storage/dto/validations/create-client.dto';

@Injectable()
export class ClientService {
    constructor(
        @InjectRepository(ClientEntity)
        private readonly clientRepository: Repository<ClientDto>) { }

    async getClientById(uuid: string): Promise<ClientDto> {
        try {
            return await this.clientRepository.findOneByOrFail({ id: uuid })
        } catch (error) {
            throw new HttpException(`Client with id : ${uuid} not found`, HttpStatus.NOT_FOUND)
        }
    }

    async createClient(newClient: CreateClientDto): Promise<ClientDto> {

        const createdClient = this.clientRepository.create(newClient)

        const client = await this.clientRepository.save(createdClient)

        return client
    }

    deleteClientById(uuid: string): ClientDto {
        throw new HttpException('Method to be implemented', HttpStatus.NOT_IMPLEMENTED)
    }
}

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
        private readonly clientRepository: Repository<ClientEntity>) { }

    async getClientById(uuid: string): Promise<ClientDto> {
        try {
            return await this.clientRepository.findOneByOrFail({ id: uuid })
        } catch (error) {
            throw new HttpException(`Client with id : ${uuid} not found`, HttpStatus.NOT_FOUND)
        }
    }

    async createClient(newClient: CreateClientDto): Promise<ClientDto> {
        try {
            const createdClient = this.clientRepository.create(newClient)

            return await this.clientRepository.save(createdClient)
        } catch (error) {
            console.log('error keys: ', Object.keys(error))
            console.log('error.code', error.code)
            throw new HttpException('Something went wrong creating a new client', HttpStatus.BAD_REQUEST)
        }
    }

    async deleteClientById(uuid: string): Promise<ClientDto> {
        try {
            const clientToDelete = await this.clientRepository.findOneByOrFail({ id: uuid })

            clientToDelete.deletedAt = new Date();

            const deletedClient = await this.clientRepository.save(clientToDelete)

            return deletedClient
        } catch (error) {
            throw new HttpException('Something went wrong creating a new client', HttpStatus.BAD_REQUEST)
        }
    }
}

import { Injectable } from '@nestjs/common';
import { ClientDto } from '../storage/dto/validations/client.dto';
import { CreateClientDto } from '../storage/dto/validations/create-client.dto';

@Injectable()
export class ClientService {

    getClientById(uuid: string): ClientDto {
        throw new Error('Method to be implemented')
    }

    createClient(newClient: CreateClientDto): ClientDto {
        throw new Error('Method to be implemented')
    }

    deleteClientById(uuid: string): ClientDto {
        throw new Error('Method to be implemented')
    }
}

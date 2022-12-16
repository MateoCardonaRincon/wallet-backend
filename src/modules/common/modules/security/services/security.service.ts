import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { ClientEntity } from 'src/common/databases/postgresql/entities/client.entity';
import { ClientService } from 'src/modules/client/services/client.service';
import { ClientDto } from 'src/modules/client/storage/dto/validations/client.dto';
import { CreateClientDto } from 'src/modules/client/storage/dto/validations/create-client.dto';
import { Repository } from 'typeorm';
import { TokenDto } from '../storage/dto/validations/token.dto';

@Injectable()
export class SecurityService {
    constructor(
        @InjectRepository(ClientEntity)
        private readonly clientRepository: Repository<ClientEntity>,
        private readonly clientService: ClientService
    ) { }

    signUp(newClient: CreateClientDto): ClientDto {
        throw new Error('Method to be implemented')
    }

    login(token: TokenDto): ClientDto {
        throw new Error('Method to be implemented')
    }

    async authenticateClient(client: CreateClientDto): Promise<ClientDto> {
        console.log('client', client)

        const authClient = await this.getClientByEmail(client.email)

        if (authClient) {
            return authClient
        }

        return await this.clientService.createClient(client)
    }

    async getClientByEmail(email: string): Promise<ClientDto> {
        try {
            console.log('client')
            return await this.clientRepository.findOneByOrFail({ email })
        } catch (error) {
            throw new HttpException(`Client with email : ${email} not found`, HttpStatus.NOT_FOUND)
        }
    }
}

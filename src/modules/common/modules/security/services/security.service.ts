import { Injectable } from '@nestjs/common';
import { ClientDto } from 'src/modules/client/storage/dto/validations/client.dto';
import { CreateClientDto } from 'src/modules/client/storage/dto/validations/create-client.dto';
import { TokenDto } from '../storage/dto/validations/token.dto';

@Injectable()
export class SecurityService {

    signUp(newClient: CreateClientDto): ClientDto {
        throw new Error('Method to be implemented')
    }

    login(token: TokenDto): ClientDto {
        throw new Error('Method to be implemented')
    }

    logout(token: TokenDto): TokenDto {
        throw new Error('Method to be implemented')
    }
}

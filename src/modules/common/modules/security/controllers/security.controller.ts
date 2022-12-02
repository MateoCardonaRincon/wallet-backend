import { Body, Controller, Get, Post } from '@nestjs/common';
import { ClientDto } from 'src/modules/client/storage/dto/client.dto';
import { CreateClientDto } from 'src/modules/client/storage/dto/create-client.dto';
import { TokenDto } from '../storage/dto/token.dto';

@Controller('security')
export class SecurityController {

    @Post()
    signUp(@Body() newClient: CreateClientDto): ClientDto {
        throw new Error('Method to be implemented')
    }

    @Post()
    login(@Body() token: TokenDto): ClientDto {
        throw new Error('Method to be implemented')
    }

    @Post()
    logout(@Body() token: TokenDto): TokenDto {
        throw new Error('Method to be implemented')
    }

}

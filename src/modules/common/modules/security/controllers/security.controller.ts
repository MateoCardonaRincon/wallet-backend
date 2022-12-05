import { Body, Controller, Get, HttpException, HttpStatus, Post } from '@nestjs/common';
import { ClientDto } from 'src/modules/client/storage/dto/validations/client.dto';
import { CreateClientDto } from 'src/modules/client/storage/dto/validations/create-client.dto';
import { TokenDto } from '../storage/dto/validations/token.dto';

@Controller('security')
export class SecurityController {

    @Post()
    signUp(@Body() newClient: CreateClientDto): ClientDto {
        throw new HttpException('Method to be implemented', HttpStatus.NOT_IMPLEMENTED)
    }

    @Post()
    login(@Body() token: TokenDto): ClientDto {
        throw new HttpException('Method to be implemented', HttpStatus.NOT_IMPLEMENTED)
    }

    @Post()
    logout(@Body() token: TokenDto): TokenDto {
        throw new HttpException('Method to be implemented', HttpStatus.NOT_IMPLEMENTED)
    }

}

import { Body, Controller, Delete, Get, HttpException, HttpStatus, Param, Post } from '@nestjs/common';
import { ClientDto } from '../storage/dto/validations/client.dto';
import { CreateClientDto } from '../storage/dto/validations/create-client.dto';

@Controller('client')
export class ClientController {

    @Get(':uuid')
    getClientById(@Param('uuid') uuid: string): ClientDto {
        throw new HttpException('Method to be implemented', HttpStatus.NOT_IMPLEMENTED)
    }

    @Post()
    createClient(@Body() newClient: CreateClientDto): ClientDto {
        throw new HttpException('Method to be implemented', HttpStatus.NOT_IMPLEMENTED)
    }

    @Delete(':uuid')
    deleteClientById(@Param('uuid') uuid: string): ClientDto {
        throw new HttpException('Method to be implemented', HttpStatus.NOT_IMPLEMENTED)
    }
}

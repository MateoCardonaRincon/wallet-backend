import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common';
import { ClientDto } from '../storage/dto/client.dto';
import { CreateClientDto } from '../storage/dto/create-client.dto';

@Controller('client')
export class ClientController {

    @Get(':uuid')
    getClientById(@Param('uuid') uuid: string): ClientDto {
        throw new Error('Method to be implemented')
    }

    @Post()
    createClient(@Body() newClient: CreateClientDto): ClientDto {
        throw new Error('Method to be implemented')
    }

    @Delete(':uuid')
    deleteClientById(@Param('uuid') uuid: string): ClientDto {
        throw new Error('Method to be implemented')
    }
}

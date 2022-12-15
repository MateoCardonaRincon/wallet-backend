import { Body, Controller, Delete, Get, HttpStatus, Param, ParseUUIDPipe, Post, ValidationPipe } from '@nestjs/common';
import { ClientService } from '../services/client.service';
import { ClientDto } from '../storage/dto/validations/client.dto';
import { CreateClientDto } from '../storage/dto/validations/create-client.dto';

@Controller('client')
export class ClientController {

    constructor(private readonly clientService: ClientService) { }

    @Get(':uuid')
    getClientById(@Param('uuid', ParseUUIDPipe) uuid: string): Promise<ClientDto> {
        return this.clientService.getClientById(uuid)
    }

    @Post()
    createClient(@Body() newClient: CreateClientDto): Promise<ClientDto> {
        return this.clientService.createClient(newClient)
    }

    @Delete(':uuid')
    deleteClientById(@Param('uuid', ParseUUIDPipe) uuid: string): Promise<ClientDto> {
        return this.clientService.deleteClientById(uuid)
    }
}

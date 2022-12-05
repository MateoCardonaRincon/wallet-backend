import { Body, Controller, Delete, Get, HttpStatus, Param, Post, ValidationPipe } from '@nestjs/common';
import { ClientEntity } from 'src/common/databases/postgresql/entities/client.entity';
import { ClientService } from '../services/client.service';
import { ClientDto } from '../storage/dto/validations/client.dto';
import { CreateClientDto } from '../storage/dto/validations/create-client.dto';

@Controller('client')
export class ClientController {

    constructor(private readonly clientService: ClientService) { }

    @Get(':uuid')
    getClientById(@Param('uuid') uuid: string): Promise<ClientDto> {
        return this.clientService.getClientById(uuid)
    }

    @Post()
    createClient(@Body(
        new ValidationPipe({
            transform: true,
            whitelist: true,
            forbidNonWhitelisted: true,
            errorHttpStatusCode: HttpStatus.NOT_ACCEPTABLE,
        }),) newClient: CreateClientDto): Promise<ClientDto> {
        return this.clientService.createClient(newClient)
    }

    @Delete(':uuid')
    deleteClientById(@Param('uuid') uuid: string): ClientDto {
        return this.clientService.deleteClientById(uuid)
    }
}

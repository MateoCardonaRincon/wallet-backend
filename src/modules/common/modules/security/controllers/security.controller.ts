import { Body, Controller, Get, HttpException, HttpStatus, Param, Post, ValidationPipe } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { ClientDto } from 'src/modules/client/storage/dto/validations/client.dto';
import { CreateClientDto } from 'src/modules/client/storage/dto/validations/create-client.dto';
import { TokenDto } from '../storage/dto/validations/token.dto';
import { ClientEntity } from 'src/common/databases/postgresql/entities/client.entity';
import { Repository } from 'typeorm';
import { SecurityService } from '../services/security.service';
import { UseGuards } from '@nestjs/common/decorators/core/use-guards.decorator';
import { JwtValidationGuard } from '../guards/jwt-validation.guard';

@Controller('security')
export class SecurityController {


    constructor(private readonly securityService: SecurityService) { }

    // @Post()
    // signUp(@Body(
    //     new ValidationPipe({
    //         transform: true,
    //         whitelist: true,
    //         forbidNonWhitelisted: true,
    //         errorHttpStatusCode: HttpStatus.NOT_ACCEPTABLE,
    //     }),) newClient: CreateClientDto): ClientDto {
    //     throw new HttpException('Method to be implemented', HttpStatus.NOT_IMPLEMENTED)
    // }

    // @Post()
    // login(@Body(
    //     new ValidationPipe({
    //         transform: true,
    //         whitelist: true,
    //         forbidNonWhitelisted: true,
    //         errorHttpStatusCode: HttpStatus.NOT_ACCEPTABLE,
    //     }),) token: TokenDto): ClientDto {
    //     throw new HttpException('Method to be implemented', HttpStatus.NOT_IMPLEMENTED)
    // }

    @Post()
    @UseGuards(JwtValidationGuard)
    async authenticateClient(@Body(
        new ValidationPipe({
            transform: true,
            whitelist: true,
            forbidNonWhitelisted: true,
            errorHttpStatusCode: HttpStatus.NOT_ACCEPTABLE,
        }),) client: CreateClientDto): Promise<ClientDto> {

        return await this.securityService.authenticateClient(client)
    }

    @Get(':email')
    getClientByEmail(@Param('email') email: string): Promise<ClientDto> {
        return this.securityService.getClientByEmail(email)
    }
}

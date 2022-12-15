import { Body, Controller, HttpException, HttpStatus, Post, ValidationPipe } from '@nestjs/common';
import { ClientDto } from 'src/modules/client/storage/dto/validations/client.dto';
import { CreateClientDto } from 'src/modules/client/storage/dto/validations/create-client.dto';
import { TokenDto } from '../storage/dto/validations/token.dto';

@Controller('security')
export class SecurityController {
    @Post()
    signUp(@Body(
        new ValidationPipe({
            transform: true,
            whitelist: true,
            forbidNonWhitelisted: true,
            errorHttpStatusCode: HttpStatus.NOT_ACCEPTABLE,
        }),) newClient: CreateClientDto): ClientDto {
        throw new HttpException('Method to be implemented', HttpStatus.NOT_IMPLEMENTED)
    }

    @Post()
    login(@Body(
        new ValidationPipe({
            transform: true,
            whitelist: true,
            forbidNonWhitelisted: true,
            errorHttpStatusCode: HttpStatus.NOT_ACCEPTABLE,
        }),) token: TokenDto): ClientDto {
        throw new HttpException('Method to be implemented', HttpStatus.NOT_IMPLEMENTED)
    }

    @Post()
    logout(@Body(
        new ValidationPipe({
            transform: true,
            whitelist: true,
            forbidNonWhitelisted: true,
            errorHttpStatusCode: HttpStatus.NOT_ACCEPTABLE,
        }),) token: TokenDto): TokenDto {
        throw new HttpException('Method to be implemented', HttpStatus.NOT_IMPLEMENTED)
    }
}

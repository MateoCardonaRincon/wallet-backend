import { Body, Controller, Delete, Get, HttpException, HttpStatus, Param, Post, Put } from '@nestjs/common';
import { AccountDto } from '../storage/dto/account.dto';
import { CreateAccountDto } from '../storage/dto/create-account.dto';
import { UpdateAccountDto } from '../storage/dto/update-account.dto';

@Controller('account')
export class AccountController {

    @Get(':uuid')
    getAccount(@Param('uuid') uuid: string): AccountDto {
        throw new HttpException('Method to be implemented', HttpStatus.NOT_IMPLEMENTED)
    }

    @Post()
    createAccount(@Body() newAccount: CreateAccountDto): AccountDto {
        throw new HttpException('Method to be implemented', HttpStatus.NOT_IMPLEMENTED)
    }

    @Put(':uuid')
    updateAccount(@Param('uuid') uuid: string, @Body() account: UpdateAccountDto): AccountDto {
        throw new HttpException('Method to be implemented', HttpStatus.NOT_IMPLEMENTED)
    }

    @Delete(':uuid')
    deleteAccount(@Param('uuid') uuid: string): AccountDto {
        throw new HttpException('Method to be implemented', HttpStatus.NOT_IMPLEMENTED)
    }
}

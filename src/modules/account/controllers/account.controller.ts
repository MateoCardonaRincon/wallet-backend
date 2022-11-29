import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { AccountDto } from '../storage/dto/account.dto';
import { CreateAccountDto } from '../storage/dto/create-account.dto';
import { UpdateAccountDto } from '../storage/dto/update-account.dto';

@Controller('account')
export class AccountController {

    @Get(':uuid')
    getAccount(@Param('uuid') uuid: string): AccountDto {
        throw new Error('Method to be implemented')
    }

    @Post()
    createAccount(@Body() newAccount: CreateAccountDto): AccountDto {
        throw new Error('Method to be implemented')
    }

    @Put(':uuid')
    updateAccount(@Param('uuid') uuid: string, @Body() account: UpdateAccountDto): AccountDto {
        throw new Error('Method to be implemented')
    }

    @Delete(':uuid')
    deleteAccount(@Param('uuid') uuid: string): AccountDto {
        throw new Error('Method to be implemented')
    }
}

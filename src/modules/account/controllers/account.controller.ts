import { Body, Controller, Delete, Get, HttpException, HttpStatus, Param, ParseUUIDPipe, Post, Put, ValidationPipe } from '@nestjs/common';
import { AccountDto } from '../storage/dto/validations/account.dto';
import { CreateAccountDto } from '../storage/dto/validations/create-account.dto';
import { UpdateAccountDto } from '../storage/dto/validations/update-account.dto';
import { AccountService } from '../services/account.service';

@Controller('account')
export class AccountController {

    constructor(private readonly accountService: AccountService) { }

    @Get(':uuid')
    async getAccountByClientId(@Param('uuid', ParseUUIDPipe) uuid: string): Promise<AccountDto> {
        return await this.accountService.getAccountByClientId(uuid)
    }

    @Post()
    async createAccount(@Body() newAccount: CreateAccountDto): Promise<AccountDto> {
        return await this.accountService.createAccount(newAccount)
    }

    @Put(':uuid')
    updateAccount(
        @Param('uuid', ParseUUIDPipe) uuid: string,
        @Body() account: UpdateAccountDto): AccountDto {
        return this.accountService.updateAccount(uuid, account)
    }

    @Delete(':uuid')
    deleteAccount(@Param('uuid', ParseUUIDPipe) uuid: string): AccountDto {
        return this.accountService.deleteAccount(uuid)
    }
}

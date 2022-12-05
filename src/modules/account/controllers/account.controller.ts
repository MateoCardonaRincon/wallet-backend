import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { AccountDto } from '../storage/dto/validations/account.dto';
import { CreateAccountDto } from '../storage/dto/validations/create-account.dto';
import { UpdateAccountDto } from '../storage/dto/validations/update-account.dto';
import { AccountService } from '../services/account.service';

@Controller('account')
export class AccountController {

    constructor(private readonly accountService: AccountService) { }

    @Get(':uuid')
    getAccount(@Param('uuid') uuid: string): AccountDto {
        return this.accountService.getAccount(uuid)
    }

    @Post()
    createAccount(@Body() newAccount: CreateAccountDto): AccountDto {
        return this.accountService.createAccount(newAccount)
    }

    @Put(':uuid')
    updateAccount(@Param('uuid') uuid: string, @Body() account: UpdateAccountDto): AccountDto {
        return this.accountService.updateAccount(uuid, account)
    }

    @Delete(':uuid')
    deleteAccount(@Param('uuid') uuid: string): AccountDto {
        return this.accountService.deleteAccount(uuid)
    }
}

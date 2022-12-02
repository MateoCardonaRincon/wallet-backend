import { Injectable } from '@nestjs/common';
import { AccountDto } from '../storage/dto/account.dto';
import { CreateAccountDto } from '../storage/dto/create-account.dto';
import { UpdateAccountDto } from '../storage/dto/update-account.dto';

@Injectable()
export class AccountService {
    getAccount(uuid: string): AccountDto {
        throw new Error('Method to be implemented')
    }

    createAccount(newAccount: CreateAccountDto): AccountDto {
        throw new Error('Method to be implemented')
    }

    updateAccount(uuid: string, account: UpdateAccountDto): AccountDto {
        throw new Error('Method to be implemented')
    }

    deleteAccount(uuid: string): AccountDto {
        throw new Error('Method to be implemented')
    }
}

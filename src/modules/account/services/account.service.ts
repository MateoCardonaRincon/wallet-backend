import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { AccountDto } from '../storage/dto/validations/account.dto';
import { CreateAccountDto } from '../storage/dto/validations/create-account.dto';
import { UpdateAccountDto } from '../storage/dto/validations/update-account.dto';

@Injectable()
export class AccountService {
    getAccount(uuid: string): AccountDto {
        throw new HttpException('Method to be implemented', HttpStatus.NOT_IMPLEMENTED)
    }

    createAccount(newAccount: CreateAccountDto): AccountDto {
        throw new HttpException('Method to be implemented', HttpStatus.NOT_IMPLEMENTED)
    }

    updateAccount(uuid: string, account: UpdateAccountDto): AccountDto {
        throw new HttpException('Method to be implemented', HttpStatus.NOT_IMPLEMENTED)
    }

    deleteAccount(uuid: string): AccountDto {
        throw new HttpException('Method to be implemented', HttpStatus.NOT_IMPLEMENTED)
    }
}

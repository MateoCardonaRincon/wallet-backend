import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { AccountEntity } from 'src/common/databases/postgresql/entities/account.entity';
import { Repository } from 'typeorm';
import { AccountDto } from '../storage/dto/validations/account.dto';
import { CreateAccountDto } from '../storage/dto/validations/create-account.dto';
import { UpdateAccountDto } from '../storage/dto/validations/update-account.dto';

@Injectable()
export class AccountService {
    constructor(
        @InjectRepository(AccountEntity)
        private readonly accountRepository: Repository<AccountEntity>
    ) { }

    async getAccountByClientId(uuid: string): Promise<AccountDto> {
        try {
            return await this.accountRepository.findOneByOrFail({ clientId: uuid });
        } catch (error) {
            throw new HttpException(`There's not an account associated to a client with id : ${uuid} not found`, HttpStatus.NOT_FOUND)
        }
    }

    async createAccount(newAccount: CreateAccountDto): Promise<AccountDto> {
        try {
            const createdAccount = this.accountRepository.create(newAccount)

            return await this.accountRepository.save(createdAccount)
        } catch (error) {
            console.log({ error })
            throw new HttpException('Something went wrong creating a new account', HttpStatus.BAD_REQUEST)
        }
    }

    updateAccount(uuid: string, account: UpdateAccountDto): AccountDto {
        throw new HttpException('Method to be implemented', HttpStatus.NOT_IMPLEMENTED)
    }

    deleteAccount(uuid: string): AccountDto {
        throw new HttpException('Method to be implemented', HttpStatus.NOT_IMPLEMENTED)
    }
}

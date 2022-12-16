import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { AppEntity } from 'src/common/databases/postgresql/entities/app.entity';
import { Repository } from 'typeorm';
import { ApplicationDto } from '../storage/dto/validations/application.dto';
import { CreateApplicationDto } from '../storage/dto/validations/create-application.dto';
import { UpdateApplicationDto } from '../storage/dto/validations/update-application.dto';

@Injectable()
export class ApplicationService {
    constructor(
        @InjectRepository(AppEntity)
        private readonly appRepository: Repository<AppEntity>
    ) { }

    async getApplicationByClientId(uuid: string): Promise<ApplicationDto> {
        try {
            return await this.appRepository.findOneByOrFail({ clientId: uuid });
        } catch (error) {
            throw new HttpException(`There's not an app associated to a client with id : ${uuid} not found`, HttpStatus.NOT_FOUND)
        }
    }

    async createApplication(newApp: CreateApplicationDto): Promise<ApplicationDto> {
        try {
            const createdApp = this.appRepository.create(newApp)

            return await this.appRepository.save(createdApp)
        } catch (error) {
            throw new HttpException('Something went wrong creating the app', HttpStatus.BAD_REQUEST)
        }
    }

    async updateApplication(uuid: string, app: UpdateApplicationDto): Promise<ApplicationDto> {
        try {
            const appToUpdate = await this.appRepository.findOneByOrFail({ id: uuid })

            this.appRepository.merge(appToUpdate, app)

            return await this.appRepository.save(appToUpdate)
        } catch (error) {
            throw new HttpException(`App with id: ${uuid} not found`, HttpStatus.BAD_REQUEST)
        }
    }

    deleteApplication(uuid: string): ApplicationDto {
        throw new HttpException('Method to be implemented', HttpStatus.NOT_IMPLEMENTED)
    }
}

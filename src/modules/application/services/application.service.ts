import { Injectable } from '@nestjs/common';
import { ApplicationDto } from '../storage/dto/validations/application.dto';
import { CreateApplicationDto } from '../storage/dto/validations/create-application.dto';
import { UpdateApplicationDto } from '../storage/dto/validations/update-application.dto';

@Injectable()
export class ApplicationService {

    getApplication(uuid: string): ApplicationDto {
        throw new Error('Method to be implemented')
    }

    createApplication(newApp: CreateApplicationDto): ApplicationDto {
        throw new Error('Method to be implemented')
    }

    updateApplication(uuid: string, app: UpdateApplicationDto): ApplicationDto {
        throw new Error('Method to be implemented')
    }

    deleteApplication(uuid: string): ApplicationDto {
        throw new Error('Method to be implemented')
    }
}

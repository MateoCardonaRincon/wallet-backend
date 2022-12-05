import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { ApplicationDto } from '../storage/dto/validations/application.dto';
import { CreateApplicationDto } from '../storage/dto/validations/create-application.dto';
import { UpdateApplicationDto } from '../storage/dto/validations/update-application.dto';

@Injectable()
export class ApplicationService {

    getApplication(uuid: string): ApplicationDto {
        throw new HttpException('Method to be implemented', HttpStatus.NOT_IMPLEMENTED)
    }

    createApplication(newApp: CreateApplicationDto): ApplicationDto {
        throw new HttpException('Method to be implemented', HttpStatus.NOT_IMPLEMENTED)
    }

    updateApplication(uuid: string, app: UpdateApplicationDto): ApplicationDto {
        throw new HttpException('Method to be implemented', HttpStatus.NOT_IMPLEMENTED)
    }

    deleteApplication(uuid: string): ApplicationDto {
        throw new HttpException('Method to be implemented', HttpStatus.NOT_IMPLEMENTED)
    }
}

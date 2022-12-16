import { Body, Controller, Delete, Get, HttpStatus, Param, ParseUUIDPipe, Post, Put, ValidationPipe } from '@nestjs/common';
import { ApplicationService } from '../services/application.service';
import { ApplicationDto } from '../storage/dto/validations/application.dto';
import { CreateApplicationDto } from '../storage/dto/validations/create-application.dto';
import { UpdateApplicationDto } from '../storage/dto/validations/update-application.dto';

@Controller('application')
export class ApplicationController {

    constructor(private readonly applicationService: ApplicationService) { }

    @Get(':uuid')
    async getApplicationByClientId(@Param('uuid', ParseUUIDPipe) uuid: string): Promise<ApplicationDto> {
        return await this.applicationService.getApplicationByClientId(uuid);
    }

    @Post()
    async createApplication(
        @Body(
            new ValidationPipe({
                transform: true,
                whitelist: true,
                forbidNonWhitelisted: true,
                errorHttpStatusCode: HttpStatus.NOT_ACCEPTABLE,
            }),) newApp: CreateApplicationDto): Promise<ApplicationDto> {
        return await this.applicationService.createApplication(newApp);
    }

    @Put(':uuid')
    updateApplication(
        @Param('uuid', ParseUUIDPipe) uuid: string,
        @Body(
            new ValidationPipe({
                transform: true,
                whitelist: true,
                forbidNonWhitelisted: true,
                errorHttpStatusCode: HttpStatus.NOT_ACCEPTABLE,
            }),) app: UpdateApplicationDto): Promise<ApplicationDto> {
        return this.applicationService.updateApplication(uuid, app);
    }

    @Delete(':uuid')
    deleteApplication(@Param('uuid', ParseUUIDPipe) uuid: string): ApplicationDto {
        return this.applicationService.deleteApplication(uuid);
    }
}

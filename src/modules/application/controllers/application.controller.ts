import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { ApplicationService } from '../services/application.service';
import { ApplicationDto } from '../storage/dto/validations/application.dto';
import { CreateApplicationDto } from '../storage/dto/validations/create-application.dto';
import { UpdateApplicationDto } from '../storage/dto/validations/update-application.dto';

@Controller('application')
export class ApplicationController {

    constructor(private readonly applicationService: ApplicationService) { }

    @Get(':uuid')
    getApplication(@Param('uuid') uuid: string): ApplicationDto {
        return this.applicationService.getApplication(uuid);
    }

    @Post()
    createApplication(@Body() newApp: CreateApplicationDto): ApplicationDto {
        return this.applicationService.createApplication(newApp);
    }

    @Put(':uuid')
    updateApplication(@Param('uuid') uuid: string, @Body() app: UpdateApplicationDto): ApplicationDto {
        return this.applicationService.updateApplication(uuid, app);
    }

    @Delete(':uuid')
    deleteApplication(@Param('uuid') uuid: string): ApplicationDto {
        return this.applicationService.deleteApplication(uuid);
    }
}

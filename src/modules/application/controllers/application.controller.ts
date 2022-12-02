import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { ApplicationDto } from '../storage/dto/application.dto';
import { CreateApplicationDto } from '../storage/dto/create-application.dto';
import { UpdateApplicationDto } from '../storage/dto/update-application.dto';

@Controller('application')
export class ApplicationController {

    @Get(':uuid')
    getApplication(@Param('uuid') uuid: string): ApplicationDto {
        throw new Error('Method to be implemented')
    }

    @Post()
    createApplication(@Body() newApp: CreateApplicationDto): ApplicationDto {
        throw new Error('Method to be implemented')
    }

    @Put(':uuid')
    updateApplication(@Param('uuid') uuid: string, @Body() app: UpdateApplicationDto): ApplicationDto {
        throw new Error('Method to be implemented')
    }

    @Delete(':uuid')
    deleteApplication(@Param('uuid') uuid: string): ApplicationDto {
        throw new Error('Method to be implemented')
    }
}

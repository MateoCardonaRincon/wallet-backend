import { IsNotEmpty, IsUUID } from "class-validator";
import { CreateApplicationInterface } from "../interfaces/create-application.interface";

export class CreateApplicationDto implements CreateApplicationInterface {
    @IsUUID('4', { message: "The field 'clientId' must have UUID v4 format" })
    @IsNotEmpty({ message: "The field 'clientId' can't be empty" })
    clientId: string;
}

import { IsNotEmpty, IsUUID } from "class-validator";
import { CreateAccountInterface } from "../interfaces/create-account.interface";

export class CreateAccountDto implements CreateAccountInterface {
    @IsUUID('4', { message: "The field 'clientId' must have UUID v4 format" })
    @IsNotEmpty({ message: "The field 'clientId' can't be empty" })
    clientId: string;
}

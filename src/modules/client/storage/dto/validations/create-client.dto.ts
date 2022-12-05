import { IsEmail, IsNotEmpty, IsString, Length } from "class-validator";
import { CreateClientInterface } from "../interfaces/create-client.interface";

export class CreateClientDto implements CreateClientInterface {
    @IsString({ message: "'fullname' must be a string" })
    @IsNotEmpty({ message: "'fullname' can't be empty" })
    @Length(7, 500, {
        message: "'fullname' must have a minimum length of $constraint1 and a maximum length of $constraint2"
    })
    fullName: string;

    @IsEmail({ message: "'email' must have an email format" })
    @IsNotEmpty({ message: "'email' can't be empty" })
    @Length(15, 500, {
        message: "'email' must have a minimum length of $constraint1 and a maximum length of $constraint2"
    })
    email: string;

    @IsString({ message: "'phone' must be a string" })
    @IsNotEmpty({ message: "'phone' can't be empty" })
    @Length(10, 20, {
        message: "'phone' must have a minimum length of $constraint1 and a maximum length of $constraint2"
    })
    phone: string;

    @IsString({ message: "'photo' must be a string" })
    @IsNotEmpty({ message: "'photo' can't be empty" })
    @Length(5, 500, {
        message: "'photo' must have a minimum length of $constraint1 and a maximum length of $constraint2"
    })
    photo: string;
}
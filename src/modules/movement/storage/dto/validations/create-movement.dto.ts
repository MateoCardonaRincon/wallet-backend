import { IsNotEmpty, IsNumber, IsString, IsUUID, Length, Max, Min } from "class-validator";
import { CreateMovementInterface } from "../interfaces/create-movement.interface";

export class CreateMovementDto implements CreateMovementInterface {
    @IsUUID('4', { message: "The field 'accountIdIncome' must have UUID v4 format" })
    @IsNotEmpty({ message: "The field 'accountIdIncome' can't be empty" })
    accountIdIncome: string;

    @IsUUID('4', { message: "The field 'accountIdOutcome' must have UUID v4 format" })
    @IsNotEmpty({ message: "The field 'accountIdOutcome' can't be empty" })
    accountIdOutcome: string;

    @IsString({ message: "'reason' must be a string" })
    @IsNotEmpty({ message: "'reason' can't be empty" })
    @Length(0, 500, {
        message: "'reason' must have a minimum length of $constraint1 and a maximum length of $constraint2"
    })
    reason: string;

    @IsNumber({}, { message: "'amount' must be a number" })
    @IsNotEmpty({ message: "'amount' can't be empty" })
    @Min(1, { message: "'amount' must have a minimum value of $constraint1" })
    amount: number;

    @IsNumber({}, { message: "'fees' must be a number" })
    @IsNotEmpty({ message: "'fees' can't be empty" })
    @Max(60, { message: "'fees' must have a maximum value of $constraint1" })
    @Min(1, { message: "'fees' must have a minimum value of $constraint1" })
    fees?: number | undefined;
}

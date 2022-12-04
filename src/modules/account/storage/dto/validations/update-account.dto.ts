import { IsDate, IsNotEmpty, IsNumber, IsOptional, IsUUID } from "class-validator";
import { UpdateAccountInterface } from "../interfaces/update-account.interface";

export class UpdateAccountDto implements UpdateAccountInterface {
    @IsNumber({}, { message: "The field 'balance' must be a number" })
    @IsOptional()
    balance?: number;

    @IsNumber({}, { message: "The field 'credit' must be a number" })
    @IsOptional()
    credit?: number;

    @IsNumber({}, { message: "The field 'state' must be a 0 (idle account) or 1 (active account)" })
    @IsOptional()
    state?: number;

    @IsDate({ message: "The field 'updatedAt' must have Date format" })
    @IsOptional()
    updatedAt?: Date | null;

    @IsDate({ message: "The field 'deletedAt' must have Date format" })
    @IsOptional()
    deletedAt?: Date | null;
}

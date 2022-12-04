import { IsDate, IsOptional, IsString } from "class-validator";
import { UpdateApplicationInterface } from "../interfaces/update-application.interface";

export class UpdateApplicationDto implements UpdateApplicationInterface {
    @IsString({ message: "The field 'state' must be a 0 (idle account) or 1 (active account)" })
    @IsOptional()
    color?: string;

    @IsDate({ message: "The field 'updatedAt' must have Date format" })
    @IsOptional()
    updatedAt?: Date | null;
}

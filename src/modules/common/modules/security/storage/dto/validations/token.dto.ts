import { IsNotEmpty, IsString } from "class-validator";
import { TokenInterface } from "../interfaces/token.interface";

export class TokenDto implements TokenInterface {
    @IsString({ message: "The JWT token must be a string" })
    @IsNotEmpty({ message: "The JWT token must not be empty" })
    token: string;
}

import { ApplicationInterface } from "../interfaces/application.interface";

export class ApplicationDto implements ApplicationInterface {
    readonly id: string;
    readonly color: string;
    readonly createdAt: Date;
    readonly updatedAt: Date | null;
}

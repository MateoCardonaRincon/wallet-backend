import { ClientInterface } from "../interfaces/client.interface";

export class ClientDto implements ClientInterface {
    readonly id: string;
    readonly fullName: string;
    readonly email: string;
    readonly phone: string;
    readonly photo: string;
    readonly state: number;
    readonly createdAt: Date;
    readonly deletedAt: Date | null;
}

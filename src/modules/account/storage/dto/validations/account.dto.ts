import { AccountInterface } from "../interfaces/account.interface";

export class AccountDto implements AccountInterface {
    readonly id: string;
    readonly clientId: string;
    readonly balance: number;
    readonly credit: number;
    readonly state: number;
    readonly createdAt: Date;
    readonly updatedAt: Date | null;
    readonly deletedAt: Date | null;
}

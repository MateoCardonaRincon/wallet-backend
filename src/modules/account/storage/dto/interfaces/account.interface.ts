export interface AccountInterface {
    id: string;
    clientId: string;
    balance: number;
    credit: number;
    state: number;
    createdAt: Date;
    updatedAt: Date | null;
    deletedAt: Date | null;
}
export interface CreateMovementInterface {
    accountIdIncome: string;
    accountIdOutcome: string;
    reason: string;
    amount: number;
    fees?: number;
}
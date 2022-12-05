export interface MovementInterface {
    id: string;
    accountIdIncome: string;
    accountIdOutcome: string;
    reason: string;
    amount: number;
    fees: number;
    dateTime: Date;
}
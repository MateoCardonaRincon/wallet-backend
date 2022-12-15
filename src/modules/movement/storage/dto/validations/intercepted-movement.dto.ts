import { MovementInterface } from "../interfaces/movement.interface";

export enum MovementTypeEnum {
    IN = 'IN',
    OUT = 'OUT'
}

export class InterceptedMovementDto {
    accountIdIncome: string;
    accountIdOutcome: string;
    reason: string;
    amount: number;
    dateTime: Date;

    // type: MovementTypeEnum
}
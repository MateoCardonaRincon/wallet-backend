import { MovementInterface } from "../interfaces/movement.interface";

export class MovementDto implements MovementInterface {
    readonly id: string;
    readonly accountIdIncome: string;
    readonly accountIdOutcome: string;
    readonly reason: string;
    readonly amount: number;
    readonly fees: number;
    readonly dateTime: Date;
}

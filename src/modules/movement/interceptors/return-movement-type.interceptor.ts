import { CallHandler, ExecutionContext, Injectable, NestInterceptor } from '@nestjs/common';
import { HttpArgumentsHost } from '@nestjs/common/interfaces';
import { map, Observable } from 'rxjs';
import { InterceptedMovementDto, MovementTypeEnum } from '../storage/dto/validations/intercepted-movement.dto';
import { MovementDto } from '../storage/dto/validations/movement.dto';

@Injectable()
export class ReturnMovementTypeInterceptor implements NestInterceptor {

  intercept(context: ExecutionContext, next: CallHandler): Observable<any> {
    return next.handle()
      .pipe(
        map((movementList: MovementDto[]) => {
          return movementList.map((element: MovementDto) => {
            const transformedMovement: InterceptedMovementDto = new InterceptedMovementDto();

            transformedMovement.accountIdIncome = element.accountIdIncome;
            transformedMovement.accountIdOutcome = element.accountIdOutcome;
            transformedMovement.reason = element.reason;
            transformedMovement.amount = element.amount;
            transformedMovement.dateTime = element.dateTime;
            return transformedMovement
          })
        }));
  }
}

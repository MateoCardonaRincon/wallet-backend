import {
  Column,
  Entity,
  Index,
  JoinColumn,
  OneToMany,
  OneToOne,
} from "typeorm";
import { ClientEntity } from "./client.entity";
import { MovementEntity } from "./movement.entity";
import { v4 as uuidv4 } from 'uuid';

@Index("pkaccount", ["id"], { unique: true })
@Index("account_cli_id_Idx", ["clientId"], { unique: true })
@Entity("account", { schema: "public" })
export class AccountEntity {
  @Column("uuid", { primary: true, name: "acc_id" })
  id: string = uuidv4();

  @Column("uuid", { name: "cli_id" })
  clientId: string;

  @Column("bigint", { name: "acc_balance", default: () => "0" })
  balance: number;

  @Column("bigint", { name: "acc_credit", default: () => "50000000" })
  credit: number;

  @Column("integer", { name: "acc_state", default: () => "1" })
  state: number;

  @Column("timestamp without time zone", {
    name: "acc_created_at",
    default: () => "now()",
  })
  createdAt: Date;

  @Column("timestamp without time zone", {
    name: "acc_updated_at",
    nullable: true,
  })
  updatedAt: Date | null;

  @Column("timestamp without time zone", {
    name: "acc_deleted_at",
    nullable: true,
  })
  deletedAt: Date | null;

  @OneToOne(() => ClientEntity, (client) => client.account, {
    onDelete: "RESTRICT",
    onUpdate: "RESTRICT",
  })
  @JoinColumn([{ name: "cli_id", referencedColumnName: "id" }])
  client: ClientEntity;

  @OneToMany(() => MovementEntity, (movement) => movement.income)
  incomes: MovementEntity[];

  @OneToMany(() => MovementEntity, (movement) => movement.outcome)
  outcomes: MovementEntity[];
}

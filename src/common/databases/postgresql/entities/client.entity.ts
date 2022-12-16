import { Column, Entity, Index, OneToOne } from "typeorm";
import { AccountEntity } from "./account.entity";
import { AppEntity } from "./app.entity";
import { v4 as uuidv4 } from 'uuid';

@Index("client_cli_email_Idx", ["email"], { unique: true })
@Index("pkclient", ["id"], { unique: true })
@Index("client_cli_phone_Idx", ["phone"], { unique: true })
@Entity("client", { schema: "public" })
export class ClientEntity {
  @Column("uuid", { primary: true, name: "cli_id" })
  id: string = uuidv4();

  @Column("character varying", { name: "cli_full_name", length: 500 })
  fullName: string;

  @Column("character varying", { name: "cli_email", length: 500 })
  email: string;

  @Column("character varying", {
    name: "cli_phone",
    length: 500,
    default: () => ''
  })
  phone: string;

  @Column("character varying", {
    name: "cli_photo",
    length: 500,
    default: () => 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/59/User-avatar.svg/1024px-User-avatar.svg.png'
  })
  photo: string;

  @Column("integer", { name: "cli_state", default: () => "1" })
  state: number;

  @Column("timestamp without time zone", {
    name: "cli_created_at",
    default: () => "now()",
  })
  createdAt: Date;

  @Column("timestamp without time zone", {
    name: "cli_updated_at",
    nullable: true,
  })
  updatedAt: Date | null;

  @Column("timestamp without time zone", {
    name: "cli_deleted_at",
    nullable: true,
  })
  deletedAt: Date | null;

  @OneToOne(() => AccountEntity, (account) => account.client)
  account: AccountEntity;

  @OneToOne(() => AppEntity, (app) => app.client)
  app: AppEntity;
}

import { Column, Entity, Index, JoinColumn, OneToOne } from "typeorm";
import { ClientEntity } from "./client.entity";
import { v4 as uuidv4 } from 'uuid';

@Index("pkapp", ["id"], { unique: true })
@Index("app_cli_id_Idx", ["clientId"], { unique: true })
@Entity("app", { schema: "public" })
export class AppEntity {
  @Column("uuid", { primary: true, name: "app_id" })
  id: string = uuidv4();

  @Column("uuid", { name: "cli_id" })
  clientId: string;

  @Column("character varying", {
    name: "app_color",
    length: 30,
    default: () => "'#1055c4'",
  })
  color: string;

  @Column("timestamp without time zone", {
    name: "app_created_at",
    default: () => "now()",
  })
  createdAt: Date;

  @Column("timestamp without time zone", {
    name: "app_updated_at",
    nullable: true,
  })
  updatedAt: Date | null;

  @OneToOne(() => ClientEntity, (client) => client.app, {
    onDelete: "RESTRICT",
    onUpdate: "RESTRICT",
  })
  @JoinColumn([{ name: "cli_id", referencedColumnName: "id" }])
  client: ClientEntity;
}

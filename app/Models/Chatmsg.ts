import { DateTime } from "luxon";
import { BaseModel, column } from "@ioc:Adonis/Lucid/Orm";

export default class Chatmsg extends BaseModel {
  @column({ isPrimary: true })
  public id: number;
  @column()
  public msg_settings: {
    response_type?: string;
    save_input: boolean;
    data_field?: string;
    is_first_msg: boolean;
    is_last_msg: boolean;
    assign_rules: boolean;
    skip_on_back: boolean;
    disable_auto_reminder: boolean;
    jump: boolean;
    resend_on_error: boolean;
  };

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime;

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime;
}

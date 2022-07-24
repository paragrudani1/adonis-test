import BaseSeeder from "@ioc:Adonis/Lucid/Seeder";
import Chatmsg from "App/Models/Chatmsg";

export default class extends BaseSeeder {
  public async run() {
    // Write your database queries inside the run method
    await Chatmsg.create({
      id: 1,
      msg_settings: {
        assign_rules: true,
        disable_auto_reminder: true,
        is_first_msg: true,
        jump: false,
        is_last_msg: false,
        resend_on_error: true,
        save_input: true,
        skip_on_back: false,
        data_field: "data_field",
        response_type: "text",
      },
    });
  }
}

import { botInit } from './config/venom-bot.js';
import { handle_telecom } from './controllers/telecom.controller.js';
import dotenv from 'dotenv';
dotenv.config();

const run = async () => {
    try {
        const client = await botInit({
            session: 'grupo-telecom',
        });
        client.onMessage(async (data) => {
            if (data.from == process.env.ID_TELECOM) {
                const response = await handle_telecom(data);
                if (response != null) {
                    try {
                        console.log(response);
                        await client.reply(data.from, response.message, data.id);
                    } catch (error) {
                        console.error(error);
                    }
                }
            }
        });
    } catch (error) {
        console.error(error);
    }
};

run();

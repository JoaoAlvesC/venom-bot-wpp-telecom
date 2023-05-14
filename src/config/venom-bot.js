import { create } from 'venom-bot';

export const botInit = async ({ session }) => {
    const client = await create({
        session,
    });
    console.log('Bot initialized successfully');
    return client;
};

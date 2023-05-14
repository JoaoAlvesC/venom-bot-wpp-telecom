import { create } from 'venom-bot';

export const init = async (session) => {
    const client = await create({
        session
    });

    return client;
};


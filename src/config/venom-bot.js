import { create } from 'venom-bot';

const chromiumArgs = [
    '--disable-web-security',
    '--no-sandbox',
    '--disable-web-security',
    '--aggressive-cache-discard',
    '--disable-cache',
    '--disable-application-cache',
    '--disable-offline-load-stale-cache',
    '--disk-cache-size=0',
    '--disable-background-networking',
    '--disable-default-apps',
    '--disable-extensions',
    '--disable-sync',
    '--disable-translate',
    '--hide-scrollbars',
    '--metrics-recording-only',
    '--mute-audio',
    '--no-first-run',
    '--safebrowsing-disable-auto-update',
    '--ignore-certificate-errors',
    '--ignore-ssl-errors',
    '--ignore-certificate-errors-spki-list',
];

export const botInit = async ({ session }) => {
    const client = await create(
        session,
        (base64Qrimg, asciiQR, attempts) => {
            console.log('Number of attempts to read the qrcode: ', attempts);
            console.log('Terminal qrcode: ', asciiQR);
            console.log('base64 image string qrcode: ', base64Qrimg);
        },
        { useChrome: false, browserArgs: ['--no-sandbox'] }
    );
    console.log('Bot initialized successfully');
    return client;
};

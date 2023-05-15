import axios from 'axios';
import dotenv from 'dotenv';
dotenv.config();

//console.log(process.env)
const axios_header = { 'Content-Type': 'application/json' };

export const getToken = async () => {
    const data = {
        params: {
            user: process.env.USER_ZABBIX_API,
            password: process.env.PASS_ZABBIX_API,
        },
        jsonrpc: '2.0',
        method: 'user.login',
        auth: null,
        id: 1,
    };
    const token = await axios.post(process.env.URL_ZABBIX_API, data, {
        headers: axios_header,
    });

    return token.data.result;
};

export const create_host = async (hostname, ip) => {
    const token = await getToken();
    const data = {
        jsonrpc: '2.0',
        method: 'host.create',
        params: {
            host: hostname.replaceAll('\n', ''),
            status: 0,
            interfaces: [
                {
                    type: 2,
                    main: 1,
                    useip: 1,
                    ip: ip,
                    dns: '',
                    port: '161',
                    details: {
                        version: 2,
                        bulk: 1,
                        community: '{$SNMP_COMMUNITY}',
                    },
                },
            ],
            groups: [
                {
                    groupid: '29',
                },
            ],
            templates: [
                {
                    templateid: '14417',
                },
            ],
            proxy_hostid: 13522,
        },
        auth: token,
        id: 1,
    };
    const result = await axios.post(process.env.URL_ZABBIX_API, data, {
        headers: axios_header,
    });
    return result.data;
};

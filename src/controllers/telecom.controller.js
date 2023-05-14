import { add_host_zabbix } from '../actions/add-host-zabbix.js';

export const handle_telecom = async (data) => {
    const msg = data.body;
    if (msg.toUpperCase().includes('#ZABBIX')) {
        const response = await add_host_zabbix(msg);
        response.method = 'Monitoramento';
        return response;
    }

    return null;
};

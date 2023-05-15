import { extractIPv4 } from '../helpers/extract_ipv4.js';
import { isIPv4 } from 'is-ip';
import { create_host } from '../helpers/zabbix_api.js';

export const add_host_zabbix = async (text) => {
    const result = extractIPv4(text);
    const hostname = result[1];
    const ip = result[0];

    if (result != null && isIPv4(result[0])) {
        const group = result[0].includes('177.72.239') ? 'SATÉLITE' : 'CORPORATIVO';
        const created_host = await create_host(result[1], result[0]);
        
        // eslint-disable-next-line
        if (!created_host.hasOwnProperty('result')) return { message: '*ERRO*\n' + created_host.error.data };
        
        return { message: `Adicionado ao monitoramento: \nHostname: ${hostname}IP: ${ip} \nGrupo: ${group}` };

    } else {
        return {
            message: ' *ERRO*\nO IP informado não é um IPv4 válido. Tente solicitar novamente corrigindo a informação!',
        };
    }
};

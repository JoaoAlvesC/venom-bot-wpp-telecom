import { extractIPv4 } from '../helpers/extract_ipv4.js';
import { isIPv4 } from 'is-ip';

export const add_host_zabbix = async (text) => {
    const result = extractIPv4(text);
    if (result != null && isIPv4(result[0])) {
        const group = result[0].includes('177.72.239') ? 'SATÉLITE' : 'CORPORATIVO';
        return {
            message: `Adicionado ao monitoramento: \nHostname: ${result[1]}IP: ${result[0]} \nGrupo: ${group}`,
        };
    } else {
        return {
            message: ' *ERRO*\nO IP informado não é um IPv4 válido. Tente solicitar novamente corrigindo a informação!',
        };
    }
};

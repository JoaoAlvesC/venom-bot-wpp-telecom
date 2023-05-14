export const extractIPv4 = (str) => {
    const ipv4Regex = /(\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3})/;
    try {
        const match = str.match(ipv4Regex);
        if (match) {
            const ipv4 = match[1];
            const rest = str.replace(ipv4Regex, '');
            const host_name = rest.replace('#zabbix', '');
            return [ipv4, host_name];
        }
    } catch (error) {
        console.error(error);
        return null;
    }
};

import type { Config } from '@/types.ts';
import packageJson from './package.json';

const config: Config = {
    defaultLanguage: 'en',
    enabledLanguages: ['da', 'en', 'es', 'fi', 'fr', 'nb', 'sv', 'sl'],
    baseUrl: import.meta.env.PUBLIC_BASE_URL || '/',
    apiBaseUrl: import.meta.env.PUBLIC_API_URL || 'https://zonemaster.excedonet.net/api',
    pollingInterval: import.meta.env.PUBLIC_POLLING_INTERVAL || 5000,
    clientInfo: {
        version: packageJson.version,
        id: 'Zonemaster-GUI',
    },
    siteInfo: {
        email: 'contact@zonemaster.net',
        siteName: 'Zonemaster',
    },
    setTitle(title: string) {
        return `${title} – Zonemaster`;
    }
};

export default config;

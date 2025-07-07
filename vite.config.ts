import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

const STATIC_ENV = {
    __LINKS_APP_URL: 'https://links.prieul.fr',
    __HOMEPAGE_APP_URL: 'https://simon.prieul.fr',
    __STATIC_APP_URL: 'https://static.prieul.fr',
}

const define = Object.fromEntries(
    Object.entries(STATIC_ENV).map(([key, value]) => [key, JSON.stringify(value)])
)

// https://vite.dev/config/
export default defineConfig({
    plugins: [vue()],
    server: {
        host: '0.0.0.0',
    },
    define,
})

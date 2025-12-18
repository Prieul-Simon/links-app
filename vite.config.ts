import vue from '@vitejs/plugin-vue'
import { rm } from 'fs/promises'
import { minify } from 'html-minifier-terser'
import { defineConfig } from 'vite'
import { type ViteSSGOptions } from 'vite-ssg'

const STATIC_ENV = {
    __LINKS_APP_URL: 'https://links.prieul.fr',
    __HOMEPAGE_APP_URL: 'https://simon.prieul.fr',
    __STATIC_APP_URL: 'https://static.prieul.fr',

    __MY_BIRTHDAY_TIME_MILLISECONDS: new Date("1992-12-13T00:00:00.000+01:00").getTime(),
    __MEAN_NB_MILLISECONDS_IN_ONE_YEAR: 1_000 * 60 * 60 * 24 * 365.25,
}

const define = Object.fromEntries(
    Object.entries(STATIC_ENV).map(([key, value]) => [key, JSON.stringify(value)])
)

const OUT_DIR = 'dist'

const ssgOptions: ViteSSGOptions = {
    formatting: 'none',
    onPageRendered: (_, renderedHTML) => transformHtml(renderedHTML) ,
    onFinished: async () => {
        await rm(`./${OUT_DIR}/.vite`, { recursive: true, })
    },
}

// https://vite.dev/config/
export default defineConfig({
    plugins: [vue()],
    server: {
        host: '0.0.0.0',
    },
    build: {
        outDir: OUT_DIR,
        rollupOptions: {
            output: {
                advancedChunks: {
                    groups: [
                        {
                            test: /node_modules/,
                            name: 'libs',
                        },
                    ],
                },
            },
        },
    },
    ssgOptions,
    define,
})

async function transformHtml(html: string): Promise<string> {
    return await minify(html, {
        minifyCSS: true,
        minifyJS: false,
        removeComments: true,
    })
}

import { defineConfig, mergeConfig, type UserConfig } from 'vite'
import inherited from './vite.config'
import { rm } from 'fs/promises'

const overrides: UserConfig = defineConfig({
    build: {
        outDir: 'dist-ssg',
    },
    ssgOptions: {
        formatting: 'none',
        onFinished: async () => {
            await rm('./dist-ssg/.vite', { recursive: true, })
        },
    },
})
export default mergeConfig(
    inherited,
    overrides,
)
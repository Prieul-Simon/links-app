import { defineConfig, mergeConfig } from 'vite'
import inherited from './vite.config'
import { rm } from 'fs/promises'

export default mergeConfig(
    inherited,
    defineConfig({
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
)
import { defineConfig, mergeConfig } from 'vite'
import inherited from './vite.config'

export default mergeConfig(
    inherited,
    defineConfig({
        build: {
            outDir: 'dist-ssg',
        },
    })
)
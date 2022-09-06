/// <reference types="vitest" />

import { resolve } from 'path'
import { defineConfig } from 'vite'

export default defineConfig(() => ({
  base: './',
  build: {
    chunkSizeWarningLimit: 500,
    devSourcemap: true,
    // lib: {
    //   entry: resolve(__dirname, 'src/core/index.ts'),
    //   name: 'dati',
    //   fileName: 'dati',
    // },
    manifest: true,
    target: 'modules',
    sourcemap: false,
  },
  css: {
    modules: {
      hashPrefix: 'dd',
      localsConvention: 'camelCase',
    },
    preprocessorOptions: {
      scss: {
        $block: 'dx',
      },
    },
  },
  preview: {
    port: 7512,
  },
  resolve: {
    alias: {
      '@': resolve(__dirname, 'src'),
    },
  },
  server: {
    port: 7511,
  },
  test: {
    include: ['src/**/*.spec.{ts,tsx}', 'tests/**/*.spec.ts'],
    outputFile: 'test-results.json',
    reporters: 'json',
    root: './',
  },
}))

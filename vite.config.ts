import { defineConfig } from 'vite'
import { resolve } from 'path'
import react from '@vitejs/plugin-react'
import dts from 'vite-plugin-dts'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), dts({
    insertTypesEntry: true,
  }),],
  build: {
    lib: {
      entry: resolve(__dirname, 'src/lib/LinkToVscode.tsx'),
      name: 'react-link-to-vscode',
      formats: ['es', 'umd'],
      fileName: (format) => `react-link-to-vscode.${format}.js`,
    },
    rollupOptions: {
      // make sure to externalize deps that shouldn't be bundled
      // into your library
      external: ['react', 'react-dom'],
      output: {
        // Provide global variables to use in the UMD build
        // for externalized deps
        globals: {
          react: 'React',
          'react-dom': 'ReactDOM',
        },
      }
    }
  }
})

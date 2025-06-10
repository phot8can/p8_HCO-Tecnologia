import { defineConfig } from 'vite'
// import path from "path";
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
    //  resolve: {
    //   alias: {
    //     "@root": path.resolve(__dirname, "./"),
    //     "@app": path.resolve(__dirname, "./src"),
    //     "@assets": path.resolve(__dirname, "./src/assets"),
    //     "@components": path.resolve(__dirname, "./src/components"),
    //     "@config": path.resolve(__dirname, "./src/config"),
    //     "@pages": path.resolve(__dirname, "./src/pages"),
    //     "@routes": path.resolve(__dirname, "./src/routes"),
    //     "@utils": path.resolve(__dirname, "./src/utils")
    //   }
    // },
  plugins: [react()],
})

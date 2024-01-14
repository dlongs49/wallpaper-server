import {defineConfig, loadEnv} from "vite";
import {svelte} from "@sveltejs/vite-plugin-svelte";
import {resolve} from 'path'

export default ({mode}) => {
    let base_url = loadEnv(mode, process.cwd()).VITE_APP_BASE_URL
    console.log(mode)
    return defineConfig({
        plugins: [svelte()],
        // base: mode === 'production' ? '/wadmin' : '/',
        base: '/',
        server: {
            hmr: true,
            host: "0.0.0.0",
            port: 81,
            proxy: {
                "/api": {
                    target: base_url,
                    changeOrigin: true,
                    rewrite: (path) => path.replace('^/api', '/api')
                }
            }
        },
        resolve: {
            alias: [{
                find: "@",
                replacement: resolve(__dirname, "src"),
            }],
        },
        build: {
            outDir: "dist",
            rollupOptions: {
                output: {
                    chunkFileNames: "static/js/[hash].js",
                    entryFileNames: "static/js/[hash].js",
                    assetFileNames: "static/[ext]/[hash].[ext]",
                    manualChunks(id) { //静态资源分拆打包
                        if (id.includes("node_modules")) {
                            return id.toString().split("node_modules/")[1].split("/")[0].toString();
                        }
                    }
                }
            }
        }
    });

}

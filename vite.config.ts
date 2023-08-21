import { defineConfig, loadEnv } from "vite";
import { resolve } from "node:path";
import vue from "@vitejs/plugin-vue";
import UnoCSS from "unocss/vite";
import tsChecker from "vite-plugin-checker";
import devTools from "vite-plugin-vue-devtools";
import autoImport from "unplugin-auto-import/vite";
import viteCompression from "vite-plugin-compression";

export default ({ mode }) => {
  const VITE_BASE_URL = loadEnv(mode, process.cwd()).VITE_BASE_URL;

  return defineConfig({
    base: "/",
    resolve: {
      alias: {
        "@": resolve(__dirname, "src"),
      },
    },
    build: {
      rollupOptions: {
        output: {
          entryFileNames: "assets/js/[name].js",
          chunkFileNames: "assets/js/[name]-[hash].js",
          assetFileNames: "assets/[ext]/[name]-[hash]-.[ext]",
          manualChunks(id) {
            if (id.includes("node_modules")) {
              return id
                .toString()
                .split("node_modules/")[1]
                .split("/")[0]
                .toString();
            }
          },
        },
      },
    },
    server: {
      proxy: {
        "/api/": {
          target: VITE_BASE_URL,
          changeOrigin: true,
          rewrite: (path) => path.replace(/^\/api/, ""),
        },
      },
    },
    plugins: [
      vue(),
      UnoCSS(),
      autoImport({
        imports: [
          "pinia",
          "vue-i18n",
          "vue-router",
          "@vueuse/core",
          "@vue/composition-api",
        ],
      }),
      devTools(),
      tsChecker({
        typescript: true,
      }),
      viteCompression(),
    ],
  });
};

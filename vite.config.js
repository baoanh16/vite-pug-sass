import vituum from "vituum";
import pug from "@vituum/vite-plugin-pug";
import WindiCSS from "vite-plugin-windicss";
import { defineConfig } from "vite";

export default defineConfig({
  plugins: [
    vituum({
      imports: {
        filenamePattern: {
          "+.css": [],
          "+.scss": "src/styles",
        },
        extnamePattern: {
          styles: /.(css|less|sass|pcss)$/,
        },
      },
    }),
    pug({
      root: "./src",
    }),
    WindiCSS(),
  ],
  build: {
    rollupOptions: {
      output: {
        entryFileNames: `assets/[name].js`,
        chunkFileNames: `assets/[name].js`,
        assetFileNames: `assets/[name].[ext]`,
      },
    },
  },
});

import { defineConfig } from "vite";

export default defineConfig({
  root: ".", // Ensure Vite runs from the project root
  server: {
    port: 9000,
  },
  build: {
    outDir: "dist",
    lib: {
      entry: "src/user/TaleemCanvas.js", // Your actual entry point
      name: "TaleemCanvas",
      fileName: "taleem-canvas",
      formats: ["es", "umd"], // Support both ES Modules & UMD
    }
  }
});

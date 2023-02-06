/// <reference types="vitest" />
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  test: {
    globals: true,
    environment: "jsdom",
    includeSource: ["src/__tests__/*.{js,tsx,ts}"],
    setupFiles: 'src/setupTests.ts',
    coverage: {
      reporter: ["text", "json", "html"],
    },
  },
  plugins: [react()],
});

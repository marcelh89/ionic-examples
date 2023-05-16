import legacy from "@vitejs/plugin-legacy";
import path from "path";
import { defineConfig } from "vite";
import { transformSync } from '@lwc/compiler';
import { readFileSync } from 'fs';
import { resolve } from'path';

function lwcPlugin() {

  console.log("lwcPlugin running...")

 

  return {
    name: 'lwc',

    async transform(code, id) {

      

      console.log("transform running...", id)

      if (!/\.html$/.test(id)) {
        return null;
      }

      if(id.includes("main.js")){
        return null
      }

      const jsPath = id.replace(/\.html$/, '.js');
      console.log("jsPath", jsPath)
      const jsCode = readFileSync(resolve(jsPath), 'utf8');
      const { code: transformedCode } = transformSync(jsCode, jsPath, {});

      console.log("compiled", code)

      return {
        code: transformedCode,
        map: null,
      };
    },
  };
}

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    lwcPlugin(),
    legacy(),
  ],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  }
 });

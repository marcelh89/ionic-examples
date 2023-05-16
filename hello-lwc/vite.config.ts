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

      if (id.includes("node_modules")) {
        console.log("lwcPlugin skipping node_modules")
        return null;
      }

      // if (!/\.html$/.test(id)) {
      //   console.log("lwcPlugin early return")
      //   return null;
      // }

      const jsPath = id.replace(/\.html$/, '.js');
      console.log("jsPath", jsPath)
      const jsCode = readFileSync(resolve(jsPath), 'utf8');
      const { code: transformedCode } = transformSync(jsCode, jsPath, {});
      //const transformedResult = transformSync(jsCode, jsPath, {});
      //console.log("transformedResult", transformedResult)
      console.log("compiled", transformedCode)

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

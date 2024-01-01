import {defineConfig} from 'vite'


export default defineConfig({
	esbuild: {
		jsxFactory: 'h',
		jsxFragment: 'Fragment',
		format: 'esm',  // Set the output format to ESM
	},
	plugins: []	
})
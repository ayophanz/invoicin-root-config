import type { PluginOption } from 'vite';
import { defineConfig, loadEnv, UserConfigExport } from 'vite';
import checker from 'vite-plugin-checker';
import handlebars from 'vite-plugin-handlebars';
import dns from 'dns';

dns.setDefaultResultOrder('verbatim');

export default defineConfig(({ mode }) => {
	const env = loadEnv(mode, process.cwd());
	const handlebarsConfig = {
		context: {
			isLocal: mode === env.VITE_MODE
		}
	} as any;

	const config: UserConfigExport = {
		base: './',
		server: {
			port: 9000
		},
		build: {
			rollupOptions: {
				input: {
					index: './index.html',
					'root-config': './src/main.js'
				},
				output: {
					format: 'system',
					entryFileNames: '[name].js',
					assetFileNames: 'assets/[name][ext]',
					globals: {
						'single-spa': 'singleSpa',
						'single-spa-layout': 'singleSpaLayout'
					}
				},
				preserveEntrySignatures: 'strict',
				external: ['vue', 'single-spa', 'single-spa-layout']
			}
		},
		plugins: [
			checker({
				typescript: true
			}),
			handlebars(handlebarsConfig) as unknown as PluginOption
			// {
			// 	name: 'vite-plugin-build-rm-file',
			// 	apply: 'build',
			// 	enforce: 'post',
			// 	closeBundle() {
			// 		fs.unlinkSync(`${env.VITE_OUTDIR}/index.js`);
			// 	}
			// }
		]
	};

	return config;
});

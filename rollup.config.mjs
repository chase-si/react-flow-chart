// rollup.config.mjs
import json from '@rollup/plugin-json';
import terser from '@rollup/plugin-terser';
import babel from '@rollup/plugin-babel';

export default {
	input: 'src/main.jsx',
	output: [{
		file: 'dist/bundle.js',
		format: 'cjs'
	}, {
		file: 'dist/bundle.min.js',
		format: 'iife',
		name: 'version',
		plugins: [terser()]
	}],
	plugins: [
		json(),
		babel({
			presets: ['@babel/preset-react'],
			extensions: ['.js', '.jsx']
		})
	]
};
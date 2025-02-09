import pluginJs from "@eslint/js";
import tseslint from "typescript-eslint";
import configPrettier from "eslint-config-prettier";

export default [
	pluginJs.configs.recommended,
	...tseslint.configs.recommended,
	{
		ignores: ["dist/**/*", "webpack.config.js"]
	},
	configPrettier
];

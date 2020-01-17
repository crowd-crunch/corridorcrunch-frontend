// const withCSS = require("@zeit/next-css");

const withLess = require("@zeit/next-less");

module.exports = withLess({
	// webpack: (config, { buildId, dev, isServer, defaultLoaders, webpack }) => {
	webpack: (config, { webpack }) => {
		// Note: we provide webpack above so you should not `require` it
		// Perform customizations to webpack config
		// Important: return the modified config

		// Example using webpack option

		const loaders = config.module.rules.reduce((combinedRules, rule) => {
			const { test, use } = rule;
			if (test.toString().includes("less")) {
				const modifiedRules = use.reduce((combinedLoaders, loader) => {
					if (loader.loader === "less-loader") {
						const lessLoaderOverrides = {
							loader: "less-loader",
							options: {
								modifyVars: {
									hack: `true; @import "${__dirname}/theme/overrides.less";`
								}
							}
						};

						return [...combinedLoaders, lessLoaderOverrides];
					}

					return [...combinedLoaders, loader];
				}, []);

				const lessRule = {
					test: /\.less$/,
					use: modifiedRules
				};

				return [...combinedRules, lessRule];
			}

			return [...combinedRules, rule];
		}, []);

		/* eslint-disable no-param-reassign */
		config.module.rules = loaders;
		config.plugins.push(new webpack.IgnorePlugin(/\/__tests__\//));

		return config;
	},
	webpackDevMiddleware: config => {
		// Perform customizations to webpack dev middleware config
		// Important: return the modified config
		return config;
	}
});

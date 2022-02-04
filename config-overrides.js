
module.exports = function override(config, env) {
	
	config.module.rules = config.module.rules.map(rule => {
		if (rule.oneOf instanceof Array) {
			return {
				...rule,
				oneOf: [
					{
						test: /\.css$/i,
                        use: ['style-loader', 'css-loader'],
					},
					...rule.oneOf
				]
			};
		}

		return rule;
	});

	return config;
}
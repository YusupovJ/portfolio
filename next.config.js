/** @type {import('next').NextConfig} */
const nextConfig = {
	reactStrictMode: true,
	swcMinify: true,
	images: {
		domains: ["amazingarchitecture.com", "cdn.filestackcontent.com"],
	},
	env: {
		service_id: "portfolio_2007",
		template_id: "template_2igiphr",
		user_id: "ddY_ulWuD1ecXsW8M",
	},
	webpack(config) {
		config.module.rules.push({
			test: /\.svg$/,
			use: ["@svgr/webpack"],
		});

		return config;
	},
};

module.exports = nextConfig;

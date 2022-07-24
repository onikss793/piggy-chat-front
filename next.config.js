/** @type {import('next').NextConfig} */
const nextConfig = {
	reactStrictMode: true,
	env: {
		GET_STREAM_API_KEY: process.env.GET_STREAM_API_KEY,
		GET_STREAM_SECRET_KEY: process.env.GET_STREAM_SECRET_KEY,
		SENDBIRD_APP_ID: process.env.SENDBIRD_APP_ID
	},
	images: {
		domains: ['google.com', 'www.google.com', 'cdn.weekly.chosun.com', 'postfiles.pstatic.net']
	}
};

module.exports = nextConfig;
